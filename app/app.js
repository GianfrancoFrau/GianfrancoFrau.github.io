angular

.module('gf', ['ngMaterial'])

.run(function(){
	console.log('bootstrap');
})

.controller('appCtrl', function(){
	var ctrl = this;
	ctrl.sections = ["section1", "section2","section3","sections4"];
})

