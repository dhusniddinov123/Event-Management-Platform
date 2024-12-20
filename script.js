// Handle registration form submission
const registrationForm = document.getElementById("registrationForm");
const participantList = document.getElementById("participantList");
const confirmation = document.getElementById("confirmation");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const selectedEvent = document.getElementById("event").value;

  // Add participant to the list
  const listItem = document.createElement("li");
  listItem.textContent = `${name} - ${selectedEvent}`;
  participantList.appendChild(listItem);

  // Show confirmation message
  confirmation.textContent = `Successfully registered ${name} for ${selectedEvent}!`;
  confirmation.style.color = "green";

  // Reset the form
  registrationForm.reset();
});
