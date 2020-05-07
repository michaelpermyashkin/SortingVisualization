function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/************* BubbleSort ****************/
async function bubbleSort(array) {
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
};