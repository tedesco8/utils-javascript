export const getLocalDate = (date) => {
    let parse = new Date(date);
    return parse.toLocaleDateString();
}