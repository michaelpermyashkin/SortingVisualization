async function bubbleSortOptimized(array, sleepTimeMS) {
    totalComparisons = 0;
    var length = array.length;
    var swapped = false;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            await colorTwoElements(array, j, j + 1, 1);
            totalComparisons++;
            displayComparisonCount(totalComparisons);
            if (array[j].val > array[j + 1].val) {
                swapped = true;
                swap(array, j, j + 1);
            }
            await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
            await colorTwoElements(array, j, j + 1, 0);
        }
        totalComparisons++;
        displayComparisonCount(totalComparisons);
        if (!swapped)
            break;
        await colorOneElement(array, length - i - 1, 2); // colored green, now in place
    }
    // once complete we iterate through and set all bars to green
    for (let i = 0; i < array.length; i++) {
        await colorOneElement(array, i, 3);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS / 2));
    }
}