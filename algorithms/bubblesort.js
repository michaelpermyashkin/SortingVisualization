/************* BubbleSort ****************/
async function bubbleSort(array, sleepTimeMS, totalComparisons) {
    var length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j].val > array[j + 1].val) {
                await colorTwoElements(array, j, j + 1, 1); // color red before swap
                swap(array, j, j + 1);
                await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
                await colorTwoElements(array, j, j + 1, 0); // reset to blue
            }
            totalComparisons++;
            await displayComparisonCount(totalComparisons);
        }
        await colorOneElement(array, length - i - 1, 2);
    }
    // once complete we iterate through and set all bars to green
    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
        await colorOneElement(array, i, 3);
    }
};