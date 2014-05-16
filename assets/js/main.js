/**
*	JQuery controller
*/
$( function() {
	// Set email
	document.getElementById("cnt").href = "mailto:gianfranco@glaamy.com";
	// Enables credits popover
	$("#credits").popover({
		html: true,
		placement: 'top',
		container: 'body',
		title: 'Credits',
		content: 	'<ul id="credits-list">\n'+
					'<li><a href="https://github.com/" target="_blank">Hosted on Github</a></li>\n'+
					'<li><a href="http://jekyllrb.com/" target="_blank">Jekyll</a></li>\n'+
					'<li><a href="http://bower.io/" target="_blank">Bower</a></li>\n'+
					'<li><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a></li>\n'+
					'<li><a href="https://jquery.com/" target="_blank">JQuery</a></li>\n'+
					'<li><a href="http://ionicons.com/" target="_blank">Ionicons</a></li>\n'+
					'<li><a href="http://thepatternlibrary.com/" target="_blank">ThePatternLibrary</a></li>\n' +
					'</ul>'
	});
	$("[href='#']").on("click", function(e) {
		e.preventDefault();
	})
});