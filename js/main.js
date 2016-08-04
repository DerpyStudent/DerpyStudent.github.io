

$('#submit').on('click', function(e){
	e.preventDefault();
	sessionStorage.location = $('#location').val();
	sessionStorage.subject = $('#subject').val();
	sessionStorage.mood = $('#mood').val();

	window.location.href = "dreampage.html";
})

if (sessionStorage.location == 'mountain'){
	// alert('yo');
	$('#pic1').addClass('mountain1');
}
else if (sessionStorage.location == 'beach'){
	// alert('yo');
	$('#pic1').addClass('beach1');
}




// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (0 - 4 + 1)) + 0;


if (sessionStorage.subject == 'puppies'){
	// alert('yo');
	$('#pic2').addClass('puppy1');
}
else if (sessionStorage.subject == 'kittens'){
	// alert('yo');
	$('#pic2').addClass('kitten1');
}