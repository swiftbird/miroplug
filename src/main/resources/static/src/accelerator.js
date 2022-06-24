// widgets.Filter(widget => widget.metadata.type == "SnapE").map(widget => widget.metadata.children)


async function dumpit(json) {
    console.log("Gonna dump it")
    console.log(json)
    // let response = await fetch('snapwidgets/dump/');
    // let json = await response.json();

    const rawResponse = await fetch('snapwidgets/dump/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: json
    });
    const content = await rawResponse.json();

    console.log(content);
}

function showStatistics(selection) {
    clear()
    console.log(selection);
    const types = selection.map(widget => {

        return widget["type"];
    });

    const typesTest = selection.map(widget => widget["type"])

    const typesAgain = selection.map(function (widget) {
        return widget["types"];
    })

    selection.forEach((widget) => {
        let json = JSON.stringify(widget)
        console.log(json)
        dumpit(json)
    })

    // const bounds = selection[<your widget index>]["bounds"];
    //
    // const widgetsInBounds = selection.filter(widget => {
    //   return widget.bounds.x > 100 && widget.type == "your type";
    // })


    const statByType = calcByType(selection)
    getContainer().appendChild(createStatTable('by Type', 'Looks like the selection is empty.', statByType))
}

function clear() {
    const elements = getContainer().getElementsByClassName('stat-list__table')
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).remove()
    }
}

function getContainer() {
    return document.getElementById('stat-container')
}

function createStatTable(title, emptyText, data) {
    const statView = document.createElement('div')
    statView.className = 'stat-list__table'

    const titleView = document.createElement('div')
    titleView.className = 'stat-list__title'
    titleView.innerHTML = `<span>${title}</span>`
    statView.appendChild(titleView)

    //Added here
    // const jsonView = document.createElement('div')
    // titleView.className = 'stat-list__title'
    // titleView.innerHTML = `<span>${data}</span>`
    // statView.appendChild(titleView)

    if (data.size === 0) {
        const emptyView = document.createElement('div')
        emptyView.className = 'stat-list__empty'
        emptyView.innerText = emptyText
        statView.appendChild(emptyView)
    } else {
        data.forEach((value, key) => {


            let itemView = document.createElement('div')
            itemView.className = 'stat-list__item'
            itemView.innerHTML =
                `<span class="stat-list__item-name">${key.toLowerCase()}</span>` +
                `<span class="stat-list__item-value">${value}</span>`
            statView.appendChild(itemView)
            // Add the buttons here

        })
    }
    return statView
}

function calcByType(widgets) {
    return countBy(widgets, (a) => a.type)
}

function countBy(list, keyGetter) {
    const map = new Map()
    list.forEach((item) => {
        console.log(item.id)
        const key = keyGetter(item)
        const count = map.get(key)
        map.set(key, !count ? 1 : count + 1)
    })
    return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
}

miro.onReady(() => {
    miro.addListener('SELECTION_UPDATED', (e) => {

        showStatistics(e.data)
    })

    miro.board.selection.get().then(showStatistics)
})
