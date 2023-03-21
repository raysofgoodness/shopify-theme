const rangeSliderInput = document.querySelectorAll("[data-price-range]"),
    priceInput = document.querySelectorAll("[data-price-input]"),
    range = document.querySelector(".slider .progress");
let priceGap = 10;

priceInput[0].value = rangeSliderInput[0].min;
priceInput[1].value = rangeSliderInput[1].max;
range.style.left = "0";
range.style.right = "0";


priceInput.forEach(input => {
   input.addEventListener("input", e => {
      let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeSliderInput[1].max) {
         if (e.target.className === "input-min") {
            rangeSliderInput[0].value = minPrice;
            range.style.left = ((minPrice / rangeSliderInput[0].max) * 100) + "%";
         } else {
            rangeSliderInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeSliderInput[1].max) * 100 + "%";

            rangeSliderInput[0].value = minPrice - priceGap;
            range.style.left = ((minPrice - priceGap) / rangeSliderInput[0].max) * 100 + "%";
         }
      }
   });
});

rangeSliderInput.forEach(input => {
   input.addEventListener("input", e => {
      let minVal = parseInt(rangeSliderInput[0].value),
          maxVal = parseInt(rangeSliderInput[1].value);

      if ((maxVal - minVal) < priceGap) {
         if (e.target.className === "range-min") {
            rangeSliderInput[0].value = maxVal - priceGap;
         } else {
            rangeSliderInput[1].value = minVal + priceGap;
         }
      } else {
         priceInput[0].value = minVal;
         priceInput[1].value = maxVal;
         range.style.left = ((minVal / rangeSliderInput[0].max) * 100) + "%";
         range.style.right = 100 - (maxVal / rangeSliderInput[1].max) * 100 + "%";
      }
   });
});




































