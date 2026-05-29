
import { sel } from "./util/index.js";

export default function listenForThemeChange() {
  let themeBtn = sel('.theme-btn');
  let current = localStorage.getItem('EhiEjakhian-theme') || 'light';
  console.log(localStorage.getItem('EhiEjakhian-theme'));
  setLocalStorageTheme(current);

  themeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(themeBtn.classList)
    changeTheme();
  })

  function setLocalStorageTheme(theme) {
    sel(':root').setAttribute('data-theme', theme);
    current = theme;
    theme == 'light'
      ? themeBtn.classList.add('light')
      : themeBtn.classList.remove('dark');
      theme == 'dark'
      ? themeBtn.classList.add('dark')
      : themeBtn.classList.remove('light');
    saveTheme(current);
  }
  
  function changeTheme() {
    if (current == 'light') {
      sel(':root').setAttribute('data-theme', 'dark');
      current = 'dark'
      themeBtn.classList.remove('light');
      themeBtn.classList.add('dark');
  
      saveTheme(current);
    } else if (current = 'dark') {
      sel(':root').setAttribute('data-theme', 'light');
      current = 'light'
      themeBtn.classList.remove('dark');
      themeBtn.classList.add('light');
  
      saveTheme(current);
    }
  }

  function saveTheme(theme) {
    console.log(theme);
    localStorage.setItem('EhiEjakhian-theme',theme);
  }
}