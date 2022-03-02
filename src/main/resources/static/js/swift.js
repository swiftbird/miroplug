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

function createSnapold(canvasX, canvasY, color, text) {
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
                "width": 3100,
                "height": 4600,
                "style": {
                    "borderWidth": 1,
                    "backgroundColor": "#ffffff"
                }
            },
            {
                // "type": "shape",
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
                },
                "type": "shape"

            }
        ])
}


function createSnap(canvasX, canvasY, color, text) {
    return miro.board.widgets.create(
        [
            //  {
            //     "type": "frame",
            //     "x": 0,
            //     "y": 0,
            //     "width": 3100,
            //     "height": 4600,
            //     "style": {
            //         "borderWidth": 1,
            //         "backgroundColor": "#ffffff"
            //     }
            // },
            {

                "type": "frame",
                "x": 0.0 + canvasX,
                "y": 0.0 + canvasY,
                "width": 3100.0,
                "height": 4600.0,

                "style": {
                    "backgroundColor": "#ffffff",
                    "borderWidth": 1
                },

            },
            {
                // "type": "shape",
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
                },
                "type": "shape"

            },
            // {
            //     "type": "shape",
            //     "text": "",
            //     "x": -12888.9786626674,
            //     "y": 16692.1628050919,
            //     "width": 100.0,
            //     "height": 100.0,
            //     "rotation": 0.0,
            //     "style": {
            //         "backgroundOpacity": 1.0,
            //         "backgroundColor": "#ffffff",
            //         "borderColor": "#ffffffff",
            //         "borderStyle": 2,
            //         "borderOpacity": 1.0,
            //         "borderWidth": 2.0,
            //         "fontSize": 14,
            //         "fontFamily": 0,
            //         "textColor": "#ffffff",
            //         "textAlign": "c",
            //         "textAlignVertical": "m",
            //         "shapeType": 3
            //     }
            // }

            // {
            //
            //     "style": {
            //         "backgroundOpacity": 1,
            //         "backgroundColor": "#ffffff",
            //         "borderColor": "#1a1a1a",
            //         "borderStyle": 2,
            //         "borderOpacity": 1,
            //         "borderWidth": 1,
            //         "fontSize": 144,
            //         "fontFamily": 0,
            //         "textColor": "#1a1a1a",
            //         "textAlign": "c",
            //         "textAlignVertical": "t",
            //         "shapeType": 3
            //     },
            //     "text": "<p><strong><u>Llama</u></strong></p>",
            //     "x": canvasX +  0.0,
            //     "y": -50.0,
            //     "width": 3000.0,
            //     "height": 4500.0,
            //     // "rotation": 0.0,
            //     "type": "shape",
            //
            // },

            // Title Bar
            {

                "style": {
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#94bfea",
                    "borderColor": "#1a1a1a",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 1.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#ffffff",
                    "textAlign": "c",
                    "textAlignVertical": "m",
                    "shapeType": 3
                },
                "text": "<p><strong style=\"color:rgb(255,255,255)\">Service Name</strong></p>",
                "x": canvasX +  0.0,
                "y": canvasY + -2050,
                "width": 3000.0,
                "height": 407.937138671738,
                "rotation": 0.0,
                "type": "shape",

            },
            // APIs
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>APIs</p>",
                "x": canvasX +  -1000,
                "y": canvasY +  -1500,
                "width": 30,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            // Data
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>Data</p>",
                "x": canvasX +  800,
                "y": canvasY +  -1500,
                "width": 35,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            // Pub
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>Pub</p>",
                "x": canvasX +  -1206.74081978741,
                "y": canvasY +  -215,
                "width": 30,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            // Sub
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>Sub</p>",
                "x": canvasX +  -526.440096948559,
                "y": canvasY +  -215,
                "width": 30,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            // External
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>External</p>",
                "x": canvasX +  800,
                "y": canvasY +  -215,
                "width": 55,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            // Stories
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>Stories / Logic</p>",
                "x": canvasX +  -940,
                "y": canvasY +  1330,
                "width": 100,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            {

                "style": {
                    "padding": 0,
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#ffffffff",
                    "borderColor": "#ffffffff",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 0.0,
                    "fontSize": 144,
                    "fontFamily": 0,
                    "textColor": "#1a1a1a",
                    "textAlign": "c",
                    "shapeType": "text_rect"
                },
                "text": "<p>UI</p>",
                "x": canvasX +  800,
                "y": canvasY +  1330,
                "width": 7.52,
                "scale": 10.2857142857143,
                "rotation": 0.0,
                "type": "text",

            },
            // API sticker
            {

                "style": {
                    "backgroundColor": "#f5d128",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "<p><br /></p>",
                "x": canvasX +  -1233,
                "y": canvasY +  -1200,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            },
            // Data Sticker
            {

                "style": {
                    "stickerBackgroundColor": "#a6ccf5",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "",
                "x": canvasX +  1053,
                "y": canvasY +  -1200,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            },
            {

                "style": {
                    "stickerBackgroundColor": "#f16c7f",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "",
                "x": canvasX +  -1206,
                "y": canvasY +  99,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            },
            {

                "style": {
                    "stickerBackgroundColor": "#f16c7f",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "",
                "x": canvasX +  -526,
                "y": canvasY +  99,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            },
            {

                "style": {
                    "stickerBackgroundColor": "#c9df56",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "",
                "x": canvasX +  1005,
                "y": canvasY +  99,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            },
            {

                "style": {
                    "stickerBackgroundColor": "#be88c7",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "",
                "x": canvasX +  -1192,
                "y": canvasY +  1608,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            },
            {

                "style": {
                    "stickerBackgroundColor": "#6cd8fa",
                    "fontSize": 0,
                    "fontFamily": 0,
                    "textAlign": "c",
                    "textAlignVertical": "m"
                },
                "text": "",
                "x": canvasX +  1022,
                "y": canvasY +  1608,
                "width": 199.0,
                "height": 228.0,
                "scale": 1.07,
                "type": "sticker",

            }

        ]
    )
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
            // createShape(canvasX, canvasY, currentShapeColor, currentShapeText)
            createSnap(canvasX, canvasY, currentShapeColor, currentShapeText)

        },
    }
    miro.board.ui.initDraggableItemsContainer(container, shapeOptions)
}

miro.onReady(bootstrap)