const addNumber = (number) => {
  let sum = Number(number) + 10;
  return console.log(sum);
}

const numberRef = document.querySelector('input[name= "number"]');
const buttonRef = document.querySelector("button");

console.log(buttonRef);

buttonRef.addEventListener("click",()=> addNumber(numberRef.value));