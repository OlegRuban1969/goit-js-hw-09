import Notiflix from "notiflix";

// Функция создания промиса
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Обработчик события submit формы
document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

const form = event.target; // доступ к элементу формы - событие submit
const delayInput = form.elements.delay; // доступ к элементу ввода с именем "delay"
const stepInput = form.elements.step; // доступ к элементу ввода с именем "step"
const amountInput = form.elements.amount; // доступ к элементу ввода с именем "amount"

// Преобразование значений полей ввода в число
const firstDelay = parseInt(delayInput.value); 
const step = parseInt(stepInput.value); 
const amount = parseInt(amountInput.value); 

// Инициализируем переменную currentDelay значением firstDelay
let currentDelay = firstDelay; 

for (let i = 0; i < amount; i++) {
  createPromise(i + 1, currentDelay) // Создание промиса с текущим значением позиции и задержки
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    .finally(() => {
    // очистка формы
      delayInput.value = "";
      stepInput.value = "";
      amountInput.value = "";
    });

  currentDelay += step;
}

});
