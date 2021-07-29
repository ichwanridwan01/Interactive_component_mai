let pricesArray = [8, 12, 16, 24, 36, 40];
let mycheckbox = document.querySelector(".mounth input");
let duration = document.querySelector(".duration");
let price = document.querySelector(".page-pricing h1");
let range = document.querySelector(".myRange");
let slide = document.querySelector(".mounth");
let h4 = document.querySelector(".page-pricing h4");
price.textContent = "$" + pricesArray[range.value] + ".00";

slide.oninput = function () {
  if (mycheckbox.checked) {
    price.textContent = "$" + pricesArray[range.value] * 0.75 + ".00";
    duration.textContent = "/year";
  } else {
    price.textContent = "$" + pricesArray[range.value] + ".00";
    duration.textContent = "/month";
  }
};

// add listener to input

range.addEventListener("input", upadtePrice);

// price update

function upadtePrice() {
  if (range.value == 1) {
    if (mycheckbox.checked) {
      price.textContent = "$" + pricesArray[range.value] * 0.75 + ".00";
    } else {
      price.textContent = "$" + pricesArray[range.value] + ".00";
    }
    h4.textContent = "10000k";
  }
  if (range.value == 2) {
    if (mycheckbox.checked) {
      price.textContent = "$" + pricesArray[range.value] * 0.75 + ".00";
    } else {
      price.textContent = "$" + pricesArray[range.value] + ".00";
    }
    h4.textContent = "20000k";
  }

  if (range.value == 3) {
    if (mycheckbox.checked) {
      price.textContent = "$" + pricesArray[range.value] * 0.75 + ".00";
    } else {
      price.textContent = "$" + pricesArray[range.value] + ".00";
    }
    h4.textContent = "30000k";
  }

  if (range.value == 4) {
    if (mycheckbox.checked) {
      price.textContent = "$" + pricesArray[range.value] * 0.75 + ".00";
    } else {
      price.textContent = "$" + pricesArray[range.value] + ".00";
    }
    h4.textContent = "40000k";
  }
  if (range.value == 5) {
    if (mycheckbox.checked) {
      price.textContent = "$" + pricesArray[range.value] * 0.75 + ".00";
    } else {
      price.textContent = "$" + pricesArray[range.value] + ".00";
    }
    h4.textContent = "1M";
  }
}
