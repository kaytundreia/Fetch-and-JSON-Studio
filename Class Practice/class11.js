class Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, discarded = false){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded
    }
}

const book1 = new Book("Pride and Prejudice", "Jane Austen", 1813, 123456789, 200, 10, false)

console.log(book1);
