"use strict";

/*
//  Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log("#######################################33");
const now = new Date();

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toISOString());
console.log(now.getTime());
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
const FU = new Date(2022, 11, 17, 20, 0);
console.log(FU);
console.log(+FU);
const FuDays = +FU / (1000 * 60 * 60 * 24);
console.log(FuDays);

const calcDays = (date1, date2) => {
  return Math.round(Math.abs(date2 - date1).toFixed(1) / (1000 * 60 * 60 * 24));
};

const day = calcDays(new Date().getTime(), new Date(2022, 11, 17).getTime());
// const day = calcDays(new Date(2022, 11, 20), new Date(2022, 11, 17));

console.log(day);
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
console.log(new Date(2022, 11, 17));
// console.log(
//   (new Date(2022, 11, 17) - new Date()) / (1000 * 60 * 60 * 24).toFixed()
// );

/////set interval//////////
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  //   console.log(`time now is ${hour}:${minute}:${seconds}`);
  //   console.log(now);
}, 1000);

let timeContent = document.querySelector("#time");
///decrease time
let time = 12;
let html = ``;
setInterval(function () {
  timeContent.innerHTML = ``;
  html = `<div id="time">
  <span>time is <span id="timer">${time}</span></span>
</div>`;

  time--;
  if (time === 0) {
    time = 12;
  }
  timeContent.insertAdjacentHTML("afterbegin", html);
}, 1000);

let date1 = new Date();
let date2 = new Date(2022, 11, 17);

let observerTime = Math.round(Math.abs(date2 - date1).toFixed(1));

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");
console.log(observerTime);

let observerTimeDay = Math.round(observerTime / (1000 * 60 * 60 * 24));
console.log(observerTimeDay);
let observerTimeHours = Math.round(
  (observerTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
console.log(observerTimeHours);
let observerTimeMinute = Math.round(
  (observerTime % (1000 * 60 * 60)) / (1000 * 60)
);
console.log(observerTimeMinute);
let observerTimeSeconds = Math.round((observerTime % (1000 * 60)) / 1000);
console.log(observerTimeSeconds);

setInterval(function () {
  html = `time remender is ${observerTimeDay}:${observerTimeHours}:${observerTimeMinute}:${observerTimeSeconds}`;
  //   console.log(
  //     `time remender is ${observerTimeDay}:${observerTimeHours}:${observerTimeMinute}:${observerTimeSeconds}`
  //   );
  observerTimeSeconds--;
  if (observerTimeSeconds === 0) {
    observerTimeMinute--;
    observerTimeSeconds = 60;
    observerTimeSeconds--;
  } else if (observerTimeMinute === 0) {
    observerTimeMinute = 60;
    observerTimeMinute--;

    observerTimeSeconds = 60;
    observerTimeSeconds--;
  }
  timeContent.insertAdjacentHTML("afterbegin", html);
}, 1000);

*/

/*

 <textarea id="tArea" cols="50" 
            oninput="limitChar(this)" maxlength="500"></textarea>


             let limitChar = (element) => {
        const maxChar = 500;
        
        let ele = document.getElementById(element.id);
        let charLen = ele.value.length;
        
        let p = document.getElementById('charCounter');
        p.innerHTML = maxChar - charLen + ' characters remaining';
        
        if (charLen > maxChar) 
        {
            ele.value = ele.value.substring(0, maxChar);
            p.innerHTML = 0 + ' characters remaining'; 
        }
    }

*/

let slider = document.querySelector(".nav-slide");
let closeBtn = document.querySelector(".close");
let openBtn = document.querySelector(".open");
let cardTitle = document.querySelectorAll(".card-title");
let cardContent = document.querySelectorAll(".card-content");
let showCOUNTER = document.querySelector("#showCOUNTER");
let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let massegeInput = document.querySelector("#massegeInput");
let char = document.querySelector("#char");
let form = document.querySelector("form");
let btn = document.querySelector(".btn");
let html = ``;

console.log(cardTitle);
console.log(cardContent);
console.log(showCOUNTER);
console.log(openBtn);

//................  implementing the form....................

btn.addEventListener("click", function (e) {
  e.preventDefault();
});

//.................  implementing the text area...................

let limitChar = function (element) {
  // ch;
  let maxChar = 100;
  let ele = massegeInput.value.length;
  // console.log(ele);
  char.innerHTML = maxChar - ele;
  if (charLen > maxChar) {
    ele.value = ele.value.length.substring(0, maxChar);
  }
};

massegeInput.addEventListener("keypress", function () {
  limitChar(this.value);
});

// ....................... implementing the counter..................

let date1 = new Date();
let date2 = new Date(2022, 11, 17);

let observerTime = Math.round(Math.abs(date2 - date1).toFixed());

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");
console.log(observerTime);

let observerTimeDay = Math.round(observerTime / (1000 * 60 * 60 * 24));
console.log(observerTimeDay);
let observerTimeHours = Math.round(
  (observerTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
console.log(observerTimeHours);
let observerTimeMinute = Math.round(
  (observerTime % (1000 * 60 * 60)) / (1000 * 60)
);
console.log(observerTimeMinute);
let observerTimeSeconds = Math.round((observerTime % (1000 * 60)) / 1000);
console.log(observerTimeSeconds);

setInterval(function () {
  showCOUNTER.innerHTML = ``;
  html = `time remender is ${observerTimeDay}:${observerTimeHours}:${observerTimeMinute}:${observerTimeSeconds}`;

  //   console.log(
  //     `time remender is ${observerTimeDay}:${observerTimeHours}:${observerTimeMinute}:${observerTimeSeconds}`
  //   );

  html = `<div class="item"><p>${observerTimeDay} D</p></div>
    <div class="item"><p>${observerTimeHours} H</p></div>
    <div class="item"><p>${observerTimeMinute} M</p></div>
    <div class="item"><p>${observerTimeSeconds} S</p></div>`;
  observerTimeSeconds--;
  if (observerTimeSeconds === 0) {
    observerTimeMinute--;
    observerTimeSeconds = 60;
    observerTimeSeconds--;
  } else if (observerTimeMinute === 0) {
    observerTimeMinute = 60;
    observerTimeMinute--;

    observerTimeSeconds = 60;
    observerTimeSeconds--;
  } else if (observerTimeHours === 0) {
    observerTimeHours = 24;
    observerTimeHours--;
    observerTimeDay--;
  }
  showCOUNTER.insertAdjacentHTML("afterbegin", html);
  // showCOUNTER.innerHTML = html;
}, 1000);

//.............implemententing the slide ...............//

let x = $(".card-title");
let y = $(".card-content");
console.log(x);

// for (let j = 0; j < x.length; j++) {
//   $(x[j]).on("click", function () {
//     for (let i = 0; i < y.length; i++) {
//       $(y[i]).slideToggle(1000);
//     }
//   });
// }

// element.on("click", function () {
//   for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
//     $(x[i]).animate({ slideToggle: x[i] }, 1000);
//   }
// });
// $(".card-title").on("click", function () {
//   let x = $(".card-content");
//   for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
//     $(x[i]).animate({ slideToggle: x[i] }, 1000);
//   }
//   console.log(x);
//   // cardContent
// });

//solution 1

$(".card-title")
  .eq(0)
  .on("click", function () {
    $(".card-content").eq(0).slideToggle(1000);
  });
$(".card-title")
  .eq(1)
  .on("click", function () {
    $(".card-content").eq(1).slideToggle(1000);
  });
$(".card-title")
  .eq(2)
  .on("click", function () {
    $(".card-content").eq(2).slideToggle(1000);
  });
$(".card-title")
  .eq(3)
  .on("click", function () {
    $(".card-content").eq(3).slideToggle(1000);
  });

// .................implementing slider nav .................

let sliderWidth = $(".nav-slide").innerWidth();
console.log(sliderWidth);

$(".open").click(function (e) {
  e.preventDefault();

  if ($(".nav-slide").css("left") == "0px") {
    $(".nav-slide").animate({ left: -sliderWidth }, 1000);
    $(".open").animate({ left: -sliderWidth }, 1000);
  } else {
    $(".nav-slide").animate({ left: "0px" }, 1000);
    $(".open").animate({ left: "0px" }, 1000);
  }
  // $(".nav-slide").hide(1000);
});

$(".close").click(function (e) {
  e.preventDefault();
  $(".nav-slide").animate({ left: -sliderWidth }, 1000);
  $(".open").animate({ left: -sliderWidth }, 1000);
  // $(".nav-slide").hide(1000);
});

// .............implementing scroll behivar......................
let sectionOffsetTop = $("#duration").offset().top;
console.log(sectionOffsetTop);

let anchours = document.querySelectorAll(".nav-slide ul li a");

$(".nav-slide ul li a").click(function () {
  let clickedAnchors = $(this).attr("href");
  let sectionOffsetTop = $(clickedAnchors).offset().top;
  console.log(sectionOffsetTop);
  $("html,body").animate({ scrollTop: sectionOffsetTop }, 500);

  console.log(clickedAnchors);
});
