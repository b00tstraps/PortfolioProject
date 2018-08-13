$("form").submit(function(event) {
  event.preventDefault();
  if ($('#fname').val() === "") {
      alert("Please enter a first name before sending.");
    } else if ($('#lname').val() === "") {
      alert("Please enter a last name before sending.");
    } else if ($('#phone').val() === "") {
      alert("Please enter a phone number before sending.");
    } else if ($('#email').val() === "") {
      alert("Please enter an e-mail address before sending.");
    } else {
      alert("Sent.");
    }
});
