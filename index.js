function handleFormSubmit(event){
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

const obj = {
  name,
  email,
  phone
}
localStorage.setItem(obj.email, JSON.stringify(obj));
showUserOnScreen(obj);
  event.target.username.value = '';
  event.target.email.value = '';
  event.target.phone.value = '';
}

function showUserOnScreen(obj){
  const parentElem = document.getElementById('listOfItems');
  const childElem = document.createElement('li');
  childElem.textContent = obj.name + ' - '+ obj.email + ' - '+ obj.phone;

  const deleteButton = document.createElement('input');
  deleteButton.type = "button"
  deleteButton.value = "Delete"
  deleteButton.onclick = () => {
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
       clearInputFields()
  }
 
const editButton = document.createElement('input')
editButton.type = "button"
editButton.value = "Edit"
editButton.onclick = () => {
  localStorage.removeItem(obj.email)
  parentElem.removeChild(childElem)
  document.getElementById('username').value = obj.name
  document.getElementById('email').value = obj.email
  document.getElementById('phone').value = obj.phone
}

  childElem.appendChild(deleteButton)
  childElem.appendChild(editButton)
  parentElem.appendChild(childElem)

function clearInputFields() {
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}

}