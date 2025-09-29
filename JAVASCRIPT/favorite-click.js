const myIcon = document.getElementById('myIcon');

myIcon.addEventListener('click', () => {
  myIcon.classList.toggle('favo');
});


const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const num = document.querySelector(".num");

let count = 1;

plusBtn.addEventListener("click", () => {
  count++;
  num.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 1) {  // prevent going below 1
    count--;
    num.textContent = count;
  }
});
