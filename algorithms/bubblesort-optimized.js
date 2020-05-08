/************* BubbleSort ****************/
async function bubbleSortOptimized(array, sleepTimeMS, totalComparisons) {
    var length = array.length;
    var swapped = false;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j].val > array[j + 1].val) {
                swapped = true;
                await colorTwoElements(array, j, j + 1, 1);
                swap(array, j, j + 1);
                await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
                await colorTwoElements(array, j, j + 1, 0);
            }
            totalComparisons++;
            displayComparisonCount(totalComparisons);
        }
        if (!swapped)
            break;
        await colorOneElement(array, length - i - 1, 2);

    }
    // once complete we iterate through and set all bars to green
    for (let i = 0; i < array.length; i++) {
        await colorOneElement(array, i, 3);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
    }
}