import { sel } from './util/index.js';

export default function closeDesktopNav() {
  let detailElem = sel('.header__content__nav__content details:first-of-type');
  sel('body').offsetWidth > 500
    ? detailElem.open = false
    : null;
}