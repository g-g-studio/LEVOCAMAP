/* 

MULTI LANGUAGE 

*/

//Select default from local storage
let selected = localStorage.getItem('lang');
if (selected === 'slovak'){
	document.getElementById("sk").setAttribute("selected", true);
}
let date = new Date();


//Funkcia na zmenu jazyka pri lang selecte
document.getElementById('langselector').addEventListener('change', changelang)

function changelang () {
	let selector = document.getElementById('langselector').value
	if (selector === 'slovak') {
		document.getElementById('hotel').innerHTML = 'Hotely'
		document.getElementById('museum').innerHTML = 'Múzea'
		document.getElementById('office').innerHTML = 'Úrady'
		document.getElementById('restaurant').innerHTML = 'Reštaurácie'
		document.getElementById('sightseeing').innerHTML = 'Pamiatky'
		document.getElementsByTagName('h1')[0].innerHTML = 'MAPA LEVOČE';
		console.clear()
		console.log(`Vitajte na našej stránke. Je ${date.getHours()}:${date.getMinutes()}. Prajeme Vám pekný deň a príjemný zážitok pri spoznávaní Levoče.`);
		console.log('-M&Š');

	}else{
		document.getElementById('hotel').innerHTML = 'Hotels'
		document.getElementById('museum').innerHTML = 'Museums'
		document.getElementById('office').innerHTML = 'Offices'
		document.getElementById('restaurant').innerHTML = 'Restaurants'
		document.getElementById('sightseeing').innerHTML = 'Sightseeing'
		document.getElementsByTagName("h1")[0].innerHTML = 'MAP OF LEVOČA';
		console.clear()
		console.log(`Welcome to our site. Local time is ${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}. We wish you pleasent day and nice experience when exploring Levoča.`);
		console.log('-M&Š');
    }
    

    //Pridanie jazyka do local storage
    localStorage.setItem('lang', selector);
}