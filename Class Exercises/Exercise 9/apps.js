console.log("It's working");

function saveContact() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if(firstName === " " || lastName === " " || phoneNumber === " ") {
        alert("Please fill in all fields");
        return;
    }


    if(isNaN(phoneNumber)) {
        alert("Please enter a vaild number");
        return;
    }

    const table = document.getElementById("contactTable");

    const row = table.insertRow(-1);
    const firstNameCell = row.insertCell(0);
    const lastNameCell = row.insertCell(1);
    const phoneNumberCell = row.insertCell(2);

    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    phoneNumberCell.innerHTML = phoneNumberCell;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
}