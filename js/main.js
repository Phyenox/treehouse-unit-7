//=============== Alert Banner ===================

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

//=========== Form Field, Send message ===============

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

// ================== Bell icon Notification ============

const bell = document.querySelector('.bell-icon');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.close');
popUp.style.display = 'none';

// Can Toggle bell to open and close notification
bell.addEventListener('click', () => {
  if (popUp.style.display === 'none') {
  popUp.style.display = 'block';
  } else {
    popUp.style.display = 'none'
  }
});

// Close button
close.addEventListener('click', () => {
  popUp.style.display = 'none';
});

// ===========  Local storage ==================

let settings = JSON.parse(localStorage.getItem('settings')) || [];
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const timezone = document.getElementById('timezone');
const email = document.getElementById('email-notifications');
const profile = document.getElementById('profile-settings');

fillSettings(settings);

// Save
save.addEventListener('click', () => {
  if (timezone.value === '') {
    alert('Please select a Timezone')
  } else {
    localStorage.removeItem('settings');
    settings = [];
    const settingsEx = {
      timeZone: timezone.options[timezone.selectedIndex].value,
      emailCheck: email.checked,
      profileCheck: profile.checked
    };
    settings.push(settingsEx);
    storeSettings(settings);
  }
});

// Cancel resets current settings
cancel.addEventListener('click', () => {
  localStorage.removeItem('settings');
  settings = [];
  fillSettings(settings);
  save.innerHTML = 'SAVE'
});

// Store saved settings into LocalStorage
function storeSettings(settings = []) {
  localStorage.setItem('settings', JSON.stringify(settings));
  save.innerHTML = 'SAVED'
}

function fillSettings(settings = []) {
  if (settings.length >=1) {
    email.checked = settings[0].emailCheck;
    profile.checked = settings[0].profileCheck;
    timezone.value = settings[0].timeZone;
  } else {
    email.checked = false;
    profile.checked = false;
    timezone.value = '0';
  }
}
// logging to console
console.log(localStorage);