/************* BubbleSort ****************/
async function bubbleSort(array) {
    var length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j].val > array[j + 1].val) {
                swap(array, j, j + 1);
                await new Promise(resolve => setTimeout(resolve, 1));
            }
        }
    }
};

// var array_mergesort = [3, 5, 7, 4, 3, 6, 8, 6, 7, 4, 3];
 
// array_mergesort = bubbleSort(array_mergesort);
 
// console.log('BUBBLESORT: ', ...array_mergesort);