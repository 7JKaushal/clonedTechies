console.log('sync done')
// Help me to minimize this code.

let third_name = document.getElementById('third_name')
let third_mail = document.getElementById('third_mail')
let four_name = document.getElementById('four_name')
let four_mail = document.getElementById('four_mail')
let five_name = document.getElementById('five_name')
let five_mail = document.getElementById('five_mail')

function two_members() {
	if(third_name.style.display === "block" ||
		third_mail.style.display === "block" ||
		four_name.style.display === 'block' || 
		four_mail.style.display === "block" || 
		five_name.style.display === "block" ||
		five_mail.style.display === "block"
		) {
		third_name.style.display = "none"
	third_mail.style.display = "none"
	four_name.style.display = "none"
	four_mail.style.display = "none"
	five_name.style.display = "none"
	five_mail.style.display = "none"
}

document.getElementById('member-two-name').focus()	
}

function three_members() {
	if(
		four_name.style.display === 'block' || 
		four_mail.style.display === "block" || 
		five_name.style.display === "block" ||
		five_mail.style.display === "block"
		) {
		four_name.style.display = "none"
	four_mail.style.display = "none"
	five_name.style.display = "none"
	five_mail.style.display = "none"
}

third_name.style.display = "block"
third_mail.style.display = "block"

document.getElementById('member-three-name').disabled = false
document.getElementById('member-three-mail').disabled = false

document.getElementById('member-two-name').focus()	
}

function four_members() {
	if(
		five_name.style.display === "block" ||
		five_mail.style.display === "block"
		) {
		five_name.style.display = "none"
	five_mail.style.display = "none"
}

third_name.style.display = "block"
third_mail.style.display = "block"
four_name.style.display = "block"
four_mail.style.display = "block"

document.getElementById('member-three-name').disabled = false
document.getElementById('member-four-name').disabled = false
document.getElementById('member-three-mail').disabled = false
document.getElementById('member-four-mail').disabled = false

document.getElementById('member-two-name').focus()	
}

function five_members() {	
	third_name.style.display = "block"
	third_mail.style.display = "block"
	four_name.style.display = "block"
	four_mail.style.display = "block"
	five_name.style.display = "block"
	five_mail.style.display = "block"

	document.getElementById('member-three-name').disabled = false
	document.getElementById('member-four-name').disabled = false
	document.getElementById('member-five-name').disabled = false
	document.getElementById('member-three-mail').disabled = false
	document.getElementById('member-four-mail').disabled = false
	document.getElementById('member-five-mail').disabled = false

	document.getElementById('member-two-name').focus()	
}


// Jquery functions
function other_department() {
	console.log(department.value)
	if (department.value === 'Other') {
		let invisible = document.getElementById('invisible')
		invisible.style.display = 'block'
	} else {
		invisible.style.display = "none"
	}
}

$('a[href$="#Modal"]').on( "click", function() {
	$('#Modal').modal('show');
});

function submit_button() {
	let terms =  document.getElementById('terms-conditions')

	if(!terms.checked) {
		alert('ACCEPT THE FUCKING TERMS')
	}
}


// Copied from Bootstrap's website
(function() {
	'use strict';
	window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    	form.addEventListener('submit', function(event) {
    		if (form.checkValidity() === false) {
    			event.preventDefault();
    			event.stopPropagation();
    		}
    		form.classList.add('was-validated');
    	}, false);
    });
}, false);
}
)();