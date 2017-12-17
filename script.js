const DEVICEWIDTH = window.innerWidth;

function desktopNavigationBar() {
	let a = document.querySelector(".navigation").offsetWidth;
	let b = document.querySelectorAll(".list-item");
	for (let i=1; i<b.length; i++) {
		b[i].style.width = (a/(b.length-1)-10) + "px";
	}	
}
desktopNavigationBar();

function mobileNavigationBar() {
	let a = document.querySelector("#mobile");
	let b = document.querySelectorAll(".desktop");
	a.addEventListener("click", function() {
		for (let i=0;i<b.length;i++) {
			if (b[i].style.display === "none" || b[i].style.display == "")
				b[i].style.display = "block";
			else 
				b[i].style.display = "none";
		}
	});
}
mobileNavigationBar();