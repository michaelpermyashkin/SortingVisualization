function createBarElement(parent, height, colors) {
    let bar = document.createElement("div");
    bar.style.height = height + "px";
    bar.style.width = 10 + "px";
    bar.style.backgroundColor = colors[0];
    bar.classList.add('bar')

    parent.appendChild(bar);
    return {
        div: bar,
        val: height
    }
}

function createUnsortedArray(parent, size, colors) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        let value = Math.floor(Math.random() * 600 + 30);
        arr.push(createBarElement(parent, value, colors));
    }
    return arr;
}

function createReverseArray(parent, size, colors) {
    let arr = [];
    for (let i = size; i > 0; i--) {
        let value = Math.floor(i * 3 + 40);
        console.log(value);
        addEventListener
        arr.push(createBarElement(parent, value, colors));
    }
    return arr;
}

function createSortedArray(parent, size, colors) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        let value = Math.floor(i * 3 + 40);
        arr.push(createBarElement(parent, value, colors));
    }
    return arr;
}