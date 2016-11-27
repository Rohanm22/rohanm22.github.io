function askQuestions(){


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else {
		console.log('User is a child');
	}


	if (firstName.toLowerCase().trim() == 'General' && lastName.toLowerCase() != 'Assembly'){		
		console.log('Hello General!');
	} else {
		console.log ('Hello');
	}	


	var faveColour = prompt ('What is your favourite colour?');

	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'yellow' ||
		faveColour == 'blue') {

		$ ('h1').css('color', faveColour);
	}
}

//When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

		//When the user clicks an h3
		$('h3').on('click', function () {

				//Toggle the next element
				$(this).next().slideToggle(1000);


		});

});
