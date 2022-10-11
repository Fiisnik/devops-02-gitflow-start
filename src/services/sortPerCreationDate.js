module.exports = function (item, sortType) {
    const sortedItems = item.sort((item1, item2) => item1.creationDate - item2.creationDate)
    return sortType === 'asc' ? sortedItems : sortedItems.reverse()
}