console.log("1. something please work.");
//Adds button guess letters to row #buttons
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for(i=0; i<letters.length; i++){
	letterBtn = $("<button>");
	letterBtn.addClass("buttons");
	letterBtn.attr("value", letters[i]);
	letterBtn.html(letters[i]);
	$("#buttons").append(letterBtn);
}
console.log("2. something please work.");
// Generate a word from the list & add to row #word
// http://www.setgetgo.com/randomword/
var words = ['AANG', 'ZUKO', 'KATARA', 'TOPH', 'SOKKA', 'AZULA', 'IROH', 'APPA', 'OZAI', 'ZHAO', 'BUMI'];
var word = words[Math.floor(Math.random()*words.length)];
console.log(word);
var image;
image = $("<img>");
image.attr("class","resize");
image.attr("alt","Avatar picture");
switch(word){
	case "AANG":
		image.attr("src","assets/images/Aang.png");
		$("#picture").append(image);
		break;
	case "ZUKO":
		image.attr("src","assets/images/Zuko.png");
		$("#picture").append(image);
		break;
	case "KATARA":
		image.attr("src","assets/images/Katara.png");
		$("#picture").append(image);
		break;
	case "TOPH":
		image.attr("src","assets/images/Toph.jpg");
		$("#picture").append(image);
		break;
	case "SOKKA":
		image.attr("src","assets/images/Sokka.png");
		$("#picture").append(image);
		break;
	case "AZULA":
		image.attr("src","assets/images/Azula.png");
		$("#picture").append(image);
		break;
	case "IROH":
		image.attr("src","assets/images/Iroh.jpg");
		$("#picture").append(image);
		break;
	case "APPA":
		image.attr("src","assets/images/Appa.jpg");
		$("#picture").append(image);
		break;
	case "OZAI":
		image.attr("src","assets/images/Ozai.jpg");
		$("#picture").append(image);
		break;
	case "ZHAO":
		image.attr("src","assets/images/Zhao.jpg");
		$("#picture").append(image);
		break;
	case "BUMI":
		image.attr("src","assets/images/Bumi.png");
		$("#picture").append(image);
		break;
	default:
		break;
}
for(i=0; i<word.length; i++){
	letter = $("<div>");
	letter.addClass("word");
	letter.addClass("word-"+word[i]);
	letter.attr("value", word[i]);
	letter.html(word[i]);
	$("#word").append(letter);
		
}
console.log("3. something please work.");
// Get response from buttons
var guess;
var guessCounter = 0;
var guessBool = false;
var counter=0;
$(".buttons").on("click",function(){
	guess = $(this).attr('value');
	console.log(guess);
	// Make button unusable

	// check to see if a guess is correct
	for(i=0; i<word.length; i++){
		// if guess IS correct
		if(guess == word[i]){
			guessBool = true;
			$(".word-"+word[i]).addClass("visible");
			counter++;
			console.log(counter+" counter")
			// check if whole word is guessed
			if(word.length <= counter){
				console.log("word is guessed.");
				// refresh page
				alert("Congrats ... you did a thing.");
				setTimeout(
					function()
					{
						window.location.reload();
					},1000);
			}
		}
	}

	var health;
	// If guess is incorrect
	if(guessBool == false){
		guessCounter++;
		$("#guessCounter").html(guessCounter);
		health = $("#health").attr('value');
		health = health - 20;
		$("#health").attr("value", health);
		// If health hits 0 you die
		if(health == 0){
			alert("You died when the Fire Nation attacked.");
			setTimeout(
				function()
				{
					window.location.reload();
				},1000);
		}
		guessBool = false;
	}
	else{
		guessBool = false;
	}
});
console.log("4. something please work.");