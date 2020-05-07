const visualizerArea = document.getElementById("visualizer");
let blue = 'rgb(204, 209, 209)';
let red = 'rgb(231, 76, 60)';
let green = 'rgb(88, 214, 141)';
let colors = [blue, red, green];
let a = createUnsortedArray(visualizerArea, 100, colors); // generate unsorted by default
let sleepTimeMS = 25; // speed set to medium by default
let algorithmSelection = "bubblesort"; // bubblesort set by default


function init() {
    // initialize display with default selections
    document.getElementById('bubblesort').style.backgroundColor = 'rgb(142, 211, 158)';
    document.getElementById('bubblesort').style.color = '#FFF';
    document.getElementById('unsorted').style.backgroundColor = 'rgb(142, 211, 158)';
    document.getElementById('unsorted').style.color = '#FFF';
}

function setAlgorithmSelection(selection) {
    algorithmSelection = selection;
    // clear highlighted selection 
    var x = document.getElementById("algorithmSelection").querySelectorAll(".nav-link");
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = 'rgb(247, 247, 247)';
        x[i].style.color = 'rgb(30, 30, 30)';
    }
    // set new highlighted selection
    document.getElementById(selection).style.backgroundColor = 'rgb(142, 211, 158)';
    document.getElementById(selection).style.color = '#FFF';
}


function setSpeedSetting() {
    let setting;
    var radioButtons = document.getElementsByName('speedSetting');
    for (i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked)
            setting = radioButtons[i].value;
    }
    switch (setting) {
        case "slow":
            sleepTimeMS = 500;
            break;
        case "medium":
            sleepTimeMS = 100;
            break;
        case "fast":
            sleepTimeMS = 1;
            break;
    }
}

function setArrayCondition(condition) {
    // clear highlighted selection 
    var x = document.getElementById("generateArray").querySelectorAll(".btn");
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = 'rgb(247, 247, 247)';
        x[i].style.color = 'rgb(30, 30, 30)';
    }
    // set new highlighted selection
    document.getElementById(condition).style.backgroundColor = 'rgb(142, 211, 158)';
    document.getElementById(condition).style.color = '#FFF';
    switch (condition) {
        case 'unsorted':
            generateUnsortedArray();
            break;
        case 'sorted':
            generateSortedArray();
            break;
        case 'reverse':
            generateReverseArray();
            break;
    }
}

async function runSort() {
    switch (algorithmSelection) {
        case 'bubblesort':
            console.log('running bubble sort');
            await bubbleSort(a, sleepTimeMS);
            break;
        case 'bubblesort-optimized':
            await bubbleSortOptimized(a, sleepTimeMS);
            break;
        case 'quicksort':
            await bubbleSort(a, sleepTimeMS);
            break;
        case 'heapsort':
            await bubbleSort(a, sleepTimeMS);
            break;
        case 'mergesort':
            await bubbleSort(a, sleepTimeMS);
            break;
    }
}

function generateUnsortedArray() {
    let val = Number(document.querySelector('#setArraySize input').value);
    if (val < 1) {
        val = 5;
        document.querySelector('#setArraySize input').value = "5"
    }
    if (val > 1000) {
        val = 1000;
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



function swap(arr, a, b) {
    let temp = {...arr[a] };
    arr[a].div.style.height = arr[b].val + "px";
    arr[a].val = arr[b].val;

    arr[b].div.style.height = temp.val + "px";
    arr[b].val = temp.val;
}

// colors elements that are being swapped
async function colorTwoElements(arr, a, b, colorIndex) {
    arr[a].div.style.backgroundColor = colors[colorIndex];
    arr[b].div.style.backgroundColor = colors[colorIndex];
}

// colors a single element
async function colorOneElement(arr, a, colorIndex) {
    arr[a].div.style.backgroundColor = colors[colorIndex];
}