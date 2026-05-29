
import { sel, addClass, removeClass } from "./util/index.js";

export default function listenForThemeChange() {
  let themeBtn = sel('.theme-btn');
  let current = localStorage.getItem('EhiEjakhian-theme') || 'light';
  setLocalStorageTheme(current);

  themeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(themeBtn.classList)
    changeTheme();
  })

  function setLocalStorageTheme(theme) {
    sel(':root').setAttribute('data-theme', theme);
    current = theme;
    if (theme == 'light') {
      themeBtn.classList.add('light');
      themeBtn.classList.remove('dark');

      removeClass('main *', 'dark-mode')
      addClass('main *', 'light-mode')

    } else if (theme == 'dark') {
      themeBtn.classList.add('dark')
      themeBtn.classList.remove('light');

      addClass('main *', 'dark-mode')
      removeClass('main *', 'light-mode')
    }
      
    saveTheme(current);
  }
  
  function changeTheme() {
    if (current == 'light') {
      sel(':root').setAttribute('data-theme', 'dark');
      current = 'dark'
      themeBtn.classList.remove('light');
      themeBtn.classList.add('dark');

      sel('main *', true).classList.add('dark-mode')
      sel('main *', true).classList.remove('light-mode')

    } else if (current = 'dark') {
      sel(':root').setAttribute('data-theme', 'light');
      current = 'light'
      themeBtn.classList.remove('dark');
      themeBtn.classList.add('light');
  
      sel('main *', true).classList.add('light-mode')
      sel('main *', true).classList.remove('dark-mode')
    }
    saveTheme(current);
  }

  function saveTheme(theme) {
    localStorage.setItem('EhiEjakhian-theme',theme);
  }
}