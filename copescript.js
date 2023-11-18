function copyToClipboard() {
    // Получаем элемент с id "link"
    let linkElement = document.getElementById("link");

    // Создаем элемент для временного хранения текста
    let tempInput = document.createElement("input");

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
$("#dateTo").datetimepicker(
    {
        format: 'DD.MM.YYYY HH:mm',
        inline: false,
        locale: 'ru',
    }
);

document.getElementById("copybutton").addEventListener("click", function() {
    copyToClipboardd();
});

function copyToClipboardd() {
    // Получаем элемент с id "link"
    let linkElement = document.getElementById("link");

    // Создаем элемент для временного хранения текста
    let tempInput = document.createElement("input");

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


