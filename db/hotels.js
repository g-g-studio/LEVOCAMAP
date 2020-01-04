/* 
    DATABASE
*/

let hotels = [
    {
        name: 'Hotel u Leva ***',
        rating: '9.1',
        adress: 'NÁM. MAJSTRA PAVLA 25',
        maps: 'https://www.google.com/maps/place/Hotel+U+Leva/@49.032783,20.590877,15z/data=!4m8!3m7!1s0x0:0x4c88e8a0767b811f!5m2!4m1!1i2!8m2!3d49.0253985!4d20.5894422?hl=en-US',
        web: 'https://www.uleva.sk',
        img: 'https://r-cf.bstatic.com/images/hotel/max1024x768/710/71042801.jpg',
        prices: '43€ - 99€'
    },
    {
        name: 'Hotel Arkáda ***',
        rating: '9.2',
        adress: 'Namestie Majstra Pavla 26',
        maps: 'https://www.google.com/maps/place/Hotel+STELA/@49.027304,20.5870073,17z/data=!3m1!4b1!4m8!3m7!1s0x473e46f52ca1046d:0x850c2ebf93b0ed3c!5m2!4m1!1i2!8m2!3d49.027304!4d20.589196?hl=sks://www.google.com/maps/place/Hotel+Arkada/@49.025307,20.5870453,17z/data=!3m1!4b1!4m8!3m7!1s0x473e468aa59baf07:0x9413900393a17931!5m2!4m1!1i2!8m2!3d49.025307!4d20.589234?hl=en',
        web: 'http://www.arkada.sk/',
        img: 'https://www.arkada.sk/wp-content/uploads/2015/11/ARKADA3hviezdynova.jpg',
        prices: '37€ - 66€'
    },
    {
        name: 'Hotel Stela ****',
        rating: '8.7',
        adress: 'Namestie Majstra Pavla 55',
        maps: 'https://www.google.com/maps/place/Hotel+STELA/@49.027304,20.5870073,17z/data=!3m1!4b1!4m8!3m7!1s0x473e46f52ca1046d:0x850c2ebf93b0ed3c!5m2!4m1!1i2!8m2!3d49.027304!4d20.589196?hl=en',
        web: 'http://www.hotelstela.sk/',
        img: 'http://www.hotelstela.sk/wp-content/uploads/2018/01/1.jpg',
        prices: '52€ - 83€'
    },
    {
        name: 'Hotel Barbakan ***',
        rating: '8.4',
        adress: 'Košická 15',
        maps: 'https://www.google.com/maps/place/Barbakan/@49.0275529,20.5899101,17z/data=!3m1!4b1!4m8!3m7!1s0x473e468b195c93a1:0x21d9f37ecc6e88d9!5m2!4m1!1i2!8m2!3d49.0275529!4d20.5920988?hl=en',
        web: 'https://www.barbakan.sk/',
        img: 'http://www.barbakan.sk/userfiles/image/gallery/hotel01h.jpg',
        prices: '32€ - 85€'
    },

]
/* 
    ACTUAL CODE
*/

document.getElementById('db').innerHTML= `
${hotels.map(function(hotel){
    return `
    <div class='container'>
        <img src='${hotel.img}' alt='Image of ${hotel.name}'class='image'>
        <h1 class='name'>${hotel.name}</h1>
        <i class='fas fa-map-marker-alt'></i>
        <a href='${hotel.maps}' class='map-link'
        <p class='adress'>${hotel.adress}</p></a>
        <p class='rating-line'><i class="fas fa-star"></i>Booking.com rating: <span class='rating'>${hotel.rating}</span></p>
        <p class='prices'> <i class="fas fa-dollar-sign"></i> ${hotel.prices} <span class='disclaimer'>*ACTUAL PRICES MAY VARY</span></p>
        <a class='web' href='${hotel.web}'>Web</a>
    </div>
    `
}).join('')}
`