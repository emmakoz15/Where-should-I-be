$(document).ready(function () {
    
    //checks form validation
    $("#submitDay").on('click', function (event) {

        let selectedDay = $("#dayInput").val(); // Get the value of the input field
        if (selectedDay !== "A" && selectedDay !== "B" && selectedDay !== "C" && selectedDay !== "D" && selectedDay !== "E" && selectedDay !== "F" && selectedDay !== "G") {
            alert("Name must be filled out. Fill out letter Day");
        } else {
        }
    });




    //end of documentgetready
});
