const arr = []
for (var i = 0, t = 40; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;

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