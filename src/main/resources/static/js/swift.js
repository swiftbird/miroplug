function updateCanvasLocation(canvasX, canvasY, data) {
    console.log("Canvas X is: " + canvasX)
    console.log("Canvas Y is: " + canvasY)
    let originX = data[0]["x"]
    let originY = data[0]["y"]
    console.log("Origin is: " + originX + ":" + originY)
    console.log("Width is: " + data[0]["width"])
    console.log("Type is: " + data[0]["type"])
    for (var k in data) {
        // console.log("updating location for type: " + data[k].type)
        //remove the width

        var x = data[k]["x"]
        // console.log("X before: " + x)
        data[k]["x"] = x - originX + canvasX
        // console.log("X after: " + data[k]["x"])

        var y = data[k]["y"]
        data[k]["y"] = y - originY + canvasY
        if (data[k].type === "sticky_note") {
            // console.log("It's a sticky")
            // Make sure there is only one dimension
            delete data[k]["width"]
        }
        //Remove all the id's and parent id's
        delete data[k]["id"]
        delete data[k]["parentId"]

        // console.log("y before: " + y)
        // console.log("y after: " + data[k]["y"] )
        // console.log(data[k]["x"])

        // var bx = data[k]["bounds"]["x"]
        // data[k]["bounds"]["x"] = bx + canvasX
        //
        // var by = data[k]["bounds"]["y"]
        // data[k]["bounds"]["y"] = by + canvasY
    }
    return data

}

async function sendWidget(widget) {
    const widgetJson = JSON.stringify(widget)
    console.log("Sending: ")
    console.log(widgetJson)
    const response = await fetch('swiftwidgets' , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: widgetJson.toString()
    })
    console.log("I got a response: " + response)
}

async function processDrop(target, canvasX, canvasY) {
    // fetch("swiftwidgets/snapforms/").then((response) => {response.json().then((data) => {return updateCanvasLocation(canvasX,canvasY ,data)})})
    // let response = await fetch('swiftwidgets/snapforms/');

    let response = await fetch('swiftwidgets?element=' + target.id)
    let json = await response.json();
    let localizedJson = updateCanvasLocation(canvasX, canvasY, json)
    // getting the first element so we can zoom to it after all is done
    let firstElement = localizedJson[0]
    let zoomTarget = null;
    console.log("I have a target with id: " + target.id)
    console.log('Putting the loopage')
    if (firstElement["type"] === "frame") {
        console.log("The first thing IS a frame!")
        zoomTarget = await miro.board.createFrame(firstElement)
    }
    for (element in localizedJson) {

        let currentElement = localizedJson[element]
        switch (currentElement["type"]) {
            case "text":
                console.log("Yo, I have a text element! ")

                miro.board.createText(currentElement)
                break;
            case "frame":
                console.log("And this is a frame!")
                // Don't do a second frame
                if (currentElement != firstElement) {
                    miro.board.createFrame(currentElement)
                }
                break;
            case "card":
                console.log("This is a card!")
                miro.board.createCard(currentElement)
                break;
            case "sticky_note":
                console.log("This is a sticky_note!")
                // console.log(currentElement)
                // I can put a tag in here for each sticky
                // const todo = await miro.board.createTag({
                //     title: 'todo or not todo, that is the question',
                //     color: 'yellow',
                // });
                const stick =  await miro.board.createStickyNote(currentElement)

                // if (zoomTarget) {
                //     zoomTarget.add(stick)
                // }
                // Send the widget to the server
                sendWidget(stick)
                break;
            case "shape":
                console.log("This is a shape!")
                miro.board.createShape(currentElement)
                break;
            case "image":
                console.log("This is a image!")
                miro.board.createImage(currentElement)
                break;
            case "preview":
                console.log("This is a preview!")
                miro.board.createPreview(currentElement)
                break;
            case "tag":
                console.log("This is a tag!")
                miro.board.createTag(currentElement)
                break;
            case "embed":
                console.log("This is an embed!")
                miro.board.createEmbed(currentElement)
                break;
            default:
                console.log("No friggen clue! " + currentElement["type"])
                break;

        }

    }
    // console.log(localizedJson)
    if (zoomTarget !== null) {
        miro.board.viewport.zoomTo(zoomTarget)
    }
    return
    // return miro.board.widgets.create(localizedJson)

}

async function init() {
    // Enable the 'drop' event on the app panel. Active on 'miro-draggable' HTML elements
    await miro.board.ui.on('drop', async ({x, y, target}) => {
        // In this example: when the HTML element is dropped on the board, a sticky note is created
        console.log("target:")
        console.log(target.id)
        await processDrop(target, x, y)
        // await miro.board.createStickyNote({
        //     x,
        //     y,
        //     content: target.textContent,
        // });
    });
    // Enable the 'icon:click' event on the app icon
    // await miro.board.ui.on("icon:click", async () => {
    //     // In this example: when the app icon is clicked, a method opens a panel
    //     await miro.board.ui.openPanel({
    //         // The content displayed on the panel is fetched from the specified HTML resource
    //         url: "app.html"
    //     });
    // });
}

init();