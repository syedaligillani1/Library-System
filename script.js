import { Book } from "./classes/book.js";
import { Customer } from "./classes/customer.js";
import { renderBooks } from "./ui/renderBooks.js";
import { renderCustomers } from "./ui/renderCustomers.js";

let books = [];
let customers = [];

let bookID = 1;
let customerID = 1;

document.getElementById("bookForm").addEventListener("submit", function (e) { e.preventDefault();

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;

  const newBook = new Book(bookID++, title, author);
  books.push(newBook);
  renderBooks(books, deleteBook, editBook);
  this.reset();
});

document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;

  const newCustomer = new Customer(customerID++, name, email);
  customers.push(newCustomer);
  renderCustomers(customers, deleteCustomer, editCustomer);
  this.reset();
});


function editBook(index){

  const book = books[index]
  document.getElementById("bookTitle").value = book.title;
  document.getElementById("bookAuthor").value = book.author;

  books.splice(index, 1); 
  renderBooks(books, deleteBook, editBook);
}

function editCustomer(index){

  const customer = customers[index]
  document.getElementById("customerName").value = customer.name;
  document.getElementById("customerEmail").value = customer.email;

  customers.splice(index, 1); 
  renderCustomers(customers, deleteCustomer, editCustomer);
}

function deleteBook(index){

  const book = books[index]
  books.splice(index, 1); 
  renderBooks(books, deleteBook, editBook);
}

function deleteCustomer(index){

  const customer = customers[index]
  customers.splice(index, 1); 
  renderCustomers(customers, deleteCustomer, editCustomer);
}


