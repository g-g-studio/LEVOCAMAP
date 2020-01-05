let restaurants = [
	{
		name: 'Restauracia u Leva',
		adress: 'NÁM. MAJSTRA PAVLA 25',
		rating: '4.5',
		hours: '10AM - 10PM',
		img: 'https://r-cf.bstatic.com/images/hotel/max1024x768/710/71042801.jpg',
		web: 'https://www.uleva.sk',
		prices: '€€ - €€€',
		maps:
			'https://www.google.com/maps/place/Hotel+U+Leva/@49.032783,20.590877,15z/data=!4m8!3m7!1s0x0:0x4c88e8a0767b811f!5m2!4m1!1i2!8m2!3d49.0253985!4d20.5894422?hl=en-US'
	},
	{
		name: 'Restauracia Kupecka Basta',
		adress: 'Kukucinova 2, Levoča 054 01',
		rating: '4.5',
		hours: '10AM - 10PM',
		img: 'https://m.smedata.sk/api-media/media/image/sme/3/28/2801333/2801333_1200x.jpeg?rev=3',
		web: 'http://www.kupeckabasta.sk/',
		maps:
			'https://www.google.com/maps/place/Kupeck%C3%A1+Ba%C5%A1ta/@49.0261489,20.5930484,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468a59f74ef5:0x45e232282d474e2e!8m2!3d49.0261489!4d20.5930484',
		prices: '€€ - €€€'
	},
	{
		name: 'Restauracia u 3 Apostolov',
		adress: 'Námestie Majstra Pavla 11',
		rating: '4.1',
		hours: '9AM - 8PM',
		img: 'https://lh5.googleusercontent.com/p/AF1QipONIuk6v5x0DFHTXAzZdJqvtsQ_h9qLHbqJZipl=w408-h306-k-no',
		web: 'http://www.restauraciau3apostolov.sk',
		prices: '€€',
		maps:
			'https://www.google.com/maps/place/Re%C5%A1taur%C3%A1cia+u+3+Apo%C5%A1tolov+-+Levo%C4%8Da/@49.0265673,20.590413,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ac4cf4a6f:0xbe5279deb994a9b6!8m2!3d49.0265673!4d20.590413'
	},
	{
		name: 'Reštuarácia Pracháreň',
		adress: 'Hradby 3143, 054 01 Levoča',
		rating: '4.3',
		hours: '!NOT DECLARED!',
		img: 'https://www.pracharen.sk/uploads/slideshow/1/slide3.jpg',
		web: 'https://www.pracharen.sk',
		prices: '€€ - €€€',
		maps:
			'https://www.google.com/maps/place/Prach%C3%A1re%C5%88+Levo%C4%8Da/@49.029226,20.587844,17z/data=!4m8!3m7!1s0x473e46f48d14b007:0xf3cf6652343883a3!5m2!4m1!1i2!8m2!3d49.029226!4d20.587844'
	},
	{
		name: 'Reštuarácia U Janusa',
		adress: 'Kláštorská 22, 054 01 Levoča',
		rating: '4.5',
		hours: '12PM - 10PM',
		img: 'https://www.kiskatravel.sk/swift_data/source/objekty/obrazky/11/2233_107381_64455749.jpg',
		web: 'http://ujanusa.sk/',
		prices: '€',
		maps:
			'https://www.google.com/maps/place/U+Janusa/@49.0269773,20.587821,17z/data=!3m1!4b1!4m8!3m7!1s0x473e46f53b8f23bd:0x4e9adfb739d5a7c0!5m2!4m1!1i2!8m2!3d49.0269773!4d20.587821'
	},
	{
		name: 'Stela',
		adress: 'Namestie Majstra Pavla 55',
		rating: '4',
		hours: '!NOT DECLARED!',
		img: 'http://www.hotelstela.sk/wp-content/uploads/2018/01/1.jpg',
		web: 'http://www.hotelstela.sk/',
		prices: '€€ - €€€',
		maps:
			'https://www.google.com/maps/place/Hotel+STELA/@49.027304,20.5870073,17z/data=!3m1!4b1!4m8!3m7!1s0x473e46f52ca1046d:0x850c2ebf93b0ed3c!5m2!4m1!1i2!8m2!3d49.027304!4d20.589196?hl=en'
	},
	{
		name: 'Arkada',
		adress: 'Namestie Majstra Pavla 26',
		rating: '3',
		hours: '!NOT DECLARED!',
		img: 'https://www.arkada.sk/wp-content/uploads/2015/11/ARKADA3hviezdynova.jpg',
		web: 'http://www.arkada.sk/',
		prices: '€€ - €€€',
		maps:
			'https://www.google.com/maps/place/Hotel+STELA/@49.027304,20.5870073,17z/data=!3m1!4b1!4m8!3m7!1s0x473e46f52ca1046d:0x850c2ebf93b0ed3c!5m2!4m1!1i2!8m2!3d49.027304!4d20.589196?hl=sks://www.google.com/maps/place/Hotel+Arkada/@49.025307,20.5870453,17z/data=!3m1!4b1!4m8!3m7!1s0x473e468aa59baf07:0x9413900393a17931!5m2!4m1!1i2!8m2!3d49.025307!4d20.589234?hl=en'
	},
	{
		name: 'Restauracia Slovenka',
		adress: 'Námestie Majstra Pavla 6/6',
		rating: '3.6',
		hours: '10AM - 9PM',
		img:
			'https://lh3.googleusercontent.com/CMFQk0_O-DDXlTBCaZmP9TDMwL8PkFRjWNUX8sE-TRJpLtHyKmElsCAGUlMCqTGmhyB50bDD=w768-h432-p-no-v0',
		web: 'https://restauraciaslovenka.business.site/',
		prices: '€€ - €€€',
		maps:
			'https://www.google.com/maps/place/Re%C5%A1taur%C3%A1cia+Slovenka/@49.027669,20.5904705,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468b292cbb39:0xd4dc0fbbbd7f1cc1!8m2!3d49.027669!4d20.5904705'
	}
];
document.getElementById('db').innerHTML = `
${restaurants
	.map(function(restaurant) {
		return `
    <div class='container'>
        <img src='${restaurant.img}' alt='Image of ${restaurant.name}'class='image'>
        <h1 class='name'>${restaurant.name}</h1>
        <div class='text'>
            <i class='fas fa-map-marker-alt'></i>
            <a href='${restaurant.maps}' class='map-link'
            <p class='adress'>${restaurant.adress}</p></a>
            <p class='rating-line'><i class="fas fa-star"></i>GOOGLE.COM RATING: <span class='rating'>${restaurant.rating}</span></p>
            <p class='prices'><i class="fas fa-dollar-sign"></i> ${restaurant.prices} <span class='disclaimer'>*ACTUAL PRICES MAY VARY</span></p>
            <p class='clock'><i class="fas fa-clock"></i>${restaurant.hours}<span class='disclaimer'>*ACTUAL OPENING HOURS MAY VARY</span></p>
            <a class='web' href='${restaurant.web}'>Web</a>
        </div>
    </div>
    `;
	})
	.join('')}
`;
