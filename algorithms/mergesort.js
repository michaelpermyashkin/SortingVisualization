async function merge(arr, left, mid, right, sleepTimeMS) {
    let n1 = mid - left + 1;
    let n2 = right - mid;
    let leftArr = [];
    let rightArr = [];
    let k = left;
    for (let i = 0; i < n1; i++) {
        leftArr[i] = { val: arr[k].val };;
        k++;
    }
    for (let i = 0; i < n2; i++) {
        rightArr[i] = { val: arr[k].val };
        k++;
    }

    for (let i = left; i < right; i++) {
        await colorOneElement(arr, i, 4);
    }

    let i = 0;
    let j = 0;
    for (let v = left; v <= right; v++) {
        if (i < n1 && j < n2) {
            totalComparisons++;
            displayComparisonCount(totalComparisons);
            if (leftArr[i].val <= rightArr[j].val) {
                totalComparisons++;
                displayComparisonCount(totalComparisons);
                copyAllProperties(arr[v], leftArr[i]);
                i++;
            } else {
                totalComparisons++;
                displayComparisonCount(totalComparisons);
                copyAllProperties(arr[v], rightArr[j]);
                j++;
            }
        } else if (i == n1) {
            totalComparisons++;
            displayComparisonCount(totalComparisons);
            copyAllProperties(arr[v], rightArr[j])
            j++;
        } else {
            totalComparisons++;
            displayComparisonCount(totalComparisons);
            copyAllProperties(arr[v], leftArr[i])
            i++;
        }
        await colorOneElement(arr, v, 2);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS / 2));
    }
}

async function mergeSort(arr, l, r, sleepTimeMS) {
    for (let i = l; i <= r; i++) {
        await colorOneElement(arr, i, 0);
    }
    if (l < r) {
        totalComparisons++;
        displayComparisonCount(totalComparisons);
        let m = Math.floor((l + r) / 2);
        await mergeSort(arr, l, m, sleepTimeMS);
        await mergeSort(arr, m + 1, r, sleepTimeMS);
        await merge(arr, l, m, r, sleepTimeMS);
    }
}

async function mergeSortRunner(arr, sleepTimeMS) {
    totalComparisons = 0;
    await mergeSort(arr, 0, arr.length - 1, sleepTimeMS);
    for (let i = 0; i < arr.length; i++) {
        colorOneElement(arr, i, 3);
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS / 2));
    }
}