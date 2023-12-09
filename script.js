let input = document.querySelector(".input");
let button = document.querySelector(".button");
let result = document.querySelector(".result");
let space = document.querySelector(".space");

function convertToRoman() {
  let inputValue = parseInt(input.value);
  let romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  if (!isNaN(inputValue)) {
    for (let key in romanNums) {
      while (inputValue >= romanNums[key]) {
        roman += key;
        inputValue -= romanNums[key];
      }
    }
    result.classList.remove("opacity-0");
    result.classList.add("opacity-100");
    result.innerHTML = `Your Number In Roman Numerals Is: <span class='text-emerald-700 font-bold'>"${roman}" </span>`;
    space.innerHTML = '<br>'
    
  } else {
    result.classList.remove("opacity-0");
    result.classList.add("opacity-100");

    result.innerHTML = `Please Enter A Valid Number To Convert To Roman Numerals.`;
    space.innerHTML = ''

    setTimeout(() => {
      result.classList.remove("opacity-100");
      result.classList.add("opacity-0");
    }, 3000);
  }

  return roman;
}


button.addEventListener("click", convertToRoman);
input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		convertToRoman();
	}
});
