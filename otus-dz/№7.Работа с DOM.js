//Сверстать страницу и подключить к ней файл со скриптом. На странице должны быть три текстовых параграфа, поле ввода и кнопка. Напишите скрипт,который будет выполнять следующие условия:

//1.Кнопка скрыта, если в поле ввода нет значения.
//2.При клике на кнопку добавляется новый параграф,содержащий текст из поля ввода.
//3.*Если параграфов становится больше 5, первый из них удаляется.

const textInput = document.querySelector(".entry-field");
const btn = document.querySelector(".btn");
const containerParagraph = document.querySelector(".container");
const paragraphs = document.getElementsByTagName("p");

function btnHide() {
  if (textInput.value === "") {
    btn.hidden = true;
  } else {
    btn.hidden = false;
  }
}
btnHide();
textInput.addEventListener("input", btnHide);
btn.addEventListener("click", function () {
  const messageText = document.createElement("p");
  messageText.innerText = textInput.value;
  containerParagraph.append(messageText);
  if (paragraphs.length > 5) {
    const pCol = document.querySelector("p");
    pCol.remove(pCol);
  }
});
