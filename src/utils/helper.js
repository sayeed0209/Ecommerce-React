export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};
export function createCookie(name, value, minutes) {
  let expires;
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }

  document.cookie = name + "=" + value + expires;
}
export const getCartItems = () => {
  let cart = document.cookie.split("=");
  if (cart[0].length === 0) {
    return [];
  } else {
    return JSON.parse(cart[1]);
  }
};
