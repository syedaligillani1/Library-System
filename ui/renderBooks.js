export function renderBooks(books, deleteBook, editBook) {
    const list = document.getElementById("bookList");
    list.innerHTML = "";
  
    books.forEach((book, index) => {
      const li = document.createElement("li");
      const text = document.createTextNode(book.describe());
      li.appendChild(text);
  
      const DeleteButton = document.createElement("button");
      DeleteButton.textContent = "Delete";
      DeleteButton.onclick = () => deleteBook(index);
      li.appendChild(DeleteButton);
  
      const EditButton = document.createElement("button");
      EditButton.textContent = "Edit";
      EditButton.onclick = () => editBook(index);
      li.appendChild(EditButton);
  
      list.appendChild(li);
    });
  }
  