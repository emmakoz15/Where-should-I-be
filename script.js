$(document).ready(function () {

    //checks form validation
    $("#submitDay").on('click', function () {

        let selectedDay = $("#dayInput").val(); // Get the value of the input field
        if (selectedDay !== "A" && selectedDay !== "B" && selectedDay !== "C" && selectedDay !== "D" && selectedDay !== "E" && selectedDay !== "F" && selectedDay !== "G") {
            alert("Name must be filled out. Fill out letter Day");
        }

        $.ajax({
            type: "GET",
            url: 'https://api.npoint.io/88694135082d5959e891',
            dataType: 'json', // Corrected to string 'json'
            success: function (data) {
                let daySchedule = data.schedule.filter(classInfo => classInfo.days.includes(selectedDay)); // Fixed typo
                console.log(daySchedule);

                renderHTML(daySchedule);

            },

            error: function () { // Changed to function
                alert("An error occurred!");
            }
        });

        function renderHTML(daySchedule) { // Corrected function syntax
            let htmlString = ""; // Initialize the string
            
            // Construct table rows
            daySchedule.forEach(classInfo => {
                htmlString += `<tr>
                    <td>${classInfo.period}</td>
                    <td>${classInfo.class}</td>
                    <td>${classInfo.teacher}</td>
                    <td>${classInfo.room}</td>
                </tr>`;
            });

            // Append constructed HTML to the table body
            $("#scheduleList").empty().append(htmlString);
        }

        
        
    })
});



