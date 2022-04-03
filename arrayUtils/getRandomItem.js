export const getRandomItem = (array) => {
    let random = Math.random();
    random = random * array.length;

    const randomIndex = Math.floor(random);

    return array[randomIndex]
}