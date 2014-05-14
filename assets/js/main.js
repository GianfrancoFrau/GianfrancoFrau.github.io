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
					'<li><a href="#" target="_blank">Github Pages</a></li>\n'+
					'<li><a href="#" target="_blank">Jekyll</a></li>\n'+
					'<li><a href="#" target="_blank">Bower</a></li>\n'+
					'<li><a href="#" target="_blank">Bootstrap</a></li>\n'+
					'<li><a href="#" target="_blank">JQuery</a></li>\n'+
					'<li><a href="#" target="_blank">Ionicons</a></li>\n'+
					'<li><a href="http://thepatternlibrary.com/" target="_blank">ThePatternLibrary</a></li>\n' +
					'</ul>'
	});
	$("#credits a").on("click", function(e) {
		e.preventDefault();
	})
});