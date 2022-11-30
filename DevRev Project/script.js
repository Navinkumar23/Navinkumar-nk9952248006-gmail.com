
  

  
  


  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
	//Button class code
	let buttons = document.querySelectorAll(".button-value");
	buttons.forEach((button) => {
	  //check if value equals innerText
	  if (value.toUpperCase() == button.innerText.toUpperCase()) {
		button.classList.add("active");
	  } else {
		button.classList.remove("active");
	  }
	});
  
	// select all cards
	let elements = document.querySelectorAll(".card");
	//loop through all cards
	elements.forEach((element) => {
	  //display all cards on 'all' button click
	  if (value == "all") {
		element.classList.remove("hide");
	  } else {
		console.log(value);
		//Check if element contains category class
		if (element.classList.contains(value)) {
		  //display element based on category
		  element.classList.remove("hide");
		} else {
		  //hide other elements
		  element.classList.add("hide");
		}
	  }
	});
  }
  

//Filter News
$('select#sort-news').change(function() {
	var filter = $(this).val()
	filterList(filter);
});

//News filter function
function filterList(value) {
	var list = $("#products .card");
	$(list).fadeOut("fast");
	if (value == "All") {
		$("#products").find(".card").each(function (i) {
  
			$(this).delay(200).slideDown("fast");
		});
	} else {
    
		//Notice this *=" <- This means that if the data-category contains multiple options, it will find them
		//Ex: data-category="Cat1, Cat2"
    	$("#products").find("article[data-category*=" + value + "]").each(function (i) {
			$(this).delay(200).slideDown("fast");
		});
	}
}