const arr = []
for (var i = 0, t = 40; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/************* BubbleSort ****************/
function bubbleSort(array) {
    var length = array.length;
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < length; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    }
    return array;
};

var array_bubblesort = arr.slice()
array_bubblesort = bubbleSort(array_bubblesort)
console.log('BUBBLESORT:', ...array_bubblesort)