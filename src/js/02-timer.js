import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const startBtnEl = document.querySelector("[data-start]");
startBtnEl.disabled = true;

// Инициализация flatpickr
const datePicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];       
  
    // Проверка, что выбранная дата находится в будущем
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startBtnEl.disabled = true;
    } else {
      startBtnEl.disabled = false;
    }
  },
});

// Обработчик нажатия на кнопку "Start"
startBtnEl.addEventListener("click", () => {
  // Получение выбранной даты из flatpickr
  const selectedDate = datePicker.selectedDates[0];
  const countdownInterval = setInterval(updateCountdown, 500);

  // Функция обновления значения таймера
  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = selectedDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      Notiflix.Notify.success("Countdown complete!");
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    // Обновление значений на интерфейсе
    const daysElement = document.querySelector("[data-days]");
    const hoursElement = document.querySelector("[data-hours]");
    const minutesElement = document.querySelector("[data-minutes]");
    const secondsElement = document.querySelector("[data-seconds]");

    daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
  }
});

// Функция форматирования значения с добавлением ведущего нуля
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

// Функция для преобразования миллисекунд в объект с значениями дней, часов, минут и секунд
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
