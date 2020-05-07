function createBarElement(visualizerArea, height, colors) {
    let bar = document.createElement("div");
    bar.style.height = height + "px";
    bar.style.backgroundColor = colors[0];
    bar.classList.add('bar')

    visualizerArea.appendChild(bar);
    return {
        div: bar,
        val: height
    }
}

function createUnsortedArray(visualizerArea, n, colors) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let value = Math.floor(Math.random() * 600 + 30);
        arr.push(createBarElement(visualizerArea, value, colors));
    }
    return arr;
}

function createReverseArray(visualizerArea, n, colors) {
    let arr = [];
    for (let i = n; i > 0; i--) {
        let value = Math.floor(i * 3 + 40);
        arr.push(createBarElement(visualizerArea, value, colors));
    }
    return arr;
}

function createSortedArray(visualizerArea, n, colors) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let value = Math.floor(i * 3 + 40);
        arr.push(createBarElement(visualizerArea, value, colors));
    }
    return arr;
}