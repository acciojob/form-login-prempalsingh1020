// function getFormvalue() {
//     //Write your code here;
// 	e.preventDefault();
// 	let form  = document.forms["form1"];

// 	let fn = form.fname.value.trim();
// 	let ln = form.lname.value.trim();

// 	let full_name = `${fn} ${ln}`.trim();

// 	if(full_name==""){
// 	 alert("please enter your nmae");	
// 	}
// 	else{
// 		alert(full_name);
// 	}
// 	return false;

// }

function getFormvalue() {
    let form = document.forms["form1"];

    let fn = form.fname.value.trim();
    let ln = form.lname.value.trim();

    let full_name = `${fn} ${ln}`.trim();

    if (full_name === "") {
        alert("Please enter your name");
    } else {
        alert(full_name);
    }

    return false; 
}

