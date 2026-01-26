 // Initialize default password
  if (!localStorage.getItem("myPassword")) {
    localStorage.setItem("myPassword", "auadmin");
  }

  // LOGIN FUNCTION
  function login(event) {
    event.preventDefault(); // prevent form submission refresh
    let input = document.getElementById("passIn").value;
    let savedPassword = localStorage.getItem("myPassword");

    if (input === savedPassword) {
      // Show admin, hide login
      document.getElementById("stu").classList.remove("active");
      document.getElementById("stu").classList.add("inactive");

      document.getElementById("admin_settings").classList.remove("inactive");
      document.getElementById("admin_settings").classList.add("active");
      document.getElementById("passIn").value = "";
    } else {
      alert("Wrong password!");
    }
  }

  // LOGOUT
  function logout() {
    document.getElementById("admin_settings").classList.remove("active");
    document.getElementById("admin_settings").classList.add("inactive");

    document.getElementById("stu").classList.remove("inactive");
    document.getElementById("stu").classList.add("active");
    document.getElementById("passIn").value = "";
  }

  // SHOW/HIDE PASSWORD
  function togglePass() {
    let input = document.getElementById("passIn");
    input.type = (input.type === "password") ? "text" : "password";
  }

  // FORGOT PASSWORD
  function forgotPassword() {
    let answer = prompt("Forgot Password? Enter the current password if known, or leave blank to reset:");
    if (answer === localStorage.getItem("myPassword")) {
      alert("You already know your password: " + localStorage.getItem("myPassword"));
    } else {
      let newPass = prompt("Enter new password:");
      if (newPass) {
        localStorage.setItem("myPassword", newPass);
        alert("Password reset successfully!");
      }
    }
  }

  // CREATE PASSWORD (only if no password exists)
  function createPassword() {
    if (localStorage.getItem("myPassword")) {
      alert("Password already exists. Use Change Password instead.");
    } else {
      let newPass = prompt("Create new admin password:");
      if (newPass) {
        localStorage.setItem("myPassword", newPass);
        alert("Password created successfully!");
      }
    }
  }

  // CHANGE PASSWORD (while logged in)
  function changePassword() {
    let current = prompt("Enter current password:");
    if (current === localStorage.getItem("myPassword")) {
      let newPass = prompt("Enter new password:");
      if (newPass) {
        localStorage.setItem("myPassword", newPass);
        alert("Password changed successfully!");
      }
    } else {
      alert("Incorrect current password.");
    }
  }

  // Dummy functions for room management (to prevent errors)
 // function applyChanges() {
   // alert("Room changes applied (placeholder function).");
 // }

  //function loadPage(page) {
    //alert("Loading page: " + page + " (placeholder function).");
 // }
