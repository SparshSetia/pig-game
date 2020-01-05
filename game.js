var m=1;

function NewGame() {
	document.getElementById('p1b').innerHTML=0;
	document.getElementById('p1c').innerHTML=0;
	document.getElementById('p2b').innerHTML=0;
	document.getElementById('p2c').innerHTML=0;
	document.getElementById('p').style.visibility='hidden';
	document.getElementById('p1a').style.visibility='visible';
	document.querySelector('.btn-roll').style.visibility='visible';
	document.querySelector('.btn-hold').style.visibility='visible';
	document.querySelector('#dice').style.visibility='visible';
}

function RollDice() {
	var dice=Math.floor(Math.random()*6)+1;
	document.getElementById('p').style.visibility='hidden';
	
	if(dice==1) {
		document.getElementById('dice').src="dice-1.png";
		document.getElementById('p').innerHTML="Sorry, you scored 1"
		document.getElementById('p').style.visibility='visible';
		

		if(m==1) {
			m=2;
			document.getElementById('p1b').innerHTML=0;
			document.getElementById('p2a').style.visibility='visible';
			document.getElementById('p1a').style.visibility='hidden';
		}
		else {
			m=1;
			document.getElementById('p2b').innerHTML=0;
			document.getElementById('p1a').style.visibility='visible';
			document.getElementById('p2a').style.visibility='hidden';
		}
	}

	else {
		var a;
		var b;
		if(m==1) {
			a=document.getElementById('p1b');
			b=parseInt(a.innerHTML)+parseInt(dice);
			document.getElementById('p1b').innerHTML=b;
		}

		if(m==2) {
			a=document.getElementById('p2b');
			b=parseInt(a.innerHTML)+parseInt(dice);
			document.getElementById('p2b').innerHTML=b;
		}

		if(dice==1){
			document.getElementById('dice').src="dice-1.png";
		}
		if(dice==2){
			document.getElementById('dice').src="dice-2.png";
		}
		if(dice==3){
				document.getElementById('dice').src="dice-3.png";
		}
		if(dice==4){
			document.getElementById('dice').src="dice-4.png";
		}
		if(dice==5){
			document.getElementById('dice').src="dice-5.png";
		}
		if(dice==6){
			document.getElementById('dice').src="dice-6.png";
		}
	}
}

function Hold() {
	var a;
	var b;
	var c;

	if(m==1) {
		a=document.getElementById('p1b');
		b=document.getElementById('p1c');
		c=parseInt(a.innerHTML)+parseInt(b.innerHTML);
		document.getElementById('p1c').innerHTML=c;
		document.getElementById('p1b').innerHTML=0;
		m=2;
		document.getElementById('p2a').style.visibility='visible';
		document.getElementById('p1a').style.visibility='hidden';
	}
	else {
		a=document.getElementById('p2b');
		b=document.getElementById('p2c');
		c=parseInt(a.innerHTML)+parseInt(b.innerHTML);
		document.getElementById('p2c').innerHTML=c;
		document.getElementById('p2b').innerHTML=0;
		m=1;
		document.getElementById('p1a').style.visibility='visible';
		document.getElementById('p2a').style.visibility='hidden';
	}

	if(c>=100)
	{
		if(m==1){
			m=2;
		}
		else {
			m=1;
		}

		document.getElementById('p').innerHTML="Player"+m+" "+"winner";
		document.getElementById('p').style.visibility='visible';
		document.querySelector('.btn-roll').style.visibility='hidden';
		document.querySelector('.btn-hold').style.visibility='hidden';
		document.querySelector('#dice').style.visibility='hidden';
		document.getElementById('p2a').style.visibility='hidden';
		document.getElementById('p1a').style.visibility='hidden';
	}
}