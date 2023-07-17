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

async function createBorisGraph(widget) {
    const widgetJson = JSON.stringify(widget)
    console.log("Sending to save graph: ")
    console.log(widgetJson)

    const response = await fetch('spaceport/borismodels', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: widgetJson.toString()
    })
    let json = await response.json();


    // drawit(json);
    console.log("I got a response: " + JSON.stringify(json))
    // const stick = await miro.board.createStickyNote(json)
    // console.log(stick)
    // miro.board.viewport.zoomTo(stick);
}

async function sendWidget(widget) {
    const widgetJson = JSON.stringify(widget)
    console.log("Sending: ")
    console.log(widgetJson)

    const response = await fetch('swiftwidgets', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: widgetJson.toString()
    })
    let json = await response.json();


    drawit(json);
    console.log("I got a response: " + JSON.stringify(json))
    // const stick = await miro.board.createStickyNote(json)
    // console.log(stick)
    // miro.board.viewport.zoomTo(stick);
}

async function drawit(localizedJson) {
    let nodeMap = new Map()

    let connectors = []
    //pull out the connectors


    for (element in localizedJson) {

        let currentElement = localizedJson[element]
        switch (currentElement["type"]) {
            case "text":
                console.log("Yo, I have a text element! ")

                const t = miro.board.createText(currentElement)
                nodeMap.set(currentElement.id, t.id)
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
                let card = await miro.board.createCard(currentElement)
                // card.width = 600;
                card.height = 800;
                nodeMap.set(currentElement.id, card.id)
                // card.rotation = -45;
                await card.sync();
                miro.board.viewport.zoomTo(card);
                break;
            case "sticky_note":
                console.log("This is a sticky_note!")
                console.log("The old id is: ", currentElement.id)
                // I can put a tag in here for each sticky
                // const todo = await miro.board.createTag({
                //     title: 'todo or not todo, that is the question',
                //     color: 'yellow',
                // });

                const stick = await miro.board.createStickyNote(currentElement)
                console.log("The new Id is: ", stick.id)
                nodeMap.set(currentElement.id, stick.id)
                console.log(nodeMap)
                // miro.board.viewport.zoomTo(stick);
                // if (zoomTarget) {
                //     zoomTarget.add(stick)
                // }
                // Send the widget to the server
                // sendWidget(stick)
                break;
            case "shape":
                console.log("This is a shape!")
                const shape = miro.board.createShape(currentElement)
                nodeMap.set(currentElement.id, shape.id)
                break;
            case "image":
                console.log("This is a image!")
                const image = await miro.board.createImage(currentElement)
                nodeMap.set(currentElement.id, image.id)
                console.log("Image created")
                break;
            case "preview":
                console.log("This is a preview!")
                const preview = miro.board.createPreview(currentElement)
                nodeMap.set(currentElement.id, preview.id)
                break;
            case "tag":
                console.log("This is a tag!")
                const tag = miro.board.createTag(currentElement)
                nodeMap.set(currentElement.id, stitagck.id)
                break;
            case "connector":
                console.log("This is a connector! ", currentElement)
                connectors.push(currentElement)
                // // Because Miro can't move things we have to look up the ids in a hash to get the old and new
                // currentElement.start.item = nodeMap.get(currentElement.start.item)
                // currentElement.end.item = nodeMap.get(currentElement.end.item)
                // console.log("The nodeMap start is: ", nodeMap.get(currentElement.start.item))
                // console.log("The nodeMap start is: ", nodeMap.get(currentElement.end.item))
                // // const conn = await miro.board.createConnector(currentElement)
                // // miro.board.viewport.zoomTo(conn);
                console.log("connector created!", connectors)
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
    // now draw the connectors
    for (connector in connectors) {
        let currentElement = connectors[connector]
        // Because Miro can't move things we have to look up the ids in a hash to get the old and new
        console.log("Connector: ", currentElement)
        console.log("NodeMap: ", nodeMap)
        console.log("The connector is: ", currentElement.start.item)
        console.log("It should be: ", nodeMap.get(currentElement.start.item))
        let newStart = nodeMap.get(currentElement.start.item)
        let newEnd = nodeMap.get(currentElement.end.item)
        currentElement.start.item = newStart
        currentElement.end.item = newEnd
        // connectors[connector].start.item = nodeMap.get(connectors[connector].start.item)
        // connectors[connector].end.item = nodeMap.get(connectors[connector].end.item)
        // console.log("The nodeMap start is: ", nodeMap.get(connectors[connector].start.item))
        // console.log("The nodeMap start is: ", nodeMap.get(connectors[connector].end.item))
        const conn = await miro.board.createConnector(currentElement)
        // miro.board.viewport.zoomTo(conn);
    }
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
                let card = await miro.board.createCard(currentElement)
                // card.width = 600;
                card.height = 800;
                // card.rotation = -45;
                await card.sync();
                miro.board.viewport.zoomTo(card);
                break;
            case "sticky_note":
                console.log("This is a sticky_note!")
                console.log(currentElement)
                // I can put a tag in here for each sticky
                // const todo = await miro.board.createTag({
                //     title: 'todo or not todo, that is the question',
                //     color: 'yellow',
                // });

                const stick = await miro.board.createStickyNote(currentElement)

                // if (zoomTarget) {
                //     zoomTarget.add(stick)
                // }
                // Send the widget to the server
                // sendWidget(stick)
                break;
            case "shape":
                console.log("This is a shape!")
                miro.board.createShape(currentElement)
                break;
            case "image":
                console.log("This is a image!")
                await miro.board.createImage(currentElement)
                console.log("Image created")
                break;
            case "preview":
                console.log("This is a preview!")
                miro.board.createPreview(currentElement)
                break;
            case "tag":
                console.log("This is a tag!")
                miro.board.createTag(currentElement)
                break;
            case "connector":
                console.log("This is a connector!")
                const conn = await miro.board.createConnector(currentElement)
                miro.board.viewport.zoomTo(conn);
                console.log("connector created!")
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


    // const todo = await miro.board.createTag({
    //     title: 'todo-cuz-i-wanna',
    //     color: 'yellow'
    // });
    // console.log("Tag id: " + todo.id);

//     const selectionHandler = async (event) => {
//         console.log('Got a selection update event', event);
//         console.log(event.items);
//         // console.log(JSON.stringify(event));
//         const selectedItems = event.items;
//         const x = event.items[0].x;
//         const y = event.items[0].y;
//         console.log(event.items[0].x);
// // Unregister for the event
//         await miro.board.ui.off('selection:update', selectionHandler)
//
//         await sendWidget(selectedItems);
//     }

    // await miro.board.ui.on('selection:update', selectionHandler)


//         // Filter sticky notes from the selected items
//         const stickyNotes = selectedItems.filter((item) => item.type === 'sticky_note');
//         //
//         // for (const stickyNote of stickyNotes) {
//         //     stickyNote.tagIds.push(todo.id);
//         //     await stickyNote.sync();
//         // }
// sendWidget(event.items);
//
//     });


}

document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("fix-boris-btn");
    if (el) {
        el.addEventListener("click", async function () {
            console.log("Reorg");
            await sendWidget(await miro.board.getSelection())
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("space-port-btn");
    if (el) {
        el.addEventListener("click", async function () {
            console.log("Space Port!");
            // createBorisGraph(await miro.board.getSelection());
            // await sendWidget(await miro.board.getSelection())
            await miro.board.ui.openModal({
                url: 'spaceport/3dboris.html',
                width: 1024,
                height: 768,
                fullscreen: false,
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("save-boris-btn");
    if (el) {
        el.addEventListener("click", async function () {
            console.log("Save Boris!");
            createBorisGraph(await miro.board.getSelection());
            // await sendWidget(await miro.board.getSelection())
            // await miro.board.ui.alert("Boris Saved!");
            // Create a notification message to display on the board UI.
            const infoMessage = {
                code: 42,
                action: 'The ultimate answer to life, the universe, and everything is:',
                followUp: '42.',
            };

// Compose the message.
            const infoNotification = `${infoMessage.action} ${infoMessage.followUp}`;

// Display the notification on the board UI.
            await miro.board.notifications.showInfo(infoNotification);
        });
    }
});


init().then(function oink(response) {

    console.log('Swift Panel Initialized');
});

