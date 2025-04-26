const getTheTitles = function(bookO) {
    let titles = [];
    for (const book of bookO) {
        titles.push(book.title);        
    }
    return titles;
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
