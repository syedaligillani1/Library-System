export function renderCustomers(customers, deleteCustomer, editCustomer) {
  const list = document.getElementById("customerList");
  list.innerHTML = "";

  customers.forEach((customer, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(customer.describe());
    li.appendChild(text);

    const DeleteButton = document.createElement("button");
    DeleteButton.textContent = "Delete";
    DeleteButton.onclick = () => deleteCustomer(index);
    li.appendChild(DeleteButton);

    const EditButton = document.createElement("button");
    EditButton.textContent = "Edit";
    EditButton.onclick = () => editCustomer(index);
    li.appendChild(EditButton);

    list.appendChild(li);
  });
}
