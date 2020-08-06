//   Alert Banner

let alertBanner = document.getElementById("alert");

// Create HTML for the banner

alertBanner.innerHTML = 
`<div class="alert-banner">
   <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
   <p class= "alert-banner-close">x</p>
 </div>`

 alertBanner.addEventListener('click', e => {
  const element = e.target;
  if(element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
 });

//  Form Field, Send message

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out the user and message fields before sending")
  } else if (user.value === "") {
    alert("please fill out user field before sending")
  } else if (message.value === "") {
    alert("Please fill out message field before sending")
  } else {
    alert(`Message successfully sent to: ${user.value}`)
  }
});

