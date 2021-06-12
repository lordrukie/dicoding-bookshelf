let books = []
const localStorageKey = 'books'

function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    }
    return true;
}

function composeObject(id, title, author, year, isComplete) {
    return {
        id,
        title,
        author,
        year: Number(year),
        isComplete
    };
}

function findBookIdFromData(bookId) {
    for(book of books){
        if(book.id == bookId)
            return book;
    }
    return null;
}

function saveToStorage() {
    if(isStorageExist()) saveData();
}

function saveData() {
    const parsedData = JSON.stringify(books);
    localStorage.setItem(localStorageKey, parsedData);
}

function loadData() {
    const serializedData = localStorage.getItem(localStorageKey);
    let data = JSON.parse(serializedData);

    if(data !== null)
        books = data;

    for(book of books) {
        showBooks(book)
    }
}