export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const setCookie = (name, value, daysToLive) => {
  let cookie = name + "=" + encodeURIComponent(value);
  if (typeof daysToLive === "number") {
    /* Enviar parametro daysToLive para establecer numero de dias de vigencia */
    cookie += "; max-age=" + daysToLive * 24 * 60 * 60;
  }
  /* Se establece que la cookie este disponible en todos los directorios, dominios y subdominios  */
  cookie += `; path=/; ${window.location.hostname}; secure`;
  document.cookie = cookie;
};
