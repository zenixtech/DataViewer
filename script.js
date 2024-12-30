let users = [];

// Fetch data from API
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.users;
    displayUsers(users);
  });

// Display users in the table
function displayUsers(usersToDisplay) {
  const userTable = document.getElementById("user-table");
  userTable.innerHTML = "";
  usersToDisplay.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.firstName} ${user.lastName}</td>
            <td>${user.gender}</td>
            <td>${user.company.department}</td>
          `;
    row.onclick = () => openPopup(user);
    userTable.appendChild(row);
  });
}

// Open popup with user details
function openPopup(user) {
  document.getElementById("user-image").src = user.image;
  document.getElementById(
    "user-name"
  ).textContent = `${user.firstName} ${user.lastName}`;
  document.getElementById("user-email").textContent = user.email;
  document.getElementById("user-phone").textContent = user.phone;
  document.getElementById("user-education").textContent =
    user.university || "N/A";
  document.getElementById(
    "user-company"
  ).textContent = `${user.company.name} (${user.company.title})`;
  document.getElementById("user-experience").textContent =
    user.company.yearsOfExperience || "N/A";
  document.getElementById(
    "user-address"
  ).textContent = `${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`;
  document.getElementById("popup").classList.add("active");
}

// Close popup
function closePopup() {
  document.getElementById("popup").classList.remove("active");
}
