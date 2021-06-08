function doThis()
{
	var mpy = prompt('Miles per year?');
	var cpg = prompt('Cost per gallon?');
  var mpg = [12,17,26,29];
	var out = '';
	for (var i = 0; i < 4; i++)
	{
		out += eycFunc(mpy, cpg, mpg[i]);		
	}
	document.getElementById('output').innerHTML = out;
}

function eycFunc(in_mpy, in_cpg, in_mpg)
{
	var eyc = in_mpy / in_mpg * in_cpg;
	return '<p>To drive a car with a MPG rating of ' + in_mpg + ' for ' + in_mpy + ' miles per year at $' + in_cpg + ' per gallon it would cost $'  + eyc + '.</p>';
}