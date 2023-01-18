document.addEventListener('DOMContentLoaded', function() {
	// SPLIDE CONFIG //
    new Splide('#image-slider-1', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1000: {
                perPage: 2,
            },
            600: {
                perPage: 1,
            },
        },
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
        keyboard: false,
        drag: false,
        interval: 4000,
    }).mount();

    new Splide('#image-slider-2', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1000: {
                perPage: 2,
            },
            600: {
                perPage: 1,
            },
        },
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
        keyboard: false,
        drag: false,
        interval: 4000,
    }).mount();


    // ANNOYING POP-UP IMG RANDOMISER //
    getRandomImage();

    function getRandomImage() {
        const popImgArray = ['Clone_O_Matic_01.png', 'Headshot_01.png', 'Firearm_Kiosk_01.png', 'Infinimo_01.png', 'STec_02.png', 'Graffiti_Ad.png', 'Mayor_Ad_01.png', 'Munke_01.png', 'Pocket_Rocket_01.png'];
        const popImgPath = "./Images/";

        var img = popImgArray[Math.floor(Math.random() * popImgArray.length)];
        document.getElementById("random-img").innerHTML = '<img src="' + popImgPath + img + '" alt="annoying pop-up">';
        document.close();

		setTimeout(function() {
			$('#exampleModalCenter').modal('show');
		}, 2000); //wait 2 seconds and open advert
        
        setTimeout(function() {
			$('#exampleModalCenter').modal('hide');

			img = popImgArray[Math.floor(Math.random() * popImgArray.length)];
			document.getElementById("random-img").innerHTML = '<img src="' + popImgPath + img + '" alt="annoying pop-up">';
        	document.close();
            $('#exampleModalCenter').modal('show');
        }, 30000); //wait 30 seconds then reopen with different advert
    }
});