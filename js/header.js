function displaymenu(liid){
	const ulclass = document.querySelectorAll(".header_menu_ul_class2_show")
	for (let i = 0; i < ulclass.length; i++) {
		if(ulclass[i].id != liid)
		{
			ulclass[i].classList.remove("header_menu_ul_class2_show");
		}
	}
	const ulid = document.getElementById(liid);
	if (ulid.classList.contains("header_menu_ul_class2_show")) {
		ulid.classList.remove("header_menu_ul_class2_show");
	}
	else
	{
		ulid.classList.toggle("header_menu_ul_class2_show");
	}
}
window.onclick = function(e) {
	if (!e.target.matches('.header_menu_a_class2'))
	{
		const ulclass = document.querySelectorAll(".header_menu_ul_class2_show")
		for (let i = 0; i < ulclass.length; i++) {
			ulclass[i].classList.remove("header_menu_ul_class2_show");
		}
	}

}