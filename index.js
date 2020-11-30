$(() => {
  console.log("by arashjp");
  $("#txtSrc").val("");
  $("#txtSrc").on("input", (obj) => {
    console.log();
    $("#txtDest").val(sqlFormatter.format($("#txtSrc").val().trim()));
  });

  $("#txtDest").on("click", (obj) => {
    $("#txtDest").select();
  });
});
