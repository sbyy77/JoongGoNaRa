const header = document.getElementById("categoryMenu");
const hideMenu = document.querySelector(".hideMenu");

header.addEventListener("click", () => {
  console.log("test");
  for(let i = 0; i < hica.length; i++){
    hica[i].classList.remove("on2");
  }
  if (hideMenu.classList.contains("on")) {
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});

// 메뉴의 소메뉴
const hica = document.querySelectorAll(".hica");
const hidehideAll = document.querySelectorAll(".hidehide");

for (let i = 0; i < hica.length; i++) {
  hidehideAll[i].addEventListener("mouseover", () => {
    for (let i = 0; i < hica.length; i++) {
      hica[i].classList.remove("on2");
    }
    hica[i].classList.add("on2");
  });
}


// for (let i = 0; i < hica.length; i++) {
//   hideMenuAll[i].addEventListener("click", () => {
//     if (hica[i].classList.contains("on2")) {
//       hica[i].classList.remove("on2");
//     } else {
//       hica[i].classList.add("on2");
//     }
//   });
// }

// for (let i = 0; i < hica.length; i++) {
//   hideMenuAll[i].addEventListener("mouseleave", () => {
//     if (hica[i].classList.contains("on2")) {
//       hica[i].classList.remove("on2");
//     } else {
//       hica[i].classList.add("on2");
//     }
//   });
// }


"use strict";

const bannerBox = document.querySelector("#recentItemBox > ul");
const bannerItem = document.querySelectorAll(".recentItems");

const prevBtn = document.getElementById("recentItemPrevBtn");
const nextBtn = document.getElementById("recentItemNextBtn");

const size = bannerItem[0].clientWidth;

let counter = 0;

let banner = setInterval(() => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);
//1000ms = 1초

nextBtn.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (counter < bannerItem.length - 1) {
      counter++;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter === bannerItem.length - 1) {
      counter = 0;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
  }, 5000);
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (counter < bannerItem.length - 1) {
      counter++;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter === bannerItem.length - 1) {
      counter = 0;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
  }, 5000);
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    counter = bannerItem.length - 1;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});



const hotItem_rightBox = document.querySelectorAll(".hotItem_rightBox");
const hotItem_hide = document.querySelectorAll(".hotItem_hide");

for (let i = 0; i < hotItem_rightBox.length; i++) {
  hotItem_hide[i].addEventListener("mouseover", () => {
    for (let i = 0; i < hotItem_rightBox.length; i++) {
      hotItem_rightBox[i].classList.remove("on3");
    }
    hotItem_rightBox[i].classList.add("on3");
  });
}

window.onload = () => {
  hotItem_rightBox[0].classList.add("on3");
};
