function createImage(canvasX, canvasY, url) {
    return miro.board.widgets.create({
        type: 'image',
        url: url,
        x: canvasX,
        y: canvasY,
    })
}

function createShape(canvasX, canvasY, color, text) {
    return miro.board.widgets.create({
        type: 'shape',
        text: text,
        x: canvasX,
        y: canvasY,
        style: {
            textColor: '#fff',
            backgroundColor: '#' + color,
            borderColor: 'transparent',
        },
    })
}

function createSnap(canvasX, canvasY, color, text) {
    return miro.board.widgets.create(
    //     {
    //     type: 'shape',
    //     text: text,
    //     x: canvasX,
    //     y: canvasY,
    //     style: {
    //         textColor: '#fff',
    //         backgroundColor: '#' + color,
    //         borderColor: 'transparent',
    //     },
    // }
        [
        {
            "type": "frame",
            "x": 0,
            "y": 0,
            "width": 5000,
            "height": 6500,
            "style": {
                "borderWidth": 1,
                "backgroundColor": "#ffffff"
            }
        },
            {
                "type": "shape",
                "text": "<p><strong><u>Donkey</u></strong></p>",
                // "x": 4000,
                "x": canvasX,
                // "y": 0,
                "y": canvasY,
                "width": 3000,
                "height": 4500,

                "style": {
                    "backgroundColor": "#ffffff",
                    "backgroundOpacity": 1,
                    "bold": 0,
                    "borderColor": "#1a1a1a",
                    "borderOpacity": 1,
                    "borderStyle": 2,
                    "borderWidth": 1,
                    "fontFamily": 0,
                    "fontSize": 144,
                    "highlighting": 0,
                    "shapeType": 3,
                    "textAlign": "c",
                    "textAlignVertical": "t",
                    "textColor": "#1a1a1a"
                }
            }
        ])
}

function bootstrap() {
    const container = document.getElementById('container')
    // addShapes(container)
    // addImages(container)
    console.log(("I am bootstrapping: "))

    // Async stuff
    // miro.board.widgets.get({}).then((wid => console.log(wid)))

    let currentImageUrl
    const imageOptions = {
        draggableItemSelector: 'img',
        onClick: async (targetElement) => {
            const url = targetElement.getAttribute('data-image-url')
            const widget = (await createImage(0, 0, url))[0]
            miro.board.viewport.zoomToObject(widget)
        },
        getDraggableItemPreview: (targetElement) => {
            //drag-started
            currentImageUrl = targetElement.getAttribute('data-image-url')
            return {
                width: 100,
                height: 100,
                url: currentImageUrl,
            }
        },
        onDrop: (canvasX, canvasY) => {
            console.log('onDrop 1')
            createImage(canvasX, canvasY, currentImageUrl)
        },
    }
    miro.board.ui.initDraggableItemsContainer(container, imageOptions)

    let currentShapeColor
    let currentShapeText
    const shapeOptions = {
        draggableItemSelector: '.shape',
        onClick: async (targetElement) => {
            const color = targetElement.getAttribute('data-color')
            const text = targetElement.innerText
            const widget = (await createSnap(0, 0, color, text))[0]
            miro.board.viewport.zoomToObject(widget)
        },
        getDraggableItemPreview: (targetElement) => {
            currentShapeColor = targetElement.getAttribute('data-color')
            currentShapeText = targetElement.innerText
            return {
                url: `data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentShapeColor}' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`,
            }
        },
        onDrop: (canvasX, canvasY) => {
            console.log('onDrop 2')
            createShape(canvasX, canvasY, currentShapeColor, currentShapeText)
            createSnap(canvasX, canvasY, currentShapeColor, currentShapeText)

        },
    }
    miro.board.ui.initDraggableItemsContainer(container, shapeOptions)
}

miro.onReady(bootstrap)