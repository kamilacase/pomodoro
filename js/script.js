// $(document).ready(function() {
//     ('#addTask').click
// })
$(document).ready(function () {
    $('#addtask').on("click", function () {
        $('.todo-list-div ul').append(
            "<li>" + $("#drag").val() + " <a><<i class="fas fa-user-check"></i></a></li>";
        )
    })

})