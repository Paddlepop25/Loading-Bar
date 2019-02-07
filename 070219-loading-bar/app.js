const loadingBarItemEl = document.querySelector(".loading-bar__item");
const button1 = document.querySelector(".but1");
const button2 = document.querySelector(".but2");
const button3 = document.querySelector(".but3");

let width = 1;

button1.addEventListener("click", function() {
    let firstButton = setInterval(function() {
        if (width === 30) {
          clearInterval(firstButton);
        } else if (width > 30) {
            width--;
          loadingBarItemEl.style.width = width + "%";
        } else {
          width++;
          loadingBarItemEl.style.width = width + "%";
        }
      }, 10);
})

button2.addEventListener("click", function() {
    let secondButton = setInterval(function() {
        if (width === 60) {
          clearInterval(secondButton);
        } else if (width > 60) {
            width--;
          loadingBarItemEl.style.width = width + "%";
        } else {
          width++;
          loadingBarItemEl.style.width = width + "%";
        }
      }, 10);    
})

button3.addEventListener("click", function() {
    let thirdButton = setInterval(function() {
        if (width === 100) {
          clearInterval(thirdButton);
        } else if (width > 100) {
            width--;
          loadingBarItemEl.style.width = width + "%";
        } else {
          width++;
          loadingBarItemEl.style.width = width + "%";
        }
      }, 10);   
})