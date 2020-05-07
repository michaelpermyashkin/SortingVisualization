const visualizerArea = document.getElementById("visualizer");
let colors = ['rgb(116, 142, 171)'];
let a = createUnsortedArray(visualizerArea, 100, colors); // generate unsorted by default
let time = .5;

function generateUnsortedArray() {
    let val = Number(document.querySelector('#setArraySize input').value);
    if (val < 1) {
        val = 5;
        document.querySelector('#setArraySize input').value = "5"
    }
    if (val > 300) {
        val = 300;
        document.querySelector('#setArraySize input').value = val;
    }
    a.forEach(elem => elem.div.parentNode.removeChild(elem.div)) // clears bars that are already in place before new array is generated
    a = [];
    a = createUnsortedArray(visualizerArea, val, colors);
}

function generateReverseArray() {
    let val = Number(document.querySelector('#setArraySize input').value);
    a.forEach(elem => elem.div.parentNode.removeChild(elem.div)) // clears bars that are already in place before new array is generated
    a = [];
    a = createReverseArray(visualizerArea, val, colors);
}

function generateSortedArray() {
    let val = Number(document.querySelector('#setArraySize input').value);
    a.forEach(elem => elem.div.parentNode.removeChild(elem.div)) // clears bars that are already in place before new array is generated
    a = [];
    a = createSortedArray(visualizerArea, val, colors);
}

async function runSort() {
    await bubbleSort(a);
}

function swap(arr, a, b) {
    let temp = {...arr[a] };
    arr[a].div.style.height = arr[b].val + "px";
    arr[a].val = arr[b].val;

    arr[b].div.style.height = temp.val + "px";
    arr[b].val = temp.val;
}