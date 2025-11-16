// Function to handle the button click
function showSpecialWish() {
    const mainMessageElement = document.getElementById('main-message');
    const buttonElement = document.getElementById('wish-button');
    const timerElement = document.getElementById('countdown-timer');

    // Change the main message
    mainMessageElement.innerHTML = "✨ **Happy Birthday!** May all your dreams come true this year! This message is just for you!";
    
    // Hide the button after it's clicked
    buttonElement.style.display = 'none';

    // Show a new message in the timer spot
    timerElement.innerHTML = "🥳 Have a fantastic celebration! 🎂";
}

// Add an event listener to the button
document.getElementById('wish-button').addEventListener('click', showSpecialWish);


// --- Optional: A simple countdown timer (uncomment the code below to use it) ---

/*
// Set the date for the birthday (e.g., December 31st of the current year)
const birthday = new Date("November 14, 2026 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  const now = new Date().getTime();
  const distance = birthday - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "IT'S TODAY! 🥳";
  }
}, 1000);
*/
