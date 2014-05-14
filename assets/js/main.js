/**
*	JQuery controller
*/
$( function() {
	// Enables credits popover
	$("#credits a").popover({
		html: true,
		placement: 'top',
		container: 'body',
		title: 'Credits',
		content: 	'<ul id="credits-list">\n'+
					'<li><a href="#">Github Pages</a></li>\n'+
					'<li><a href="#">Jekyll</a></li>\n'+
					'<li><a href="#">Bower</a></li>\n'+
					'<li><a href="#">Bootstrap</a></li>\n'+
					'<li><a href="#">JQuery</a></li>\n'+
					'<li><a href="#">Ionicons</a></li>\n'+
					'</ul>'
	});
	$("#credits a").on("click", function(e) {
		e.preventDefault();
	})
});