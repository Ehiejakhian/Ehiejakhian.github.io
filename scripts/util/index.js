
export function sel(selector, all = false, root = document) {
  return all == true
    ? root.querySelectorAll(selector)
  : root.querySelector(selector);
}

export function addClass(selector = root, data) {
  sel(selector, true).forEach(el => {
    el.classList.add(data);
  });
}

export function removeClass(selector = root, data) {
  sel(selector, true).forEach(el => {
    el.classList.remove(data);
  });
}