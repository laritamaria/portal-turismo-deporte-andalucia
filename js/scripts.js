$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['#0F2980', '#ff0000', '#c1c1c1', 'transparent', 'transparent'],
		anchors:['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
		menu: '.main-nav ul',
	});
});