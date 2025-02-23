const library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
const myLibrary = [
    {
        title: "The Hidden",
        author: "Sam Andy",
        isRead: true,
    },
    {
        title: "Dive Hurricane",
        author: "Mario Jizzer",
        isRead: false,
    }
];


function newBook(book) {
    myLibrary.push(book);
};
function removeBook(book) {
    myLibrary.remove(book);
;}

function displayBooks(book) {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    let read = book.read;
  
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h4 class="title"> ${title}.</h4>
      <p class="author"> written by <span>${author},</span></p>
      <p class="pages"> ${pages} pages long. </P>`;
  
    const toggle = document.createElement("p");
    const check = document.createElement("button");
    const remove = document.createElement("button");
    const checkwrapper = document.createElement("div");
    checkwrapper.className = "checkwrapper";
  
   
  
}
const book1 = new Book("Harry Potter", "J. K. Rowlings", 350, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 180, false);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 120, true);
const book4 = new Book("Things Fall Apart", "Chinua Achebe", 389, false);
displayBooks(book1);
displayBooks(book2);
displayBooks(book3);
displayBooks(book4);

console.log(library);