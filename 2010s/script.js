function loadSection(sectionNumber){
	const all = document.querySelectorAll('.section');
  	all.forEach(section => {
    section.style.display = 'none';
    });

	const loadedSection = document.getElementById('section'+ sectionNumber);
	loadedSection.style.display = 'block';

	const colors = [
        '#ebf5ce', // placeholder
        '#87e68c', // section 1
        '#4fd19b', // section 2
        '#68dede', // section 3
        '#65c0db', // section 4
        '#879fd6', // section 5
        '#aba6e3'  // section 6
    ];

    document.body.style.backgroundColor = colors[sectionNumber] ;

	
}