$(document).ready(function () {
  let input = $(".message-form input, .message-form textarea");
  input.keyup(function () {
    if (input.val() == "") {
      $(this).css({
        "background-color": "#222222",
        color: "#fff",
        "box-shadow": "inset 0px 0px 35px black",
        "::placeholder": "#000",
      });
    } else {
      $(this).css({
        "background-color": "#fff",
        color: "#000",
        "box-shadow": "none",
        "::placeholder": "#000",
      });
    }
  });
});
