// JavaScript Document
function TurnOut(ChangeDiv)
{
	for (var i=1;i<=17;i++)
{
	if(("id"+i) == ChangeDiv)
	{
		document.getElementById("id"+i).style.display = 'block';
	}	
	else
	{
		document.getElementById("id"+i).style.display = 'none';
	}
}
	
	
}