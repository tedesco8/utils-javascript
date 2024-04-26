export const getRandomItem = (array) => {
    let random = Math.random();
    random = random * array.length;

    const randomIndex = Math.floor(random);

    return array[randomIndex]
}

export const removeDuplicateItem = (array) => [...new Set(array)];

export const binarySearch = (arr, l, r, x) => {
    if(l > r) return -1;

    const m = Math.floor((l + r) / 2);

    if(arr[m] == x) return m;

    if(arr[m] < x) {
        return binarySearch(arr, m + 1, r, x);
    } else {
        return binarySearch(arr, l, m - 1, x);
    }
}