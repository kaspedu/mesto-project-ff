// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(cardData, onRemove) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    deleteButton.addEventListener('click', (event) => onRemove(event.target.closest('.card')));

    cardsContainer.appendChild(cardElement);
}

// @todo: Функция удаления карточки
function removeCard(cardElement) {
    if (cardElement) {
        cardElement.remove();
    }
}

// @todo: Вывести карточки на страницу
initialCards.forEach(cardData => addCard(cardData, removeCard));
