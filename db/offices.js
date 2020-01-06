let offices = [
    {
        name: 'Mestský úrad Levoča',
        address: 'Námestie Majstra Pavla, 054 01 Levoča',
        maps: 'https://www.google.com/maps/place/Mestsk%C3%BD+%C3%BArad+Levo%C4%8Da/@49.0256527,20.5868477,16z/data=!4m8!1m2!2m1!1sOffices+levoca!3m4!1s0x473e468ad41fef43:0x7ebbdb25946e7696!8m2!3d49.0269923!4d20.5895474',
        phone: '053/451 40 01',
        web: 'http://www.levoca.sk/mestsky-urad.phtml?id5=11757&original_idm=60678',
        img: 'https://i.imgur.com/Ncjkkor.png'
    },
    {
        name: 'Slovenská pošta Levoča (Post)',
        address: 'Námestie Majstra Pavla 39/39, 054 01 Levoča',
        maps: 'https://www.google.com/maps/place/Slovensk%C3%A1+po%C5%A1ta+Levo%C4%8Da/@49.0256527,20.5868477,16z/data=!4m8!1m2!2m1!1sOffices+levoca!3m4!1s0x0:0x43e76928712cb5f1!8m2!3d49.0254876!4d20.5876359',
        phone: '053/451 24 81',
        web: 'http://www.posta.sk/',
        img: 'https://i.imgur.com/0xtfI41.png'
    },
    {
        name: 'Mestská polícia (Town Police)',
        address: 'Námestie Majstra Pavla, 054 01 Levoča',
        maps: 'https://www.google.com/maps/place/Mestsk%C3%A1+pol%C3%ADcia+Levo%C4%8Da/@49.0267126,20.5871736,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ad41fef55:0xc5e13f87cef6fb56!8m2!3d49.0267091!4d20.5893623',
        phone: '053/451 06 50',
        web: 'http://www.levoca.sk/mestska-policia.phtml?id5=12275',
        img: 'https://i.imgur.com/Ua11jdN.png'
    }
]

document.getElementById('db').innerHTML = `
${offices
	.map(function(office) {
		return `
    <div class='container'>
        <img src='${office.img}' alt='Image of ${office.name}'class='image'>
        <div class='text'>
            <h1 class='name'>${office.name}</h1>
            <i class='fas fa-map-marker-alt'></i>
            <a href='${office.maps}' class='map-link'
            <p class='adress'>${office.address}</p></a>
            <p class='phone'><i class="fas fa-phone"></i>${office.phone}</p>
            <a class='web' href='${office.web}'>Web</a>
        </div>
    </div>
    `;
	})
	.join('')}
`;