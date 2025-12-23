//Фильтр

const withFilter = (cards, filterArray) => {
    if (cards === undefined) return cards
    return cards.filter((card) => filterArray.includes(card.size));
};

export default withFilter;
