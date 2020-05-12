async function partition(arr, left, right, sleepTimeMS) {
    let p = arr[right];
    colorOneElement(arr, right, 1); // color pivot red
    let pivot = left - 1; // keeps track of where pivots final position will be
    for (let j = left; j < right; j++) {
        colorOneElement(arr, j, 4);
        // partition about pivot
        if (arr[j].val < p.val) {
            pivot++;
            swap(arr, j, pivot);
        }
        totalComparisons++;
        displayComparisonCount(totalComparisons);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
    }
    for (let i = left; i < right; i++)
        colorOneElement(arr, i, 0);
    swap(arr, right, pivot + 1); // pivot in final position
    colorOneElement(arr, right, 2); // color pivot green
    return pivot + 1;
}

async function quickSort(arr, l, r, sleepTimeMS) {
    if (l < r) {
        totalComparisons++;
        displayComparisonCount(totalComparisons);
        let pivot = await partition(arr, l, r, sleepTimeMS);
        await quickSort(arr, l, pivot - 1, sleepTimeMS); // recurse on left subarray
        await quickSort(arr, pivot + 1, r, sleepTimeMS); // recurse in right subarray
    }
}

async function quickSortRunner(arr, sleepTimeMS) {
    totalComparisons = 0;
    await quickSort(arr, 0, arr.length - 1, sleepTimeMS);
    for (let i = 0; i < arr.length; i++) {
        colorOneElement(arr, i, 3);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS / 2));
    }
}