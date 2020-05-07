const arr = []
for (var i = 0, t = 40; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    i = left;
    j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}
var array_quicksort = arr.slice();
array_quicksort = quickSort(array_quicksort, 0, array_quicksort.length - 1)
console.log('QUICKSORT: ', ...array_quicksort);