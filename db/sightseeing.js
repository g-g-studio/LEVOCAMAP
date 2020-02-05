/* 
ZMENA NADPISU PODLA LANG
*/
let selected = localStorage.getItem('lang');
console.log(selected);
if (selected === 'slovak') {
	document.getElementsByTagName('h1')[0].innerHTML = 'Pamiatky';
} else {
	document.getElementsByTagName('h1')[0].innerHTML = 'Sightseeing';
}

let monuments = [
	{
		enname: 'Tower of Saint Jacob Church',
		name: 'Veža na kostole Sv.Jakuba',
		address: 'Namestie Majstra Pavla 1',
		enhours: 'Every 45 minutes from 11:15AM to 9:15PM, available only during summer',
		hours: 'Každých 45 minút od 11:15 do 19:15, dostupné iba počas leta',
		enprices: 'Free but you have to get reservation in tower before',
		prices: 'Zadarmo, ale musíte sa predtým vo veži registrovať',
		img: '/img/thumbnails/tower.png',
		maps:
			'https://www.google.com/maps/place/Ve%C5%BEa+Baziliky+Sv.+Jakuba/@49.0264575,20.5882221,19z/data=!4m8!1m2!2m1!1sVeza+kostol+sv+jakuba!3m4!1s0x0:0x24d0760154c671ad!8m2!3d49.026439!4d20.5887559',
		web: 'https://www.facebook.com/vezavlevoci/',
		audio: '/audio/audioplaceholder.mp3'
	},
	{
		enname: 'Saint Jacob Church',
		name: 'Kostol Sv.Jakuba',
		address: 'Námestie Majstra Pavla 53',
		enhours: '30 min lecture every hour, more details on web',
		hours: '30 minútové vstupy každú hodinu, viac detialov nájdete na webe kostola',
		prices: '2€ - 3€',
		img: '/img/thumbnails/church.png',
		maps:
			'https://www.google.com/maps/place/Bazilika+sv.+Jakuba/@49.0263194,20.5870016,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ace115bfb:0xe9a3b36579a2def8!8m2!3d49.0263159!4d20.5891903',
		web: 'http://www.chramsvjakuba.sk/',
		audio: '/audio/audioplaceholder.mp3'
	},
	{
		enname: `Mary's hill`,
		name: 'Mariánska hora',
		address: 'Mariánska Hora 1118/2, 054 01 Levoča',
		enhours: 'Only on masses',
		hours: 'Vstup iba na omše',
		prices: '0€',
		img: '/img/thumbnails/marianska hora.png',
		maps:
			'https://www.google.com/maps/place/Bazilika+Nav%C5%A1t%C3%ADvenia+Panny+M%C3%A1rie/@49.0433803,20.5955635,17z/data=!3m1!4b1!4m5!3m4!1s0x473e46ea62d69bf9:0xe8e53feacd0bd359!8m2!3d49.0433768!4d20.5977522',
		web: 'http://rkc.levoca.sk/k_marianskahora.html',
		audio: '/audio/audioplaceholder.mp3'
	},
	{
		enname: 'Townhall',
		name: 'Radnica',
		address: 'Namestie Majstra Pavla 4',
		enhours: '9AM - 5PM',
		hours: '9:00 - 17:00',
		prices: '0€ - 5€',
		img: '/img/thumbnails/townha;;.png',
		maps:
			'https://www.google.com/maps/place/Levo%C4%8Dsk%C3%A1+radnica/@49.0258093,20.5864753,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ab3b6b39f:0x72046a407ad26bcb!8m2!3d49.0258058!4d20.5886641',
		web: 'http://www.spisskemuzeum.com/radnica.html',
		audio: '/audio/audioplaceholder.mp3'
	},
	{
		enname: 'Thruzos house',
		name: 'Thurzov dom',
		address: 'Namestie Majstra Pavla 7',
		enhours: 'Not available from inside',
		hours: 'Thurzov dom nie je dostupný zvnútra',
		prices: '-€',
		img: '/img/thumbnails/thuryo.png',
		maps:
			'https://www.google.com/maps/place/Thurzov+Dom/@49.0270096,20.5884878,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ad945ab6f:0x56cce649500b9199!8m2!3d49.0270061!4d20.5906765',
		web: 'http://www.vypadni.sk/sk/thurzov-dom-v-levoci',
		audio: '/audio/audioplaceholder.mp3'
	},
	{
		enname: 'Cage of shame',
		name: 'Klietka hanby',
		address: 'Námestie Majstra Pavla 2/2',
		enhours: 'Available all the time',
		hours: 'Dostupné v každý čas',
		prices: '-€',
		img: '/img/thumbnails/shame.png',
		maps:
			'https://www.google.com/maps/place/Klietka+hanby/@49.0255177,20.5865101,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ab39323bd:0xd2d6863e0f0a8b70!8m2!3d49.0255142!4d20.5886988',
		web: 'http://slovakianguide.com/sk/klietka-hanby-v-levoci',
		audio: '/audio/audioplaceholder.mp3'
	}
];

let lang = localStorage.getItem('lang');
console.log(lang);

if (lang === 'slovak') {
	document.getElementById('db').innerHTML = `
${monuments
		.map(function(monument) {
			return `
        <div class='container animated zoomIn'>
        <img src='${monument.img}' alt='Image of ${monument.name}'class='image'>
        <h1 class='name'>${monument.name}</h1>
        <div class='text'>
            <div class="row"> 
                <i class='fas fa-map-marker-alt'></i>
                <a href='${monument.maps}' class='map-link'>
                <p class='adress'>${monument.address}</p>
                </a>
            </div>

            <div class="row">
                <i class="fas fa-dollar-sign"></i> 
                <p class='prices'>${monument.prices} <span class='disclaimer'>*SKUTOČNÉ CENY SA MÔŽU LÍŠIŤ</span></p>
            </div>

            <div class="row">
                <i class="fas fa-clock"></i>
                <p class='clock'>${monument.hours}<span class='disclaimer'>*SKUTOČNÉ OTVÁRACIE HODINY SA MÔŽU LÍŠIŤ</span></p>
            </div>	
		</div>	
		<a href="${monument.audio}">
			<i class="fas fa-volume-up"></i>
		</a>
		<a class='web' href='${monument.web}'>Web</a>	
    </div>
    `;
		})
		.join('')}
    `;
} else {
	document.getElementById('db').innerHTML = `
    ${monuments
		.map(function(monument) {
			return `
        <div class='container animated zoomIn'>
        <img src='${monument.img}' alt='Image of ${monument.enname}'class='image'>
        <h1 class='name'>${monument.enname}</h1>
        <div class='text'>
            <div class="row"> 
                <i class='fas fa-map-marker-alt'></i>
                <a href='${monument.maps}' class='map-link'>
                <p class='adress'>${monument.address}</p>
                </a>
            </div>

            <div class="row">
                <i class="fas fa-dollar-sign"></i> 
                <p class='prices'>${monument.prices} <span class='disclaimer'>*ACTUAL PRICES MAY VARY</span></p>
            </div>

            <div class="row">
                <i class="fas fa-clock"></i>
                <p class='clock'>${monument.enhours}<span class='disclaimer'>*ACTUAL OPENING HOURS MAY VARY</span></p>
			</div>
			<a href="${monument.audio}">
				<i class="fas fa-volume-up"></i>
			</a>
        </div>
        <a class='web' href='${monument.web}'>Web</a>
    </div>
    `;
		})
		.join('')}
    `;
}
