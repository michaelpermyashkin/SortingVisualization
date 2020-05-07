const arr = []
for (var i = 0, t = 40; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function heapify(array, length, root) {
    var max = root;
    var left = 2 * root + 1;
    var right = 2 * root + 2;
    if (left < length && array[left] > array[max]) {
        max = left;
    }
    if (right < length && array[right] > array[max]) {
        max = right;
    }
    if (max != root) {
        swap(array, root, max);
        heapify(array, length, max);
    }
}

function heapSort(array) {
    var length = array.length;

    for (var i = Math.floor(length / 2 - 1); i >= 0; i--) {
        heapify(array, length, i);
    }

    for (var i = length - 1; i >= 0; i--) {
        swap(array, 0, i);
        heapify(array, i, 0);
    }
    return array
}

var array_heapsort = arr.slice()
array_heapsort = heapSort(array_heapsort)
console.log('HEAPSORT:  ', ...array_heapsort)