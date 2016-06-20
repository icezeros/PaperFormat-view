var edge = require('edge');
var hello = edge.func(function() {
	/*
	    async (input) => { 
	        return "CSharp welcomes " + input.ToString(); 
	    }
	*/
});

hello('Node.js', function(error, result) {
	if (error) throw error;
	console.log(result);
});