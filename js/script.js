// Show current date and time
const dateTime = document.getElementById("dateTime");

function updateDateTime() {
  const now = new Date();
  dateTime.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Contact Form  Submit Alert
function alertMassage() {
  confirm("You Have Submitted Successfully");
}

// FAQ Page
var faqQuestion = document.getElementsByClassName("faqQuestion");
var i;
for (i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener("click", function () {
    this.classList.toggle("activefaq");

    var faqAnswer = this.nextElementSibling;
    if (faqAnswer.style.maxHeight) {
      faqAnswer.style.maxHeight = null;
    } else {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
  });
}
