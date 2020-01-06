let museums = [
	{
		name: 'Spišské múzeum (Spis Museum)',
		address: 'Námestie Majstra Pavla 40',
		maps:
			'https://www.google.com/maps/place/SNM-Spi%C5%A1sk%C3%A9+m%C3%BAzeum/@49.025308,20.5855076,17z/data=!4m12!1m6!3m5!1s0x473e468ab448839b:0x620bbe15731a1eb3!2zU3BpxaFza8O9IGhyYWQgLSBTTk0gU3BpxaFza8OpIG3DunpldW0!8m2!3d49.0259869!4d20.5888335!3m4!1s0x0:0xe793e861e84fdcab!8m2!3d49.0253715!4d20.5875991',
		hours: '9AM - 5PM',
		phone: '053/451 27 86',
		web: 'https://www.snm.sk/?spisske-muzeum-o-muzeu',
		img: 'https://www.muzeum.sk/portals_pictures/i_004932/i_4932287.jpg'
	},
	{
		name: 'Dom Majstra Pavla (House of Master Pavol)',
		address: 'Námestie Majstra Pavla 20',
		maps:
			'https://www.google.com/maps/place/SNM+-+Dom+Majstra+Pavla/@49.0258907,20.5876159,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x473e468ab448839b:0x620bbe15731a1eb3!2zU3BpxaFza8O9IGhyYWQgLSBTTk0gU3BpxaFza8OpIG3DunpldW0!8m2!3d49.0259869!4d20.5888335!3m4!1s0x473e468ab95c3ef1:0xc520e1cb7a117a0c!8m2!3d49.0258872!4d20.5898046',
		hours: '8AM - 5PM',
		phone: '053/451 24 49',
		web: 'https://www.snm.sk/?dom-majstra-pavla-uvodna-stranka',
		img: 'https://mapio.net/images-p/39429148.jpg'
	},
	{
		name: 'Múzeum špeciálneho školstva v Levoči',
		address: 'Námestie Majstra Pavla 28',
		maps:
			'https://www.google.com/maps/place/M%C3%BAzeum+%C5%A1peci%C3%A1lneho+%C5%A1kolstva+v+Levo%C4%8Di/@49.0251002,20.5869094,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x473e468ab448839b:0x620bbe15731a1eb3!2zU3BpxaFza8O9IGhyYWQgLSBTTk0gU3BpxaFza8OpIG3DunpldW0!8m2!3d49.0259869!4d20.5888335!3m4!1s0x473e468aa7025495:0x79585ad51532b2f0!8m2!3d49.0250967!4d20.5890981',
		hours: '8AM - 4PM',
		phone: '053/451 28 63',
		web: 'https://msslevoca.sk/?lang=en',
		img: 'https://msslevoca.sk/wp-content/uploads/2017/05/stala-expozicia-ludske-zmysly-08.jpg'
	}
];

document.getElementById('db').innerHTML = `
${museums
	.map(function(museum) {
		return `
		<div class='container'>
		<img src='${museum.img}' alt='Image of ${museum.name}'class='image'>
		<h1 class='name'>${museum.name}</h1>
		<div class='text'>
            <div class="row"> 
				<i class='fas fa-map-marker-alt'></i>
            	<a href='${museum.maps}' class='map-link'>
				<p class='adress'>${museum.address}</p></a>
                </a>
            </div>

			<div class="row">
				<i class="fas fa-clock"></i>
				<p class='clock'>${museum.hours}<span class='disclaimer'>*ACTUAL OPENING HOURS MAY VARY</span></p>
            </div>

			<div class="row">
			<i class="fas fa-phone"></i>
			<p class='phone'>${museum.phone}</p>
            </div>
        </div>
        <a class='web' href='${museum.web}'>Web</a>
    </div>
    `;
	})
	.join('')}
`;
