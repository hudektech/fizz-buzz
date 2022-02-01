let number = document.querySelector("#number");
let answer = document.querySelector("#answer");

let btnRight = document.querySelector("#right");
let btnLeft = document.querySelector("#left");

let start = document.querySelector("#start");

// Function
let fizzBuzz = (nextNumber, boolUpdateClass = true) => {
  let response;

  let mod3 = nextNumber % 3;
  let mod5 = nextNumber % 5;

  // Fizz Buzz
  if (mod3 == 0 && mod5 == 0) {
    response = "Fizz Buzz";
    boolUpdateClass ? answer.classList.add("fizz-buzz") : null;

    // Fizz
  } else if (mod3 == 0) {
    response = "Fizz";
    boolUpdateClass ? answer.classList.add("fizz") : null;

    // Buzz
  } else if (mod5 == 0) {
    response = "Buzz";
    boolUpdateClass ? answer.classList.add("buzz") : null;

    // Normal
  } else {
    response = nextNumber;
    boolUpdateClass ? answer.classList.add("normal") : null;
  }

  return response;
};

// Start Game
start.addEventListener("click", (event) => {
  answer.classList.remove("fizz");
  answer.classList.remove("buzz");
  answer.classList.remove("fizz-buzz");
  answer.classList.remove("normal");

  answer.innerText = "1";
  answer.classList.add("normal");

  number.innerText = "1";
});

// Move forward
btnRight.addEventListener("click", (event) => {
  answer.classList.remove("fizz");
  answer.classList.remove("buzz");
  answer.classList.remove("fizz-buzz");
  answer.classList.remove("normal");

  // next number
  nextNumber = parseInt(number.innerText) + 1;

  number.innerText = nextNumber;
  answer.innerText = fizzBuzz(nextNumber);

  // nextResponse = fizzBuzz(nextNumber + 1, false);
  // console.log(nextResponse);
});

// Move forward
btnLeft.addEventListener("click", (event) => {
  // previous number
  prevNumber = parseInt(number.innerText) - 1;

  if (prevNumber < 1) {
    return;
  }

  answer.classList.remove("fizz");
  answer.classList.remove("buzz");
  answer.classList.remove("fizz-buzz");
  answer.classList.remove("normal");

  number.innerText = prevNumber;
  answer.innerText = fizzBuzz(prevNumber);
});

// Move backwards
