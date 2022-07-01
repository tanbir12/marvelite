//  function for the scroll bar
function scrolldown(){
	let sc = document.getElementById('menubar');
	sc.scrollBy({
  top: 240,
  behavior: 'smooth'
});}
function scrollup(){
	let sc = document.getElementById('menubar');
	sc.scrollBy({
  top: -240,
  behavior: 'smooth'
});}


// function for thanos magic 
function magic(){
	let audio = document.getElementById('snapsong').play();
	let avenger = document.getElementById('maindiv').style.display;
	if(avenger=="" || avenger=="none"){
		document.getElementById('avengerbody').style.opacity = "0.0";
		}
	else{
		document.getElementById('maindiv').style.opacity = "0.0";
	}
	setTimeout(function() {alert('The Page Destroyed. Reload The Page.')}, 6000);
}


// function for changing the main div
function changebg(){
	let avenger = document.getElementById('maindiv').style.display;
	if(avenger=="" || avenger=="none"){
		document.getElementById('avengerbody').style.display = "none";
		document.getElementById('maindiv').style.display = "flex";
		document.getElementById('himg2').style.borderBottom = "3px solid red";
	}
	else{
		document.getElementById('avengerbody').style.display = "flex";
		document.getElementById('maindiv').style.display = "none";
		document.getElementById('himg2').style.borderBottom = "3px solid #68d5f0b5";
	}
}


// function for changing content div
function show1(){
	document.getElementById('cont1').style.display = "flex";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show2(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "flex";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show3(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "flex";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show4(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "flex";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show5(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "flex";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}


function show6(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "flex";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show7(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "flex";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show8(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "flex";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "none";
}

function show9(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "flex";
  document.getElementById('cont10').style.display = "none";
}

function show10(){
	document.getElementById('cont1').style.display = "none";
	document.getElementById('cont2').style.display = "none";
	document.getElementById('cont3').style.display = "none";
	document.getElementById('cont4').style.display = "none";
	document.getElementById('cont5').style.display = "none";
	document.getElementById('cont6').style.display = "none";
  document.getElementById('cont7').style.display = "none";
	document.getElementById('cont8').style.display = "none";
	document.getElementById('cont9').style.display = "none";
  document.getElementById('cont10').style.display = "flex";
}







