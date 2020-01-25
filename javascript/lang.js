/* 

MULTI LANGUAGE 

*/

//Select default from local storage
let selected = localStorage.getItem('lang');
console.log(selected)
if (selected === 'slovak'){
	document.getElementById("sk").setAttribute("selected", true);

}


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
	}else{
		document.getElementById('hotel').innerHTML = 'Hotels'
		document.getElementById('museum').innerHTML = 'Museums'
		document.getElementById('office').innerHTML = 'Offices'
		document.getElementById('restaurant').innerHTML = 'Restaurants'
		document.getElementById('sightseeing').innerHTML = 'Sightseeing'
    }
    

    //Pridanie jazyka do local storage
    localStorage.setItem('lang', selector);
	console.log(localStorage.getItem('lang'))
	
}
