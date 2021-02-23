$(document).ready(function () {
  let input = $(".formstyle");
  input.keyup(function () {
    for(let i = 0; i < input.length; i++ ) {
    if (input.eq(i).val() != "") {
      $(input.eq(i)).css({
        "background-color": "#fff",
        color: "#000",
        "box-shadow": "none",
        "::placeholder": "#000",
      });
    } else {
      $(input.eq(i)).css({
        "background-color": "#222222",
        color: "#fff",
        "box-shadow": "inset 0px 0px 35px black",
        "::placeholder": "#000",
      });
    }
  }
  });
});
