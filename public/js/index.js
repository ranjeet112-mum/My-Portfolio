const handleNavClick = (e) => {
	// const activeEle = document.querySelector(".active");
	// activeEle.classList.remove("active");
	// activeEle.disabled = false;
	// const newActiveEle = document.querySelector(`#${e.srcElement.id}`);
	// newActiveEle.classList.add("active");
	// newActiveEle.disabled = true;
	console.log(e.srcElement.id === "start" ? "index" : e.srcElement.id);
	location.href = `./${
		e.srcElement.id === "start" ? "index" : e.srcElement.id
	}.html`;
};
