// $(document).ready(function() {
//     ('#addTask').click
// })
$(document).ready(function () {
    $('#addTask').on("click", function () {
        $('div#container').append(
            "<div class='zobi'>" + $("#drag").val() + " <a class='delete'><i class='fas fa-user-check'></i></a></>")
        })

    })
dragula([document.getElementById("container")])

