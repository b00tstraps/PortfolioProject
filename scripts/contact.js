/* $('form').submit(function(event) {
  event.preventDefault();
  if ($('#firstname').val() === "") {
      alert("Please enter a first name before sending.");
    } else if ($('#lastname').val() === "") {
      alert("Please enter a last name before sending.");
    } else if ($('#phone').val() === "") {
      alert("Please enter a phone number before sending.");
    } else if ($('#email').val() === "") {
      alert("Please enter an e-mail address before sending.");
    } else {
      alert("Sent.");
    }
}); */


$("form").validate({
  rules: {
    firstname: "required",
    lastname: "required",
    phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    firstname: "Please enter your first name",
    lastname: "Please enter your last name",
    phone: "Please enter your phone number",
    email: {
      required: "In order to submit form, you will need to enter a valid e-mail",
      email: "Your e-mail address must be in the correct format. Ex. x@x.com"
    }
  }
});
