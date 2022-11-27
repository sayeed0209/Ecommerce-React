export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};
export function createCookie(name, value, minutes) {
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();
  } else {
    var expires = '';
  }

  document.cookie = name + '=' + value + expires;
}
export const getCartItems = () => {
  let cartItems = document.cookie.split('=');
  if (cartItems[0].length === 0) {
    return [];
  } else {
    return JSON.parse(cartItems[1]);
  }
};
