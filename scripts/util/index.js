
export let sel = (selector, all = false, root = document) => {
  return all == true
    ? root.querySelectorAll(selector)
  : root.querySelector(selector);
}