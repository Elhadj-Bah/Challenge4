// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

function toggleMode() {
  ? '🌙' : '🌞';

  const themeSwitcher = document.querySelector('#back');
  const container = document.querySelector('#toggle');
  
  // Set default mode to dark
  let mode = 'dark_light';

  // Listen for a click event on toggle switch
  themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
      container.setAttribute('class','--circle-color');
    }
    
    else {
      mode = 'light';
      container.setAttribute('class', 'dark');
      container.setAttribute('--circle-color');
    }
  });
  

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

