	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value !== 'Admin') {
		email.style.border = "1px solid red";
		email_error.style.display = "none";
		email.focus();
		return false;
	}
	if (password.value !== 'Password1') {
		password.style.border = "1px solid red";
		pass_error.style.display = "none";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value === 'Admin') {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}else {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
	}
}
function pass_Verify(){
	if (password.value === 'Password1') {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	} else {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
	}
}

