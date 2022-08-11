async function init() {
    // Enable the 'icon:click' event on the app icon
    await miro.board.ui.on("icon:click", async () => {
        // In this example: when the app icon is clicked, a method opens a panel
        await miro.board.ui.openPanel({
            // The content displayed on the panel is fetched from the specified HTML resource
            url: "NewSidebar.html"
        });
    });

}

init();
console.log("Inited");