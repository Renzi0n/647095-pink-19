let reviewsRadio = document.querySelectorAll("#controlReviews .control__radio"),
    reviewsSlide = document.querySelectorAll(".reviews__slide"),
    ratesRadio = document.querySelectorAll("#controlRates .control__radio"),
    rates = document.querySelector(".rates"),
    controlBtnLeft = document.querySelector(".control__btn--left"),
    controlBtnRight = document.querySelector(".control__btn--right"),
    i;

controlBtnLeft.addEventListener("click", function () {
  for (let j = 0; j < reviewsSlide.length; j++) {
    if (reviewsSlide[j].classList.contains("reviews__slide--show")) {
      reviewsSlide[j].classList.remove("reviews__slide--show");
      i = j;
    }
  }
  if (i === 0) {
    i = 3;
  }
  reviewsSlide[i - 1].classList.add("reviews__slide--show");
});

controlBtnRight.addEventListener("click", function () {
  for (let j = 0; j < reviewsSlide.length; j++) {
    if (reviewsSlide[j].classList.contains("reviews__slide--show")) {
      reviewsSlide[j].classList.remove("reviews__slide--show");
      i = j;
    }
  }
  if (i === 2) {
    i = -1;
  }
  reviewsSlide[i + 1].classList.add("reviews__slide--show");
});

function reviews (i) {
  reviewsRadio[i].addEventListener("click", function () {
    for (let j = 0; j < reviewsSlide.length; j++) {
      if (reviewsSlide[j].classList.contains("reviews__slide--show")) {
        reviewsSlide[j].classList.remove("reviews__slide--show");
      }
    }
    reviewsSlide[i].classList.add("reviews__slide--show");
  });
}

for (let i = 0; i < reviewsRadio.length; i++) {
  reviews (i);
}

for (let i = 0; i < ratesRadio.length; i++) {
  ratesRadio[i].addEventListener("click", function () {
    if (i === 0) {
      rates.style.alignItems = "flex-start";
    } else {
      if (i === 1) {
        rates.style.alignItems = "center";
      } else {
        rates.style.alignItems = "flex-end";
      }
    }
  });
}
