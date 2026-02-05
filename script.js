
/*function loadPage(pageId) {
    const template = document.getElementById(pageId);
    // yung div mo ito//
    const app = document.getElementById("page");
    app.innerHTML = "";
    app.appendChild(template.content.cloneNode(true));
}
//yung id nang template ito//
loadPage("student");*/

function loadPage(pageId) {
    const page = document.getElementById("page");
    const template = document.getElementById(pageId);

    if (!template) {
        console.error("Template not found:", pageId);
        return;
    }

    page.innerHTML = "";
    page.appendChild(template.content.cloneNode(true));

    // ✅ ONLY load rooms when admin settings is opened
    if (pageId === "admin_settings") {
        setTimeout(loadRoomList, 300);
    }
}
loadPage("student");








/*function loadPage(pageId) {

const template = document.getElementById(pageId);

// yung div mo ito//

const app = document.getElementById("page");

app.innerHTML = "";

app.appendChild(template.content.cloneNode(true));

}

//yung id nang template ito//

loadPage("student");*/

function loadPage(pageId) {

const page = document.getElementById("page");

const template = document.getElementById(pageId);



if (!template) {

    console.error("Template not found:", pageId);

    return;

}



page.innerHTML = "";

page.appendChild(template.content.cloneNode(true));



// ✅ ONLY load rooms when admin settings is opened

if (pageId === "admin_settings") {

    setTimeout(loadRoomList, 300);

}

}

loadPage("student");

// ================== TEMPLATE LOADER ==================

function loadPage(id) {

const template = document.getElementById(id);

document.getElementById("page").innerHTML = template.innerHTML;



if (id === "admin_settings") {

    loadRoomList();

    loadSavedChanges();

    attachPasswordChange();

}



if (id === "admin") {

    setupAdminLogin();

}

}

// ================== DEFAULT PASSWORD SETUP ==================

if (!localStorage.getItem("adminPassword")) {

localStorage.setItem("adminPassword", "aynako");

}

// ================== ADMIN LOGIN FUNCTION ==================

function setupAdminLogin() {

const btn = document.getElementById("PassB");

const input = document.getElementById("PassT");



btn.addEventListener("click", function (e) {

    e.preventDefault();



    const savedPass = localStorage.getItem("adminPassword");

    const entered = input.value;



    if (entered === savedPass) {

        alert("Access Granted!");

        loadPage("admin_settings");

    } else {

        alert("Wrong Password!");

    }

});

}

// ================== LOAD ROOMS INTO SELECT ==================

function loadRoomList() {

const rooms = document.querySelectorAll(".room-container div");

const select = document.getElementById("roomSelect");



select.innerHTML = "";



rooms.forEach(room => {

    let option = document.createElement("option");

    option.value = room.id;

    option.textContent = room.querySelector("p").innerText;

    select.appendChild(option);

});

}

// ================== APPLY ADMIN CHANGES ==================

function applyChanges() {

const roomId = document.getElementById("roomSelect").value;

const newName = document.getElementById("newText").value;

const newImage = document.getElementById("newImage").files[0];



let changes = JSON.parse(localStorage.getItem("roomChanges")) || {};



if (!changes[roomId]) {

    changes[roomId] = {};

}



if (newName) {

    changes[roomId].text = newName;

}



if (newImage) {

    const reader = new FileReader();

    reader.onload = function (e) {

        changes[roomId].image = e.target.result;

        localStorage.setItem("roomChanges", JSON.stringify(changes));

        alert("Changes Saved!");

    };

    reader.readAsDataURL(newImage);

} else {

    localStorage.setItem("roomChanges", JSON.stringify(changes));

    alert("Changes Saved!");

}

}

// ================== LOAD SAVED CHANGES ==================

function loadSavedChanges() {

let changes = JSON.parse(localStorage.getItem("roomChanges")) || {};



for (let id in changes) {

    const room = document.getElementById(id);

    if (!room) continue;



    if (changes[id].text) {

        room.querySelector("p").innerText = changes[id].text;

    }



    if (changes[id].image) {

        room.querySelector("img").src = changes[id].image;

    }

}

}

// ================== CHANGE PASSWORD FEATURE ==================

function attachPasswordChange() {

const btn = document.getElementById("changePass");



btn.addEventListener("click", function () {

    const proceed = confirm("Do you want to change password?");



    if (!proceed) return;



    const oldPass = prompt("Enter OLD password:");



    if (oldPass !== localStorage.getItem("adminPassword")) {

        alert("Wrong Old Password!");

        return;

    }



    const newPass = prompt("Enter NEW password:");



    if (!newPass) {

        alert("Password cannot be empty!");

        return;

    }



    const finalConfirm = confirm("Are you sure to save new password?");



    if (finalConfirm) {

        localStorage.setItem("adminPassword", newPass);

        alert("Password Successfully Changed!");

    } else {

        alert("Password Change Cancelled");

    }

});

}
