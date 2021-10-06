// var passowrd=document.getElementById('pswd');
// var cpassowrd=document.getElementById('cpswd');
// passowrd.type="password";
// cpassowrd.type="password";

var submitForm = () => {
	var fname = document.getElementById('fname').value;
	if (fname.length != 0) {
		document.getElementById('fname').style.border = "3px solid green";
	} else {
		document.getElementById('fname').style.border = "3px solid red";
		document.getElementById('error_fname').innerHTML = "First name cannot be empty"
	}

	var lname = document.getElementById('lname').value;
	if (lname.length != 0) {
		document.getElementById('lname').style.border = "3px solid green";
	} else {
		document.getElementById('lname').style.border = "3px solid red";
		document.getElementById('error_lname').innerHTML = "Last name cannot be empty"
	}

	var phone = document.getElementById('phone').value;
	if (phone.length == 0) {
		document.getElementById('phone').style.border = "3px solid red";
		document.getElementById('error_phone').innerHTML = "Phone Number cannot be empty"
	}
	else {
		if (phone.length == 10) {

			document.getElementById('phone').style.border = "3px solid green";
		} if (phone.length < 10) {
			document.getElementById('phone').style.border = "3px solid red";
			document.getElementById('error_phone').innerHTML = "Phone Number cannot be less then 10 digits."
		}
	}

	var email = document.getElementById('email').value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.length == 0) {
		document.getElementById('email').style.border = "3px solid red";
		document.getElementById('error_email').innerHTML = "Email cannot be empty."
	}
	else {
		if (email.match(mailformat)) {
			document.getElementById('email').style.border = "3px solid green";
		} else {
			document.getElementById('email').style.border = "3px solid red";
			document.getElementById('error_email').innerHTML = "Email format is not valid."
		}
	}

	var pswd = document.getElementById('pswd').value;
	if (pswd.length == 0) {
		document.getElementById('pswd').style.border = "3px solid red";
		document.getElementById('error_pswd').innerHTML = "Password cannot be empty."
	}
	else {
		if (pswd.length < 8) {
			document.getElementById('pswd').style.border = "3px solid red";
			document.getElementById('error_pswd').innerHTML = "Password cannot be less then 8 characters long."
		} else {
			document.getElementById('pswd').style.border = "3px solid green";
		}
	}

	var cpswd = document.getElementById('cpswd').value;
	
	// if (pswd.length == 0) {
	// 	document.getElementById('cpswd').style.border = "3px solid red";
	// 	document.getElementById('error_pswd').innerHTML = "CPassword cannot be empty."
	// }
	// else {
		if (cpswd != pswd) {
			document.getElementById('cpswd').style.border = "3px solid red";
			document.getElementById('error_cpswd').innerHTML = "Confirm password mis-match with input password"
			
		} else if(cpswd.length==0){
			document.getElementById('cpswd').style.border = "3px solid redk";
		}
	// }
	return false;
}

var show = (inpt) => {
	var passowrd = document.getElementById('pswd');
	var cpassowrd = document.getElementById('cpswd');
	if (inpt == 1) {

		if (passowrd.type == 'password') {
			console.log('in');
			passowrd.type = "text"
		} else {
			console.log('ot');
			passowrd.type = "password"
		}
	} else {
		if (cpassowrd.type == 'password') {
			cpassowrd.type = "text"
		} else {
			cpassowrd.type = "password"
		}
	}
}
