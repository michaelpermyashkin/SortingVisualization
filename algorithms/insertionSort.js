async function insertionSort(arr, position, sleepTimeMS) {
    let i = position - 1;
    if (position == arr.length) {
        return;
    }
    for (let i = 0; i < position - 1; i++)
        colorOneElement(arr, position, 2); // everything behind red marker is already sorted -> color green
    colorOneElement(arr, position, 1); // red marks where in array we currently are

    while (i >= 0 && arr[i].val > arr[i + 1].val) {
        colorOneElement(arr, i, 4);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
        swap(arr, i, i + 1);
        colorOneElement(arr, i, 2);
        i--;
    }
    await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
    colorOneElement(arr, position, 2);
    await insertionSort(arr, position + 1, sleepTimeMS);
}

async function insertionSortRunner(arr, sleepTimeMS) {
    totalComparisons = 0;
    await insertionSort(arr, 0, sleepTimeMS);
    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS / 2));
        colorOneElement(arr, i, 3);
    }
}