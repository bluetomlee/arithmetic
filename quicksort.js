/**
 * @quicksort
 */

const quicksort = arr => {
    if (arr.length < 1) return;
    let index = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    let privot = arr[index];

    arr.map(k => {
        if (k < privot) {
            left.push(k)
        } else {
            right.push(k);
        }
    });
    return quicksort(left).concat(quicksort(right));
}