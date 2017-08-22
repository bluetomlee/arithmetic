/**
 * @冒泡排序
 */

const bableSort = arr => {
    let len = arr.length;
    arr.map((k, index) => {
        for (var i = 0; i < len - 1 - index; i++) {
            if (arr[i] > arr[i + 1]) {
                let swap = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = swap;
            }
        }
    });
    return arr;
}
