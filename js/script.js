// $(document).ready(function() {
//     ('#addTask').click
// })
$(document).ready(function () {
    $('#addTask').on("click", function () {
        $('div#tasklist').append(
            "<div>" + $("#drag").val() + " <a class='delete'><i class='fas fa-user-check'></i></a></div>")
        })

    })
dragula([document.getElementById(tasklist)])
