const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const buttonCheck = document.querySelector("#button-check");
const outputDisplay = document.querySelector(".out-put");

function luckyNumberCheck() {
  if (luckyNumber.value > 0 && birthDate.value.trim() != 0) {
    const dob = birthDate.value;
    const sum = sumOfBirthDate(dob);
    console.log(sum)
    if (sum % luckyNumber.value == 0) {
      outputDisplay.innerText = luckyNumber.value + "is your lucky number";
      console.log("birthday is lucky")
    } else if (sum % luckyNumber.value != 0) {
      outputDisplay.innerText = luckyNumber.value + " is not your lucky number";
      console.log("birthday is not lucky")
    } else {
      outputDisplay.style.display = "none";
    }
  } else {
    outputDisplay.innerText = "not valid";
  }
}

function sumOfBirthDate(dob) {
  dob = dob.replaceAll("-", "");
  // let nob = Number(dob)
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  // while (nob > 0) {
  //   sum = sum + (nob % 10);
  //   nob = nob / 10;
  // }
  return sum;
}

buttonCheck.addEventListener("click", luckyNumberCheck);