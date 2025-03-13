document.getElementById('loadUsersBtn').addEventListener('click', loadUsers);

function loadUsers() {
  fetch('http://localhost:4500/users')
    .then(response => response.json())
    .then(data => {
      displayUsers(data);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}

function displayUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';  

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const userName = document.createElement('h3');
    userName.textContent = user.name;

    const userEmail = document.createElement('p');
    userEmail.textContent = `Email: ${user.email}`;

    const userAge = document.createElement('p');
    userAge.textContent = `Age: ${user.age}`;

    const userCity = document.createElement('p');
    userCity.textContent = `City: ${user.city}`;

    userDiv.appendChild(userName);
    userDiv.appendChild(userEmail);
    userDiv.appendChild(userAge);
    userDiv.appendChild(userCity);

    userList.appendChild(userDiv);
  });
}
