const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

document
.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

const savedUser =
JSON.parse(
localStorage.getItem("user")
);

if(

(username === "heri" &&
password === "123")

||

(savedUser &&
username === savedUser.username &&
password === savedUser.password)

){

localStorage.setItem(
"username",
username
);

alert("Login berhasil!");

window.location.href =
"../index.html";

}else{

alert("Username atau password salah!");

}

});


document
.getElementById("registerForm")
?.addEventListener("submit", function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

localStorage.setItem(
"user",
JSON.stringify({
username,
email,
password
})
);

alert("Register berhasil!");

window.location.href =
"index.html";

});
