// Jquery document ready
$( function() {
	// Sets email address
	$("#cnt").attr('href', 'mailto:gianfranco@glaamy.com');
	// Init
	var skills = [],
		currentSkill = 0;
	$.getJSON("/skills.json", function( data ) {
		skills = data;
	}, function() {
		console.log("Error retrieving skills.json");
	});
	$(".skill a").each( function() {
		$(this).on("click", function() {
			currentSkill = $(this).data('sk');
		});
	});
	$("#skillsModal").on("show.bs.modal", function() {
		$("#skill-title").html( skills[currentSkill].name );
		$("#skill-body").html( skills[currentSkill].text );
	});
});