var sinBtn = document.getElementById("sin");
var cosBtn = document.getElementById("cos");
var tanBtn = document.getElementById("tan");
var angle = document.getElementById("angle");
var answer = document.getElementById("answer");
var mathInput = angle.value;

var cocochanelle = {
	sin: Math.sin(mathInput)*Math.cos(mathInput) + Math.cos(mathInput)*Math.sin(mathInput),
	cos: Math.cos(mathInput)*Math.cos(mathInput) - Math.sin(mathInput)*Math.sin(mathInput),
	tan: Math.tan(mathInput) + Math.tan(mathInput) / 1 - Math.tan(mathInput)*Math.tan(mathInput)
};

function codeAddress(){
	var mathResult = 0;
	if (sinBtn.checked == true){
		document.body.style.backgroundColor = "lightgreen";
		mathResult = cocochanelle.sin;
	}
	else if (cosBtn.checked == true){
		document.body.style.backgroundColor = "pink";
		mathResult = cocochanelle.cos;
	} 
	else {
		document.body.style.backgroundColor = "lightblue";
		mathResult = cocochanelle.tan;
	};
	answer.innerHTML = mathResult;
}

window.onload = codeAddress();