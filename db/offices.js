/* 
ZMENA NADPISU PODLA LANG
*/
let selected = localStorage.getItem('lang');
console.log(selected)
if (selected === 'slovak'){
	document.getElementsByTagName('h1')[0].innerHTML = 'Úrady';
}else{
	document.getElementsByTagName('h1')[0].innerHTML = 'Offices';
}

AOS.init();

let offices = [
    {
        name: 'Mestský úrad Levoča',
        enname: 'Municipal office',
        address: 'Námestie Majstra Pavla, 054 01 Levoča',
        maps: 'https://www.google.com/maps/place/Mestsk%C3%BD+%C3%BArad+Levo%C4%8Da/@49.0256527,20.5868477,16z/data=!4m8!1m2!2m1!1sOffices+levoca!3m4!1s0x473e468ad41fef43:0x7ebbdb25946e7696!8m2!3d49.0269923!4d20.5895474',
        phone: '053/451 40 01',
        web: 'http://www.levoca.sk/mestsky-urad.phtml?id5=11757&original_idm=60678',
        img: '/img/thumbnails/urad.png'
    },
    {
        name: 'Slovenská pošta Levoča',
        enname: 'Post Levoca',
        address: 'Námestie Majstra Pavla 39/39, 054 01 Levoča',
        maps: 'https://www.google.com/maps/place/Slovensk%C3%A1+po%C5%A1ta+Levo%C4%8Da/@49.0256527,20.5868477,16z/data=!4m8!1m2!2m1!1sOffices+levoca!3m4!1s0x0:0x43e76928712cb5f1!8m2!3d49.0254876!4d20.5876359',
        phone: '053/451 24 81',
        web: 'http://www.posta.sk/',
        img: '/img/thumbnails/posta.png'
    },
    {
        name: 'Mestská polícia',
        enname: 'Town police',
        address: 'Námestie Majstra Pavla, 054 01 Levoča',
        maps: 'https://www.google.com/maps/place/Mestsk%C3%A1+pol%C3%ADcia+Levo%C4%8Da/@49.0267126,20.5871736,17z/data=!3m1!4b1!4m5!3m4!1s0x473e468ad41fef55:0xc5e13f87cef6fb56!8m2!3d49.0267091!4d20.5893623',
        phone: '053/451 06 50',
        web: 'http://www.levoca.sk/mestska-policia.phtml?id5=12275',
        img: '/img/thumbnails/policia.png'
    }
]


let lang = localStorage.getItem('lang');
console.log(lang);

if(lang === 'slovak') {document.getElementById('db').innerHTML = `
${offices
	.map(function(office) {
		return `
        <div class='container' data-aos="fade-right">
        <img src='${office.img}' alt='Image of ${office.name}'class='image'>
        <h1 class='name'>${office.name}</h1>
        <div class='text'>
            <div class="row"> 
                <i class='fas fa-map-marker-alt'></i>
                <a href='${office.maps}' class='map-link' target='_blanck'>
                <p class='adress'>${office.address}</p>
                </a>
            </div>

            <div class="row">
                <i class="fas fa-phone"></i>
                 <p class='phone'>${office.phone}</p>
            </div>
        </div>
        <a class='web' href='${office.web}' target='_blanck'>Web</a>
    </div>
    `;
	})
	.join('')}
`;}else{document.getElementById('db').innerHTML = `
${offices
	.map(function(office) {
		return `
        <div class='container' data-aos="fade-right">
        <img src='${office.img}' alt='Image of ${office.enname}'class='image'>
        <h1 class='name'>${office.enname}</h1>
        <div class='text'>
            <div class="row"> 
                <i class='fas fa-map-marker-alt'></i>
                <a href='${office.maps}' class='map-link' target='_blanck'>
                <p class='adress'>${office.address}</p>
                </a>
            </div>

            <div class="row">
                <i class="fas fa-phone"></i>
                 <p class='phone'>${office.phone}</p>
            </div>
        </div>
        <a class='web' href='${office.web}' target='_blanck'>Web</a>
    </div>
    `;})
	.join('')}
`;}