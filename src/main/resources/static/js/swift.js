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


function getSnapForm(canvasX, canvasY) {
    return [

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
            "x": canvasX + 0.0,
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
            "x": canvasX + -1000,
            "y": canvasY + -1500,
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
            "x": canvasX + 800,
            "y": canvasY + -1500,
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
            "x": canvasX + -1206.74081978741,
            "y": canvasY + -215,
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
            "x": canvasX + -526.440096948559,
            "y": canvasY + -215,
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
            "x": canvasX + 800,
            "y": canvasY + -215,
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
            "x": canvasX + -940,
            "y": canvasY + 1330,
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
            "x": canvasX + 800,
            "y": canvasY + 1330,
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
            "x": canvasX + -1233,
            "y": canvasY + -1200,
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
            "x": canvasX + 1053,
            "y": canvasY + -1200,
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
            "x": canvasX + -1206,
            "y": canvasY + 99,
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
            "x": canvasX + -526,
            "y": canvasY + 99,
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
            "x": canvasX + 1005,
            "y": canvasY + 99,
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
            "x": canvasX + -1192,
            "y": canvasY + 1608,
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
            "x": canvasX + 1022,
            "y": canvasY + 1608,
            "width": 199.0,
            "height": 228.0,
            "scale": 1.07,
            "type": "sticker",

        }

    ]
}

function createSnap(canvasX, canvasY, color, text) {
    return miro.board.widgets.create(
        getSnapForm(canvasX, canvasY)
    )
}

function createFullSnap(canvasX, canvasY) {
    let containerWidth = 45000
    let containerHeight = 16000
    let barHeight = 800

    miro.board.widgets.create(
        [
            // the main frame
            {
                "type": "frame",
                "x": 0 + canvasX,
                "y": 0 + canvasY,
                "width": containerWidth,
                "height": containerHeight,
                "style": {
                    "borderWidth": 1,
                    "backgroundColor": "#ffffff"
                }
            },
            // The sidebar
            {

                "style": {
                    "backgroundOpacity": 1.0,
                    "backgroundColor": "#94bfea",
                    "borderColor": "#1a1a1a",
                    "borderStyle": 2,
                    "borderOpacity": 1.0,
                    "borderWidth": 1.0,
                    "fontSize": 288,
                    "fontFamily": 0,
                    "textColor": "#ffffff",
                    "textAlign": "c",
                    "textAlignVertical": "m",
                    "shapeType": 3
                },
                "text": "<p><strong style=\"color:rgb(255,255,255)\">Snap-E</strong></p>",
                "x": (canvasX + 0.0) - (containerWidth / 2) + (barHeight / 2),
                "y": canvasY + 0.0,
                "width": containerHeight,
                "height": barHeight,
                "rotation": 270.0,
                "type": "shape",

            },


        ]
    )
    return miro.board.widgets.create(
        getSnapForm(canvasX, canvasY)
    )
}

function bootstrap() {
    const container = document.getElementById('swiftdoc')
    // addShapes(container)
    // addImages(container)
    console.log(("I am bootstrapping: "))

    // Async stuff
    // miro.board.widgets.get({}).then((wid => console.log(wid)))

    // let currentImageUrl
    // const imageOptions = {
    //     draggableItemSelector: 'img',
    //     onClick: async (targetElement) => {
    //         const url = targetElement.getAttribute('data-image-url')
    //         const widget = (await createImage(0, 0, url))[0]
    //         miro.board.viewport.zoomToObject(widget)
    //     },
    //     getDraggableItemPreview: (targetElement) => {
    //         //drag-started
    //         // currentImageUrl = targetElement.getAttribute('data-image-url')
    //         return {
    //             width: 100,
    //             height: 100,
    //             url: `data:image/svg+xml,` + accelerate24,
    //             // url: currentImageUrl,
    //         }
    //     },
    //     onDrop: (canvasX, canvasY) => {
    //         console.log('onDrop 1')
    //         createImage(canvasX, canvasY, currentImageUrl)
    //     },
    // }
    // miro.board.ui.initDraggableItemsContainer(container, imageOptions)
    const swift24 = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 38.91 48"><path d="M38.65,6.14a.56.56,0,0,0,.36.07.77.77,0,0,0,.64-.35L41.7,2.1a.73.73,0,0,0-1.27-.71L38.37,5.15a.69.69,0,0,0,.28,1Z" transform="translate(-6.69 0.66)"/><path d="M28.09,6.5a.64.64,0,0,0,.57.28,1,1,0,0,0,.42-.14.63.63,0,0,0,.14-1L26.81,2.1a.64.64,0,0,0-1-.14.63.63,0,0,0-.14,1Z" transform="translate(-6.69 0.66)"/><path d="M33.19,5.57a.66.66,0,0,0,.71-.7V0a.66.66,0,0,0-.71-.7.67.67,0,0,0-.71.7V4.87A.67.67,0,0,0,33.19,5.57Z" transform="translate(-6.69 0.66)"/><path d="M42.2,13.73a3.31,3.31,0,0,0-2.48,1.06l-6,6a2,2,0,0,1-1.77,0L14.55,3.45a3.62,3.62,0,0,0-2.49-1.07A3.33,3.33,0,0,0,9.58,3.45a3.54,3.54,0,0,0,0,5l5.74,5.74a3.58,3.58,0,0,0-2,1A3.39,3.39,0,0,0,12.63,19,3.57,3.57,0,0,0,10.36,20,3.44,3.44,0,0,0,9.3,22.45a3.51,3.51,0,0,0,.49,1.91,4,4,0,0,0-2,1.07A3.35,3.35,0,0,0,7.45,30l9.72,9.71a7,7,0,0,0,.85.57,2.86,2.86,0,0,0,.64,1,1,1,0,0,0,.28.21l4.4,4.4A5.45,5.45,0,0,0,27,47.34a5.19,5.19,0,0,0,4-1.78l8.3-8.29a5.5,5.5,0,0,0,1.77-4c0-1.14-1.27-5.32-2.2-7.95l5.68-5.67a3.65,3.65,0,0,0,1.06-2.48,3.36,3.36,0,0,0-1.06-2.48,3.2,3.2,0,0,0-2.34-.92ZM14.33,16.07a2.19,2.19,0,0,1,3,0L28.87,27.63a2.18,2.18,0,0,1,0,3,2,2,0,0,1-2.48.29c-.15-.07-.29-.22-.43-.29L14.55,19.19a.07.07,0,0,0-.07-.07,2,2,0,0,1-.15-3.05ZM11.28,21a2.09,2.09,0,0,1,2.84-.14L25,31.67A1.59,1.59,0,0,1,25.46,33a2,2,0,0,1-.63,1.49,2.14,2.14,0,0,1-2.27.5,1.49,1.49,0,0,1-.57-.35L11.14,23.8a1.64,1.64,0,0,1-.49-1.35A2.39,2.39,0,0,1,11.28,21ZM8.59,29.11c0-.07-.07-.07-.14-.14a1.86,1.86,0,0,1,.35-2.62,2.44,2.44,0,0,1,1.63-.71A1.76,1.76,0,0,1,11.5,26a.07.07,0,0,0,.07.08l9.71,9.71a1.68,1.68,0,0,1,.43,1.2A2.28,2.28,0,0,1,21,38.4a2.36,2.36,0,0,1-1.85.71.53.53,0,0,1-.28-.07,1,1,0,0,1-.57-.35Zm35-10.35-6,6a.57.57,0,0,0-.14.71,55.8,55.8,0,0,1,2.27,7.94,4.06,4.06,0,0,1-1.35,3l-8.3,8.29a4,4,0,0,1-3,1.35,4.21,4.21,0,0,1-2.84-1.14c-.07-.07-.07-.07-.14-.07l-4-4c0-.07-.07-.07-.14-.14a4.82,4.82,0,0,0,.56-.21.24.24,0,0,0,.14-.07l.43-.22a.24.24,0,0,0,.14-.07,3.15,3.15,0,0,0,.5-.42,3.84,3.84,0,0,0,1.13-2.34V36.7h.36a1.36,1.36,0,0,0,.56-.07H24c.14-.07.35-.07.49-.14a.29.29,0,0,0,.15-.07,1.58,1.58,0,0,0,.49-.29l.07-.07c.14-.14.36-.28.5-.42a3.44,3.44,0,0,0,1.06-2.41v-.57h.5a1.62,1.62,0,0,0,.57-.07H28c.14-.07.35-.07.49-.14s.15-.07.22-.07l.42-.22c.07,0,.07-.07.14-.07s.36-.21.5-.35a3.54,3.54,0,0,0,0-5L10.58,7.63c0-.07-.07-.07-.15-.14a2.06,2.06,0,0,1,0-3,2,2,0,0,1,2.91,0c0,.07.07.07.14.14l7.66,7.66c0,.07.07.07.14.14l9.65,9.65c.07.07.14.07.14.14a3.73,3.73,0,0,0,3.26,0,.15.15,0,0,0,.14-.14l6.1-6.1a2.19,2.19,0,0,1,3,0,2.05,2.05,0,0,1,.64,1.49,1.72,1.72,0,0,1-.57,1.27Z" transform="translate(-6.69 0.66)"/></svg>'
    const accelerate24 = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 38.91 48"><path d="M23.18,9.12l-.82-4.75L20.48,5.94a7.91,7.91,0,0,0-13.12,6V12A5.27,5.27,0,0,1,15.7,7.7a5.19,5.19,0,0,1,1.22,1.21l-2,1.64,4.53,1.66L24,13.88Z" transform="translate(0 -0.22)"/><path d="M21.87,16.9l-.67-.48c-.26-.19,0-.87,0-.87h0a10.44,10.44,0,0,0,.45-1.61l-4.59-1.69A5.28,5.28,0,0,1,6.5,12h0s0,0,0-.07A8.76,8.76,0,0,1,19.57,4.25l.13-.19a.68.68,0,0,0-.16-.94L17.61,1.75a.68.68,0,0,0-.94.16l-.47.66c-.19.27-.88,0-.88,0h0A10.14,10.14,0,0,0,12.69,2h0s-.74-.06-.79-.38-.14-.8-.14-.8A.67.67,0,0,0,11,.23L8.65.63a.68.68,0,0,0-.55.77s.08.48.14.81-.62.62-.62.62h0A10.26,10.26,0,0,0,5.34,4.27h0s-.56.47-.83.28l-.66-.47a.67.67,0,0,0-.94.16L1.53,6.17a.67.67,0,0,0,.16.94l.66.47c.27.19,0,.88,0,.88h0a10.12,10.12,0,0,0-.6,2.63h0s-.06.73-.39.79L.56,12a.68.68,0,0,0-.55.78L.4,15.12a.67.67,0,0,0,.78.55l.8-.13c.33-.06.63.62.63.62h0a10.32,10.32,0,0,0,1.43,2.29H4s.48.56.29.83l-.47.66a.67.67,0,0,0,.15.94l1.93,1.37a.67.67,0,0,0,.94-.16l.47-.66c.19-.27.88,0,.88,0h0a10.39,10.39,0,0,0,2.62.61h0s.73.06.78.38.14.81.14.81a.68.68,0,0,0,.77.55l2.34-.4a.67.67,0,0,0,.55-.77s-.08-.48-.14-.8.62-.63.62-.63h0a10.26,10.26,0,0,0,2.28-1.43h0s.57-.47.83-.28l.67.47a.65.65,0,0,0,.93-.16L22,17.83a.67.67,0,0,0-.16-.93Z" transform="translate(0 -0.22)"/></svg>'
    const snapDoc = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26.98" height="40" viewBox="0 0 26.98 40"><image width="172" height="255" transform="scale(0.16)" xlink:href="data:image/png;base64,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"/></svg>'
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
                width: 40,
                height: 40,
                url: `data:image/svg+xml,` + accelerate24,
                // url: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentShapeColor}' height='100' width='100'/%3E%3C/g%3E%3C/svg%3E`,
            }
        },
        onDrop: (canvasX, canvasY) => {
            console.log('onDrop 2')
            // createShape(canvasX, canvasY, currentShapeColor, currentShapeText)
            createSnap(canvasX, canvasY, currentShapeColor, currentShapeText)

        },
    }
    miro.board.ui.initDraggableItemsContainer(container, shapeOptions)

    const fullSnapContainer = document.getElementById('fullsnap')
    const fullSnapOptions = {
        draggableItemSelector: '.snapfull',
        onClick: async (targetElement) => {
            const color = targetElement.getAttribute('data-color')
            const text = targetElement.innerText
            const widget = (await createFullSnap(0, 0, color, text))[0]
            miro.board.viewport.zoomToObject(widget)
        },
        getDraggableItemPreview: (targetElement) => {

            return {
                width: 40,
                height: 40,
                url: `data:image/svg+xml,` + accelerate24,
                // url: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentShapeColor}' height='100' width='100'/%3E%3C/g%3E%3C/svg%3E`,
            }
        },
        onDrop: (canvasX, canvasY) => {
            console.log('Dropped full snap')
            // createShape(canvasX, canvasY, currentShapeColor, currentShapeText)
            createFullSnap(canvasX, canvasY)

        },
    }
    miro.board.ui.initDraggableItemsContainer(fullSnapContainer, fullSnapOptions)
}

miro.onReady(bootstrap)