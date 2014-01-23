'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		var str = "EZ Rocks";
		$('.jumbotron h1').text(str);
		$("#testjs").text("Please wait...");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");

	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

function projectClick(e) { 
    // prevent the page from reloading 
    console.log("Project clicked");
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    $(this).css("background-color", "#6EFFDE");
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}