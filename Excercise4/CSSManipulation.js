function border()
{
	var b = document.getElementById("BorderColor").value;
	var y = document.getElementById("color");
	if(b == "red")
	{
		y.style.borderColor = "red";
		alert("red border");
	}
	else if(b == "green")
	{
		y.style.borderColor = "green";
		alert("green border");
	}
	else if(b == "blue")
	{
		y.style.borderColor = "blue";
		alert("blue border");
	}
}

function background()
{
	var b = document.getElementById("BackgroundColor").value;
	var y = document.getElementById("color");
	if(b == "red")
	{
		y.style.backgroundColor = "red";
		alert("red background");
	}
	else if(b == "green")
	{
		y.style.backgroundColor = "green";
		alert("green background");
	}
	else if(b == "blue")
	{
		y.style.backgroundColor = "blue";
		alert("blue background");
	}
}

function rgbColor()
{
	var b = document.getElementById("rgbColor").value;
	var y = document.getElementById("color");
	if((b<0) || (b>255))
	{
		alert("number is not between 0-255!!!");
	}
	else
	{
		y.style.backgroundColor = b;
		y.style.borderColor = b;
	}
}