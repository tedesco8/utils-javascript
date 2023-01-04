export const isEmpty = (value) => {
  if (value !== undefined && value !== null) {
    let valueStr = value.toString().trim();
    if (valueStr.length === 0) {
      return true;
    }
    return false;
  } else {
    return true;
  }
};

export const getParameterByName = (name) => {
  // eslint-disable-next-line
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(window.location.hash);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}