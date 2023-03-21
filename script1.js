/*document.querySelectorAll('a[href="'`${document.URL}"]`).forEach(function(elem){elem.className += 'active'});
*/

//currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]');
//currentLinks.forEach(function(link){
	//link.className += 'link1'});


/*
$(document).ready(function (){
	$('ul.ulist1 > li')
		.click(function (e){
			$('ul.ulist1 > li')
				.removeClass('active');
			$(this).addClass('active');
		})
})

$(document).ready(function() {
       $("a[href*='"+ window.location.href +"']").addClass('active');
    });
*/

//$("a[href*='"+ window.location.href +"']").addClass('active');


//1,2
/*
const result = document.getElementById("result");
		
let total = 0;
let selected = [];

function toggleSelection(number) {
	if (selected.includes(number)) {
		selected.splice(selected.indexOf(number), 1);
		total -= number;
	} else {
		selected.push(number);
		total += number;
	}
	
	result.textContent = "Result: " + total;
}
*/



function toggleSelection(element) {
  element.classList.toggle("selected");
  
  let total = 0;
  const selectedImages = document.querySelectorAll(".image.selected");
  
  for (let i = 0; i < selectedImages.length; i++) {
	total += parseInt(selectedImages[i].getAttribute("data-price"));
  }
  
  document.getElementById("result").textContent = "$" + total;
}

/*
4
function toggleSelection(element) {
element.classList.toggle("selected");

let total = 0;
const selectedImages = document.querySelectorAll(".image.selected");

for (let i = 0; i < selectedImages.length; i++) {
total += parseInt(selectedImages[i].getAttribute("data-price"));
}

document.getElementById("total").textContent = "$" + total;

const selectedImageCount = selectedImages.length;
document.getElementById("count").textContent = selectedImageCount;
}
*/

/*
function toggleSelection(element) {
element.classList.toggle("selected");

let total = 0;
const selectedImages = document.querySelectorAll(".selected");

for (let i = 0; i < selectedImages.length; i++) {
total += parseInt(selectedImages[i].getAttribute("data-price"));
}

document.getElementById("total").textContent = "$" + total;
}
*/
