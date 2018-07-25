function quiz(){
	
	//initialize all possible results to 0
	var option1=0;
	var option2=0;
	var option3=0;
	
	//format questions like this (increment personality types based on answer)
	var ans= prompt("what food do you like a. pizza, b. fruit, or c. candy?");
	if (ans=== "a"){
		option1++;
	}
	if (ans=== "b"){
		option2++;
	}
	if (ans=== "c"){
		option3++;
	}

	//determine which option has the most answer points
	if (option1>option2 && option1>option3){
		alert("You are type 1");
	} else if (option2>option1 && option2>option3 ){
		alert("You are type 2");
	} else if (option3>option2 && option3>option1){
		alert("You are type 3");
	} else {
		alert("Sorry, it was a tie");
	}


}
