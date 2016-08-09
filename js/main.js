

$('#submit').on('click', function(e){
	e.preventDefault();
	sessionStorage.location = $('#location').val();
	sessionStorage.subject = $('#subject').val();
	sessionStorage.mood = $('#mood').val();

	window.location.href = "dreampage.html";
})

if (sessionStorage.location == 'mountain'){
	// alert('yo');


	$('#pic1').removeClass('mountain3');
	$('#pic1').addClass('mountain1');

	setInterval(function(){
		if ($('#pic1').hasClass("mountain1")) {
			$('#pic1').attr("class","imgd mountain2");
		}
		else if ($('#pic1').hasClass("mountain2")) {
			$('#pic1').attr("class","imgd mountain3");
		}
		else {
			$('#pic1').attr("class","imgd mountain1");
		}
	},4000);

			//////////////////////////////////////////
			
			// setTimeout(function(){
			// 	$('#pic1').removeClass('mountain3');
			// 	$('#pic1').addClass('mountain1');

			// },12000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('mountain1');
			// 	$('#pic1').addClass('mountain2');

			// },16000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('mountain2');
			// 	$('#pic1').addClass('mountain3');

			// },20000);
			
		}

		else if (sessionStorage.location == 'beach'){
			// alert('yo');
			$('#pic1').removeClass('beach3');
			$('#pic1').addClass('beach1');
			


			setInterval(function(){
		if ($('#pic1').hasClass("beach1")) {
			$('#pic1').attr("class","imgd beach2");
		}
		else if ($('#pic1').hasClass("beach2")) {
			$('#pic1').attr("class","imgd beach3");
		}
		else {
			$('#pic1').attr("class","imgd beach1");
		}
	},4000);



			
			//////////////////////////////////////////
			
			// setTimeout(function(){
			// 	$('#pic1').removeClass('beach1');
			// 	$('#pic1').addClass('beach1');

			// },12000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('beach1');
			// 	$('#pic1').addClass('beach2');

			// },16000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('beach2');
			// 	$('#pic1').addClass('beach3');

			// },20000);
			
		}


		else if (sessionStorage.location == 'city'){
	// alert('yo');
	// alert('yo');
	$('#pic1').removeClass('city3');
	$('#pic1').addClass('city1');




		setInterval(function(){
		if ($('#pic1').hasClass("city1")) {
			$('#pic1').attr("class","imgd city2");
		}
		else if ($('#pic1').hasClass("city2")) {
			$('#pic1').attr("class","imgd city3");
		}
		else {
			$('#pic1').attr("class","imgd city1");
		}
	},4000);

	

			//////////////////////////////////////////
			
			// setTimeout(function(){
			// 	$('#pic1').removeClass('city3');
			// 	$('#pic1').addClass('city1');

			// },12000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('city1');
			// 	$('#pic1').addClass('city2');

			// },16000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('city2');
			// 	$('#pic1').addClass('city3');

			// },20000);
			
		}

		else if (sessionStorage.location == 'country'){
	// alert('yo');
	$('#pic1').removeClass('country3');
	$('#pic1').addClass('country1');

	
		setInterval(function(){
		if ($('#pic1').hasClass("country1")) {
			$('#pic1').attr("class","imgd country2");
		}
		else if ($('#pic1').hasClass("country2")) {
			$('#pic1').attr("class","imgd country3");
		}
		else {
			$('#pic1').attr("class","imgd country1");
		}
	},4000);



	
			//////////////////////////////////////////
			
			// setTimeout(function(){
			// 	$('#pic1').removeClass('country3');
			// 	$('#pic1').addClass('country1');

			// },12000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('country1');
			// 	$('#pic1').addClass('country2');

			// },16000);

			// setTimeout(function(){
			// 	$('#pic1').removeClass('country2');
			// 	$('#pic1').addClass('country3');

			// },20000);
			
		}





// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (0 - 4 + 1)) + 0;


if (sessionStorage.subject == 'puppies'){
	// alert('yo');

	$('#pic2').removeClass('puppy3');
	$('#pic2').addClass('puppy1');


		setInterval(function(){
		if ($('#pic2').hasClass("puppy1")) {
			$('#pic2').attr("class","imgd puppy2");
		}
		else if ($('#pic2').hasClass("puppy2")) {
			$('#pic2').attr("class","imgd puppy3");
		}
		else {
			$('#pic2').attr("class","imgd puppy1");
		}
	},5000);

	

			///////////////////////////////////
			// setTimeout(function(){
			// 	$('#pic2').removeClass('puppy3');
			// 	$('#pic2').addClass('puppy1');

			// },15000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('puppy1');
			// 	$('#pic2').addClass('puppy2');

			// },20000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('puppy2');
			// 	$('#pic2').addClass('puppy3');

			// },25000);


		}
		else if (sessionStorage.subject == 'kittens'){
	// alert('yo');
	$('#pic2').removeClass('kitten3');
	$('#pic2').addClass('kitten1');

		setInterval(function(){
		if ($('#pic2').hasClass("kitten1")) {
			$('#pic2').attr("class","imgd kitten2");
		}
		else if ($('#pic2').hasClass("kitten2")) {
			$('#pic2').attr("class","imgd kitten3");
		}
		else {
			$('#pic2').attr("class","imgd kitten1");
		}
	},5000);

	

			///////////////////////////////////
			// setTimeout(function(){
			// 	$('#pic2').removeClass('kitten3');
			// 	$('#pic2').addClass('kitten1');

			// },15000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('kitten1');
			// 	$('#pic2').addClass('kitten2');

			// },20000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('kitten2');
			// 	$('#pic2').addClass('kitten3');

			// },25000);
		}
		else if (sessionStorage.subject == 'girl'){
	// alert('yo');
	$('#pic2').removeClass('female3');
	$('#pic2').addClass('female1');


		setInterval(function(){
		if ($('#pic2').hasClass("female1")) {
			$('#pic2').attr("class","imgd female2");
		}
		else if ($('#pic2').hasClass("female2")) {
			$('#pic2').attr("class","imgd female3");
		}
		else {
			$('#pic2').attr("class","imgd female1");
		}
	},5000);

	

			///////////////////////////////////
			// setTimeout(function(){
			// 	$('#pic2').removeClass('female3');
			// 	$('#pic2').addClass('female1');

			// },15000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('female1');
			// 	$('#pic2').addClass('female2');

			// },20000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('female2');
			// 	$('#pic2').addClass('femalee3');

			// },25000);
		}
		else if (sessionStorage.subject == 'guy'){
	// alert('yo');
	$('#pic2').removeClass('male3');
	$('#pic2').addClass('male1');


		setInterval(function(){
		if ($('#pic2').hasClass("male1")) {
			$('#pic2').attr("class","imgd male2");
		}
		else if ($('#pic2').hasClass("male2")) {
			$('#pic2').attr("class","imgd male3");
		}
		else {
			$('#pic2').attr("class","imgd male1");
		}
	},5000);


	

			///////////////////////////////////
			// setTimeout(function(){
			// 	$('#pic2').removeClass('male3');
			// 	$('#pic2').addClass('male1');

			// },15000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('male1');
			// 	$('#pic2').addClass('male2');

			// },20000);

			// setTimeout(function(){
			// 	$('#pic2').removeClass('male2');
			// 	$('#pic2').addClass('male3');

			// },25000);
		}





		if (sessionStorage.mood == 'sad'){
	// alert('yo');
	$('.music').html( '<iframe width="50%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/145062340&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;visual=false"></iframe>');
}

else if (sessionStorage.mood == 'happy'){
	$('.music').html( '<iframe width="50%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/63072415&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;visual=false"></iframe>');
}


////cody is a bum