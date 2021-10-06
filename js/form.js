// var passowrd=document.getElementById('pswd');
// var cpassowrd=document.getElementById('cpswd');
// passowrd.type="password";
// cpassowrd.type="password";

var submitForm=()=>{
	var fname=document.getElementById('fname').value;
	if(fname.length!=0){
	document.getElementById('fname').style.border="3px solid green";
	}else{
		document.getElementById('fname').style.border="3px solid red";
	}
	
	var lname=document.getElementById('lname').value;
	if(lname.length!=0){
	document.getElementById('lname').style.border="3px solid green";
	}else{
		document.getElementById('lname').style.border="3px solid red";
	}
	
	var phone=document.getElementById('phone').value;
	if(phone.length==10){
	document.getElementById('phone').style.border="3px solid green";
	}else{
		document.getElementById('phone').style.border="3px solid red";
	}
	
	var email=document.getElementById('email').value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(mailformat)){
	document.getElementById('email').style.border="3px solid green";
	}else{
		document.getElementById('email').style.border="3px solid red";
	}


}

var show=(inpt)=>{
	var passowrd=document.getElementById('pswd');
	var cpassowrd=document.getElementById('cpswd');
	if(inpt==1){
		
		if(passowrd.type == 'password'){
			console.log('in');
	        passowrd.type="text"
	    }else{
	    	console.log('ot');
	        passowrd.type="password"
	    }
	}else{
	    if(cpassowrd.type == 'password'){
	        cpassowrd.type="text"
	    }else{
	        cpassowrd.type="password"
	    }
	}
}
