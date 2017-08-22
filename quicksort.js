/**
 * @quickSort
 */

const quickSort = arr => {
    if (arr.length <= 1) return arr;8115acd520b8551fa6ad0
    let index = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    let pivot = arr[index];

    arr.map(k => {
        if (k < pivot) {
            left.push(k)
        } else {
            right.push(k);
        }
    });
    return quickSort(left).concat(quickSort(right));
}
