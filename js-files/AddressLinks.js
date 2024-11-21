$(document).ready(function () {
  // Получаем все элементы с классом "address"
  const addresses = $(".address");

  // Проходим по каждому адресу
  addresses.each(function () {
    const address = $(this).text(); // Получаем текст адреса
    const encodedAddress = encodeURIComponent(address);

    // Генерируем ссылки для каждого адреса
    const googleMapsLink = `https://www.google.com/maps?q=${encodedAddress}`;
    const yandexMapsLink = `https://yandex.ru/maps/?text=${encodedAddress}`;
    const dgisLink = `https://2gis.ru/search/${encodedAddress}`;

    // Формируем HTML для ссылок
    const linksHTML = `
      <div>
        <p><strong>Адрес:</strong> ${address}</p>
        <a href="${googleMapsLink}" target="_blank" rel="noopener noreferrer">Google Maps</a><br>
        <a href="${yandexMapsLink}" target="_blank" rel="noopener noreferrer">Яндекс.Карты</a><br>
        <a href="${dgisLink}" target="_blank" rel="noopener noreferrer">2ГИС</a><br>
        <hr>
      </div>
    `;

    // Добавляем ссылки в контейнер
    $("#links-container").append(linksHTML);
  });
});