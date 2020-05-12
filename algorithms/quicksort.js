async function partition(arr, left, right, time, tempCounter) {
    let p = arr[right];
    colorOneElement(arr, right, 1);
    let pivot = left - 1;
    for (let i = left; i < right; i++)
        colorOneElement(arr, i, 4);
    for (let j = left; j < right; j++) {
        if (arr[j].val < p.val) {
            pivot++;
            swap(arr, j, pivot);
            await new Promise(resolve => setTimeout(resolve, time));
        }
    }
    for (let i = left; i < right; i++)
        colorOneElement(arr, i, 0);
    swap(arr, right, pivot + 1);
    colorOneElement(arr, right, 2);
    return pivot + 1;
}

async function quickSort(arr, l, h, time, tempCounter) {
    if (l < h) {
        let pivot = await partition(arr, l, h, time);
        await quickSort(arr, l, pivot - 1, time);
        await quickSort(arr, pivot + 1, h, time);
    }
}

async function quickSortRunner(arr, time, totalComparisons) {
    let tempCounter = 0;
    await quickSort(arr, 0, arr.length - 1, time, tempCounter);
    for (let i = 0; i < arr.length; i++) {
        colorOneElement(arr, i, 3);
        await new Promise(resolve => setTimeout(resolve, time / 2));
    }
}