class Book 
 {
  constructor(id, title, author) 
  {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  describe() 
  {
    return `"${this.title}" by ${this.author}`;
  }
}

class Customer 
{
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  describe() {
    return ` ${this.name}`;
  }
}

let books = [];
let customers = [];

let bookID = 1;
let customerID = 1;

document.getElementById("bookForm").addEventListener("submit", function (e) { e.preventDefault();

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;

  const newBook = new Book(bookID++, title, author);
  books.push(newBook);
  renderBooks();
  this.reset();
});

document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;

  const newCustomer = new Customer(customerID++, name, email);
  customers.push(newCustomer);
  renderCustomers();
  this.reset();
});


function renderBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";
  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = book.describe();
    list.appendChild(li);
    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = 'Delete';
    DeleteButton.onclick = function () {
      books.splice(index, 1); 
      renderBooks(); 
    }
    list.appendChild(DeleteButton);
    const EditButton = document.createElement('button');
    EditButton.textContent = 'Edit';
    EditButton.onclick = function () {

      document.getElementById("bookTitle").value = book.title;
      document.getElementById("bookAuthor").value = book.author;

      books.splice(index, 1); 
      renderBooks(); 
    }
    list.appendChild(EditButton);
  });
}

function renderCustomers() {
  const list = document.getElementById("customerList");
  list.innerHTML = "";
  customers.forEach((customer,index) => {
    const li = document.createElement("li");
    li.textContent = customer.describe();
    list.appendChild(li);
    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = 'Delete';
    DeleteButton.onclick = function () {
      customers.splice(index, 1); 
      renderCustomers(); 
    }
    list.appendChild(DeleteButton);
    const EditButton = document.createElement('button');
    EditButton.textContent = 'Edit';
    EditButton.onclick = function () {

      document.getElementById("customerName").value = customer.name;
      document.getElementById("customerEmail").value = customer.email;

      customers.splice(index, 1); 
      renderCustomers(); 

    }
    list.appendChild(EditButton);
  });
}

