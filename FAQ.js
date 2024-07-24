function Copy_To_Сlipboard(target) {
    const temp_str = target.trim();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(temp_str).select();
    document.execCommand("copy");
    $temp.remove();
};

$(document).ready(function () {
  $(".accordeon_section").on("click", function () {
    const acc_body = $(this).find(".accordeon_body");
    if (acc_body.css("max-height") != "0px") {
      $(".accordeon_body").css("max-height", "0px");
      $(".arrow").html("&#5167");
      return;
    }
    if (acc_body.css("max-height") == "0px") {
      $(".accordeon_body").css("max-height", "0px");
      $(".arrow").html("&#5167");
      const ch_hei = $(this).find(".body_text").css("height");
      $(this).find(".accordeon_body").css("max-height", ch_hei);
      $(this).find(".arrow").html("&#5169");
      return;
    }
  });

  $("#copy").on("click", function () {
    const val = $(this).attr("title");
    Copy_To_Сlipboard(val);
  });
});
