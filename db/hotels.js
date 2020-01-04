/* 
    DATABASE
*/

let hotels = [
    {
        name: 'Hotel u Leva ***',
        stars: '***',
        rating: '9.1',
        adress: 'NÁM. MAJSTRA PAVLA 25, 054 01 LEVOČA',
        maps: 'https://www.google.com/maps/place/Hotel+U+Leva/@49.032783,20.590877,15z/data=!4m8!3m7!1s0x0:0x4c88e8a0767b811f!5m2!4m1!1i2!8m2!3d49.0253985!4d20.5894422?hl=en-US',
        web: 'https://www.uleva.sk',
        img: 'https://r-cf.bstatic.com/images/hotel/max1024x768/710/71042801.jpg',
        prices: '43€ - 99€'
    }
]


console.log('Check')

/* 
    ACTUAL CODE
*/

document.getElementById('db').innerHTML= `
${hotels.map(function(hotel){
    return `
    <div class='container'>
        <img src='${hotel.img}' alt='Image of ${hotel.name}'class='image'>
        <h1 class='name'>${hotel.name}</h1>
        <a href='${hotel.maps}' class='map-link'
        <p class='adress'>${hotel.adress}</p></a>
        <p class='rating-line'> Booking.com rating: <span class='rating'>${hotel.rating}</span></p>
        <p class='prices'>${hotel.prices} <span class='disclaimer'>*ACTUAL PRICES MAY VARY</span></p>
        <a class='web' href='${hotel.web}'>Web</a>
    </div>
    `
}).join('')}
`