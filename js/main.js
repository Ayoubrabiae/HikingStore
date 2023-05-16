// Nav Action
let menuBtn = document.querySelector(".heading .menu");
let navBar = document.querySelector(".heading ul");
let navLink = document.querySelectorAll(".heading ul a");

const showNav = () => {
  menuBtn.classList.toggle("menu-act");
  navBar.classList.toggle("nav-act");
};

menuBtn.addEventListener("click", showNav);

navLink.forEach((e) => {
  e.addEventListener("click", showNav);
});

// Switch Bg
let preBtn = document.querySelector(".content-area .switch-bg i:first-child");
let aftBtn = document.querySelector(".content-area .switch-bg i:last-child");
let currNum = document.querySelector(".content-area .switch-bg .currNum");
let preNum = document.querySelector(".content-area .switch-bg .preNum");
let aftNum = document.querySelector(".content-area .switch-bg .aftNum");
let landing = document.querySelector(".landing");

const bgImgs = ["landing-bg.png", "landing-bg2.png", "landing-bg3.png"];

if (document.body.offsetWidth < 768) {
  for (let i = 0; i < bgImgs.length; i++) {
    bgImgs[i] = `phone${bgImgs[i]}`;
  }
}

const switchBg = (num) => {
  let currBg = bgImgs[num];
  preNum.innerText = num == 0 ? bgImgs.length : num;
  currNum.innerText = num + 1;
  aftNum.innerText = num >= bgImgs.length - 1 ? 1 : num + 2;
  landing.style.backgroundImage = `url("media/${currBg}")`;
};

let bgNum = 0;
preBtn.onclick = () => {
  bgNum--;
  if (bgNum < 0) {
    bgNum = bgImgs.length - 1;
  }
  switchBg(bgNum);
  localStorage.setItem("bgNum", bgNum);
};
aftBtn.onclick = () => {
  bgNum++;
  if (bgNum > bgImgs.length - 1) {
    bgNum = 0;
  }
  switchBg(bgNum);
  localStorage.setItem("bgNum", bgNum);
};

if (localStorage.getItem("bgNum") !== null) {
  bgNum = Number(localStorage.getItem("bgNum"));
}

switchBg(bgNum);

// Switch Content Box In the [home Section]
let circles = document.querySelectorAll(".home .circle");
let rowLeft = document.querySelector(".home .left");
let rowRight = document.querySelector(".home .right");
let abTitle = document.querySelector(".home h3");
let abImg = document.querySelector(".home img");
let abPg = document.querySelector(".home p");

function fillContent(title, img, p) {
  let content = {
    title: title,
    img: img,
    p: p,
  };
  return content;
}

let cnt1 = fillContent(
  "Mountain Survival Tutorial",
  "about1.png",
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus modi fuga perferendis velit deseruntofficia, cumque aperiam voluptatum quas, dolorem quisquam nam similique. Inventore, voluptate`
);
let cnt2 = fillContent(
  "What's behind trees",
  "about2.png",
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus modi fuga perferendis velit deseruntofficia, cumque aperiam voluptatum quas, dolorem quisquam nam similique. Inventore, voluptate`
);
let cnt3 = fillContent(
  "Ride a bike in mountains",
  "about3.png",
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus modi fuga perferendis velit deseruntofficia, cumque aperiam voluptatum quas, dolorem quisquam nam similique. Inventore, voluptate`
);
let cnt4 = fillContent(
  "Follow your passion",
  "about4.png",
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus modi fuga perferendis velit deseruntofficia, cumque aperiam voluptatum quas, dolorem quisquam nam similique. Inventore, voluptate`
);

let cntArr = [cnt1, cnt2, cnt3, cnt4];

let currAbNum = 0;

const swAbContent = (num) => {
  abTitle.innerHTML = cntArr[num].title;
  abImg.src = `media/${cntArr[num].img}`;
  abPg.innerHTML = cntArr[num].p;
  circles.forEach((e, i) => {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    }
    if (i === num) {
      e.classList.add("active");
    }
  });
};

// Show and hide rows
let shohid = (num) => {
  if (num == cntArr.length - 1) {
    rowRight.style.display = "none";
  }
  if (num > 0) {
    rowLeft.style.display = "block";
  }
  if (num == 0) {
    rowLeft.style.display = "none";
  }
  if (num < cntArr.length - 1) {
    rowRight.style.display = "block";
  }
};

rowRight.onclick = () => {
  currAbNum++;
  swAbContent(currAbNum);
  shohid(currAbNum);
};

rowLeft.onclick = () => {
  currAbNum--;
  swAbContent(currAbNum);
  shohid(currAbNum);
};

circles.forEach((e, i) => {
  e.onclick = () => {
    currAbNum = i;
    swAbContent(currAbNum);
    shohid(currAbNum);
  };
});

swAbContent(currAbNum);

// Remove lastes elements in store section when [width <= 768]
let products = document.querySelectorAll(".store .box");

products.forEach((e, i) => {
  if (window.innerWidth <= 991) {
    if (i >= 2) {
      e.remove();
    }
  }
});

// Remove bullets in store section when [width >= 992]
let bullets = document.querySelectorAll(".store .bullets .circle");

bullets.forEach((e, i) => {
  if (window.innerWidth >= 992) {
    if (i >= 2) {
      e.remove();
    }
  }
});

// Change Products in store section
// 992px >= width
let boxes = document.querySelectorAll(".store .boxes .box img");

bullets.forEach((e, i) => {
  e.onclick = () => {
    let count = i + 1;
    if (i == 1) {
      if (window.innerWidth >= 992) count += 3;
    }
    boxes.forEach((el) => {
      el.src = `media/stor${count++}.png`;
    });
    document.querySelector(".store .active").classList.remove("active");
    e.classList.add("active");
  };
});

// footer date
let date = document.querySelector(".footer .date");

date.innerHTML = new Date().getFullYear();
