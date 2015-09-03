var Contact = {}

Contact.parseName = function(str) {
   // str is a string containing the name and phone number separated by comma
   // extract and return the name from the str argument
   // str will always contain only one comma character
   var partsOfStr = str.split(',');   
   var contact = {
   		name : partsOfStr[0]
   };
   return contact.name;
}

Contact.parseNumber = function(str) {
   // str is a string containing the name and phone number separated by comma
   // extract and return the name from the str argument
   // str will always contain only one comma character
   var partsOfStr = str.split(',');   
   var contact = {
   		phoneNumber : partsOfStr[1]
   };
   return contact.phoneNumber;
}

Contact.parseNumber = function(str) {
   // str is a string containing the name and phone number separated by comma
   // extract and return the name from the str argument
   // str will always contain only one comma character
   var partsOfStr = str.split(',');   
   var contact = {
	  name: partsOfStr[0],
	  number: partsOfStr[1]
	};
   return contact.number;
}

Contact.createContact = function(str) {
   // str is a string containing the name and phone number separated by comma
   // extract and return the name from the str argument
   // str will always contain only one comma character
   var partsOfStr = str.split(',');   
   var contact = {
	  name: partsOfStr[0],
	  number: partsOfStr[1]
	};
   return contact;
}





module.exports = Contact;