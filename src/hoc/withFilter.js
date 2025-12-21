//Фильтр

const withFilter = (cards, filter) => {
    return cards.filter((card) => filter.includes(card.size));
};

export default withFilter;
