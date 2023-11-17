function copyToClipboard() {
    // Получаем элемент с id "link"
    var linkElement = document.getElementById("link");

    // Создаем элемент для временного хранения текста
    var tempInput = document.createElement("input");

    // Устанавливаем значение элемента в текст из элемента "link"
    tempInput.value = linkElement.innerText;

    // Добавляем элемент в DOM
    document.body.appendChild(tempInput);

    // Выделяем текст в элементе
    tempInput.select();

    // Копируем выделенный текст в буфер обмена
    document.execCommand("copy");

    // Удаляем временный элемент
    document.body.removeChild(tempInput);

}