// $(selector).Action()

// document.getElementById("h1").innerHTML;

// ($("#h1").html("Hello World!"));
$("#btn").click(function ()
{
var firstNameValue = $("#firstName").val();
var lastNameValue = $("#lastName").val();
var fullName = firstNameValue+" "+lastNameValue;
// alert(fullNameValue);
    $("#fullName").val(fullName);
});
