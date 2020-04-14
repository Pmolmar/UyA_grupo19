$(document).ready(function() {
  $("#button").click(function getData() {
    var postId = $("#postid").val()
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments?",
      type: "GET",
      async: true,
      data: `postId=${postId}`,
      success: function (reply) {
        for (var i in reply) {
          var data = $("<p></p>")
          data.text(`POSTID: ${reply[i].postId} |------| ID: ${reply[i].id} |------| NAME: ${reply[i].name} |------| EMAIL: ${reply[i].email} |------| BODY: ${reply[i].body}`)
          $(".information").append(data)
        }
      },
      error: function() {
        console.log("Warning!!")
      }
    })
  })
})

