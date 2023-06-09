//Получение ссылок на кнопки и добавление обработчиков событий
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

let intervalId = null; // идентификатор интервала 

//Обработчик события для кнопки "Start
function onStartButtonClick() {
  startButton.disabled = true;//устанавливает свойство disabled 
  intervalId = setInterval(changeBackgroundColor, 1000); 
  //запускает интервал, который вызывает функцию
}
//Обработчик события для кнопки "Stop"
function onStopButtonClick() {
  startButton.disabled = false;//убирает свойство disabled 
  clearInterval(intervalId); //очищаем интервал
}
//изменение цвета фона
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
//генерация случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

