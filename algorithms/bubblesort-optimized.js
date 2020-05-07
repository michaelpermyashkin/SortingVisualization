/************* BubbleSort ****************/
async function bubbleSortOptimized(array, sleepTimeMS) {
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
        }
        if (!swapped)
            break;
    }
    // once complete we iterate through and set all bars to green
    for (let i = 0; i < array.length; i++) {
        await colorOneElement(array, i, 2);
    }
};

// var array_mergesort = [3, 5, 7, 4, 3, 6, 8, 6, 7, 4, 3];
 
// array_mergesort = bubbleSort(array_mergesort);
 
// console.log('BUBBLESORT: ', ...array_mergesort);