function displayleft()
{
    const divid = document.getElementById("left_div_class4");
    if (divid.classList.contains("left_div_class4_show")) {
		divid.classList.remove("left_div_class4_show");
	}
	else
	{
		divid.classList.toggle("left_div_class4_show");
	}
}
