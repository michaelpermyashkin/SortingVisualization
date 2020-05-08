async function partition(arr, left, right, time, tempCounter) {
    let p = arr[right];
    let pivot = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j].val < p.val) {
            pivot++;
            await colorTwoElements(arr, j, pivot, 1)
            swap(arr, j, pivot);
            await new Promise(resolve => setTimeout(resolve, time));
            await colorTwoElements(arr, j, pivot, 1);
        }
        tempCounter++;
        // await displayComparisonCount(tempCounter);
    }
    swap(arr, right, pivot + 1);
    await colorOneElement(arr, pivot + 1, 2)
    await new Promise(resolve => setTimeout(resolve, time));
    return pivot + 1;
}

async function quickSort(arr, l, h, time, tempCounter) {
    if (l < h) {
        let pivot = await partition(arr, l, h, time);
        await colorOneElement(arr, pivot, 4);
        await quickSort(arr, l, pivot - 1, time);
        await quickSort(arr, pivot + 1, h, time);
        await colorOneElement(arr, pivot, 2);
    }
    tempCounter++;
    // await displayComparisonCount(tempCounter);
}

async function quickSortRunner(arr, time, totalComparisons) {
    let tempCounter = 0;
    await quickSort(arr, 0, arr.length - 1, time, tempCounter);
    for (let i = 0; i < arr.length; i++) {
        colorOneElement(arr, i, 3);
        await new Promise(resolve => setTimeout(resolve, time));
    }
}