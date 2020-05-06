const arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]

function swap(array, leftIndex, rightIndex) {
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

/************* QuickSort ****************/
function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
        i = left,
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



/************* MergeSort ****************/
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
var array_mergesort = arr.slice();
array_mergesort = mergeSort(array_mergesort);
console.log('MERGESORT: ', ...array_mergesort);



/************* HeapSort ****************/
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


/************* BubbleSort ****************/
function bubbleSort(array) {
    var length = array.length;
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < len; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    }
    return array;
};

var array_bubblesort = arr.slice()
array_bubblesort = heapSort(array_bubblesort)
console.log('BUBBLESORT:', ...array_bubblesort)