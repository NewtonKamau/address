	// business logic
	function Contact(first, last) {
	    this.firstName = first;
	    this.lastName = last;
	    this.address = [];
	}
	contact.prototype.fullName = function() {
	    return this.firstName + "" + this.lastName;

	}

	function address(street, city, county) {
	    this.street = street;
	    this.city = city;
	    this.county = county;
	}
	var
	function contact(first, last) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.address = address[];
	}
	var
	function address(street, city, county) {
	    this.street = street;
	    this.city = city;
	    this.county = county;
	}
	// user interface logic
	$(document).ready(function() {
	    $("form#new-contact").submit(function(event) {
	        event.preventDefault();

	        var inputtedFirstName = $("input#new-first-name").val();
	        var inputtedLastName = $("input#new-last-name").val();

	        var newContact = new Contact(inputtedFirstName, inputtedLastName);
	        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
	        $("ul#contacts").append("<li><span class='contact'>" + newContact.lastName + "</span></li>");

	        $("input#new-first-name").val("");
	        $("input#new-last-name").val("");
	    });

	    $(".contact").last().click(function() {
	        $("#show-contact").show();
	        $("#show-contact h2").text(newContact.firstName);
	        $(".first-name").text(newContact.firstName);
	        $(".last-name").text(newContact.lastName);
	    });



	})
