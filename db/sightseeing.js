let monuments = [
    {
        name: 'Tower of Saint Jacob Church',
        address: 'Namestie Majstra Pavla 1',
        hours: 'Every 45 minutes from 11:15 to 19:15, available only during summer',
        prices: 'Free but you have to get reservation in tower before',
        img: 'https://i.imgur.com/iVAZAi0.png',
        maps: 'https://www.google.com/maps/place/Ve%C5%BEa+Baziliky+Sv.+Jakuba/@49.0264575,20.5882221,19z/data=!4m8!1m2!2m1!1sVeza+kostol+sv+jakuba!3m4!1s0x0:0x24d0760154c671ad!8m2!3d49.026439!4d20.5887559',
        web:'https://www.facebook.com/vezavlevoci/'
    },
    {
        name: 'Saint Jacob Church',
        address: 'Námestie Majstra Pavla 53',
        hours: '30 min lecture every hour, more details on web',
        prices: '2€ - 3€',
        img: 'https://i.imgur.com/R4U0CyC.png',
        maps: 'https://www.google.com/maps/place/Bazilika+sv.+Jakuba/@49.0263194,20.5870016,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ace115bfb:0xe9a3b36579a2def8!8m2!3d49.0263159!4d20.5891903',
        web:'http://www.chramsvjakuba.sk/'
    },
    {
        name: `Mary's hill`,
        address: 'Mariánska Hora 1118/2, 054 01 Levoča',
        hours: 'Only on masses',
        prices: '0€',
        img: 'https://i.imgur.com/t8SJvfY.png',
        maps: 'https://www.google.com/maps/place/Bazilika+Nav%C5%A1t%C3%ADvenia+Panny+M%C3%A1rie/@49.0433803,20.5955635,17z/data=!3m1!4b1!4m5!3m4!1s0x473e46ea62d69bf9:0xe8e53feacd0bd359!8m2!3d49.0433768!4d20.5977522',
        web:'http://rkc.levoca.sk/k_marianskahora.html'
    },
    {
        name: 'Townhall',
        address: 'Namestie Majstra Pavla 4',
        hours: '9AM - 5PM',
        prices: '0€ - 5€',
        img: 'https://i.imgur.com/Bggk7Td.png',
        maps: 'https://www.google.com/maps/place/Levo%C4%8Dsk%C3%A1+radnica/@49.0258093,20.5864753,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ab3b6b39f:0x72046a407ad26bcb!8m2!3d49.0258058!4d20.5886641',
        web:'http://www.spisskemuzeum.com/radnica.html'
    },
    {
        name: 'Thruzos house',
        address: 'Namestie Majstra Pavla 7',
        hours: 'Not available from inside',
        prices: '-€',
        img: 'https://i.imgur.com/x8xPeMr.png',
        maps: 'https://www.google.com/maps/place/Thurzov+Dom/@49.0270096,20.5884878,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ad945ab6f:0x56cce649500b9199!8m2!3d49.0270061!4d20.5906765',
        web:'http://www.vypadni.sk/sk/thurzov-dom-v-levoci'
    },
    {
        name: 'Cage of shame',
        address: 'Námestie Majstra Pavla 2/2',
        hours: 'Available all the time',
        prices: '-€',
        img: 'https://i.imgur.com/FIAulFz.png',
        maps: 'https://www.google.com/maps/place/Klietka+hanby/@49.0255177,20.5865101,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ab39323bd:0xd2d6863e0f0a8b70!8m2!3d49.0255142!4d20.5886988',
        web:'http://slovakianguide.com/sk/klietka-hanby-v-levoci'
    }
]


document.getElementById('db').innerHTML = `
${monuments
	.map(function(monument) {
		return `
    <div class='container'>
        <img src='${monument.img}' alt='Image of ${monument.name}'class='image'>
        <h1 class='name'>${monument.name}</h1>
        <div class='text'>
            <i class='fas fa-map-marker-alt'></i>
            <a href='${monument.maps}' class='map-link'
            <p class='adress'>${monument.address}</p></a>
            <p class='prices'><i class="fas fa-dollar-sign"></i> ${monument.prices} <span class='disclaimer'>*ACTUAL PRICES MAY VARY</span></p>
            <p class='clock'><i class="fas fa-clock"></i>${monument.hours}<span class='disclaimer'>*ACTUAL OPENING HOURS MAY VARY</span></p>
            <a class='web' href='${monument.web}'>Web</a>
        </div>
    </div>
    `;
	})
    .join('')}
    `;