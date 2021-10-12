function has_error(input, msg = "") {
  input.classList.add("error-class");

  var p_elem = input.parentElement;

  var span = document.createElement("span");
  span.classList.add("err-msg");
  span.innerText = msg;

  var img = document.createElement("img");
  img.classList.add("error-icon");
  img.src = "/images/icon-error.svg";

  if (p_elem.childElementCount == 1) {
    input.insertAdjacentElement("afterEnd", span);
    input.insertAdjacentElement("afterEnd", img);
  }
}

function success(input) {
  input.classList.remove("error-class");
  input.classList.add("success-class");

  input.nextElementSibling.classList.add("hide");
  input.nextElementSibling.nextElementSibling.classList.add("hide");

  var img = document.createElement("img");
  img.classList.add("success-icon");
  img.src = "/images/icon-success.svg";
  input.insertAdjacentElement("afterEnd", img);
}

function validate_email(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate_form() {
  var f_name = document.getElementById("f_name");
  var l_name = document.getElementById("l_name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (f_name.value == null || f_name.value == "") {
    has_error(f_name, "First Name cannot be empty");
  } else {
    success(f_name);
  }

  if (l_name.value == null || l_name.value == "") {
    has_error(l_name, "Last Name cannot be empty");
  } else {
    success(l_name);
  }

  if (email.value == null || email.value == "") {
    // email.parentNode.removeChild(email.parentNode.lastChild);
    has_error(email, "Email cannot be empty");
  } else {
    if (!validate_email(email.value)) {
      var p_elem = email.parentElement;
      p_elem.lastElementChild.remove();
      p_elem.lastElementChild.remove();
      has_error(email, "Looks like this is not an email");
    } else {
      success(email);
    }
  }

  if (password.value == null || password.value == "") {
    has_error(password, "Password cannot be empty");
  } else {
    success(password);
  }
}
