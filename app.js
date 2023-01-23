var bgColor = document.querySelector(".background_color");
var colorCode = document.querySelector(".color_code");
var generateBtn = document.querySelector(".gnrt_btn");

generateBtn.onclick = () => {
	// alert()

	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
	bgColor.style.backgroundColor = "#" + randomColor;
	colorCode.innerHTML = "#" + randomColor;
};
