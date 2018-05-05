document.querySelector("#submit").addEventListener("click", validate);

function validate(event) {

  var name = document.querySelector("#name").value;
  var phone = document.querySelector("#phone").value;
  var email = document.querySelector("#email").value;
  var comment = document.querySelector("#comment").value;

  event.preventDefault();

  if (checkName(name) == false) {
    document.getElementById('name').style.border = '2px solid red';
    return false;
  } else if (checkPhone(phone) == false) {

    document.getElementById('phone').style.border = '2px solid red';
    return false;
  } else if (checkEmail(email) == false) {

    document.getElementById('email').style.border = '2px solid red';
    return false;
  } else if (checkComment(comment) == false) {
    document.getElementById('comment').style.border = '2px solid red';
    return false;

  } else {
    alert("Successful Submited");
  }

}

function checkName(name) {
  var nameRegex = /^[a-zA-Z ]{5,60}$/;
  if (nameRegex.test(name)) {
    document.getElementById('name').style.border = '';
    return true;
  } else {
    document.getElementById('errMessage').innerHTML = "Please Fill The Username";
    return false;
  }
}


function checkPhone(phone) {
  var mobileRegex = /^[789]\d{9}$/;
  if (mobileRegex.test(phone)) {
    document.getElementById('phone').style.border = '';
    return true;
  } else {
    document.getElementById('errMessage').innerHTML = "Please Fill The Phone ";
    return false;
  }
}

function checkEmail(email) {
  var emailRegex = /^[a-z0-9]+@[a-z0-9]*\.[a-z]+$/i;
  if (emailRegex.test(email)) {
    document.getElementById('email').style.border = '';
    return true;
  } else {
    document.getElementById('errMessage').innerHTML = "Please Fill TheEmail_ID ";
    return false;
  }
}

function checkComment(comment) {
  var commentRegex = /^[a-zA-Z]{0,250}$/;
  if (commentRegex.test(comment)) {
    document.getElementById('comment').style.border = '';
    return true;
  } else {
    document.getElementById('errMessage').innerHTML = "Please Fill  Comment ";
    return false;
  }
}
