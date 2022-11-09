// DOM
const refresh = document.querySelector('#refresh');
console.log(refresh);
class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }
  showRead() {
    console.log(`read is ${this.read}`);
  }
  checkFini(page) {
    this.currentPage = page;
    if (page >= this.pages) {
      console.log(`Tu as fini ce livre`);
      this.showRead();
    } else {
      console.log(`Tu n'as encore pas fini ce livre`);
    }
  }
}
const book1 = new Book('書名', '作者', '介紹', 42, 24, true);
const book2 = new Book('書名2', '作者2', '介紹2', 422, 242, false);
// console.log(book1);

const books = [book1, book2];
// books.push(book1, book2);
console.log(books);

console.log(book1.checkFini());
