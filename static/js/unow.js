$(document).ready(function (){
  var unow_logo_elt = $(".find-courses .search .logo");
  unow_logo_elt.find("img").remove();
  unow_logo_elt.append("<img src='/static/themes/unow/images/logo-large.png' alt='Unow logo' />");
  unow_logo_elt.show();
});
