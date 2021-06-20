const minify = require("pg-minify");
const formatter = require("sql-formatter");

$(() => {
  console.log("by arashjp");

  $("#txtSrc").on("input", obj => {
    console.log();
    $("#txtDest").val(
      sqlFormatter.format(
        $("#txtSrc")
          .val()
          .trim()
      )
    );
  });
  $("#txt-minifier-src").on("input", obj => {
    $("#txt-minifier-dest").val(minify($(obj.target).val()));
  });
  $("#txt-minifier-dest").on("click", obj => {
    $(obj.target).trigger("select");
  });
  $("#txt-parser-src").on("input", obj => {
    $("#txt-parser-dest").val(
      $(obj.target)
        .val()
        .replaceAll("!", "'")
    );
  });
  $("#btn-parser-change-parse").on("click", obj => {
    $(".fa-exclamation").toggle();
    $(".fa-quote-right").toggle();
    $(obj.target).data("text-src", "'");
    $(obj.target).data("text-target", "!");
  });

  $("#txtDest").on("click", obj => {
    $("#txtDest").trigger("select");
  });
});
