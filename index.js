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
  $("#txt-minifier-src").on("input", obj => {});
  $("#txt-minifier-dest").on("click", obj => {
    $(obj.target).trigger("select");
  });
  $("#txt-parser-src").on("input", obj => {
    $("#txt-parser-dest").val(
      $(obj.target)
        .val()
        .replace("!", "'")
    );
  });

  $("#txtDest").on("click", obj => {
    $("#txtDest").trigger("select");
  });
});
