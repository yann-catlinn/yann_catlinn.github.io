
//here im including the effect of tabs in about me in the main

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$('.skill').each(function(){
  var percent = $(this).find('.percent').attr('data-percent');
  var width = 'calc(' + percent + ' - 20px)';
  if (percent == '100%') {
	  $(this).find('.percent').css({ width: width, 'border-radius': '5px' });
  } else {
    $(this).find('.percent').css({ width: width });
  }
});