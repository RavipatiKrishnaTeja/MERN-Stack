//points for using form
//1. wrap every input inside the form.
//2. instead of using button use input with type submit.
//3. add event listener to form tag.
//4. event name should be submit.
//5. whenever you use form, it will try to send the data
// to server , in this process the page reload
// to avoid it we will be use
//event.preventDefault();

document.querySelector("form").addEventListener("submit", todoList);

function todoList() {
  event.preventDefault();

  let itemName = document.querySelector("#name").value;
  let itemQty = document.querySelector("#qty").value;
  let itemPriority = document.querySelector("#priority").value;

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = itemName;
  let td2 = document.createElement("td");
  td2.innerText = itemQty;
  let td3 = document.createElement("td");
  td3.innerText = itemPriority;

  tr.append(td1, td2, td3);

  document.querySelector("tbody").append(tr);
  document.querySelector("#name").value = "";
  document.querySelector("#qty").value = "";
}
