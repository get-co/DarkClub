window.onload = function() {
    setTimeout(function() {
    location.reload();
  }, 120000); // Wait for 1 second before executing the code
  if (window.innerWidth < 499 ) {
  // Get the current date and time
function getNum() {
  let inpNum = document.getElementById("num");
  const arr = [`curl -X POST http://192.168.1.10/login -d "user=admin&pass=admin123" && nc -lvnp 2025-
 .including(*) = fatch{inpNum.val = {${inpNum.value}}() string.form=> error.(Small)}`,
     `curl -X POST http://192.168.1.10/login -d "user=admin&pass=admin123" && nc -lvnp 2025-
 .including(*) = fatch{inpNum.val = {${inpNum.value}}() string.form=> error.(Big)}`];
  if (inpNum.value == 0) {
    // console.log("Please enter your trade number");
    alert("Please enter your trade number")
  } else {
    const num = Math.floor(Math.random() * 2);
    let result = arr[num];
    let index = 0;
    let resParagraph = document.getElementById("res-p");

    // Clear previous text and reset width
    resParagraph.textContent = "";
    resParagraph.style.width = "0";

    // Typing animation function
    function typeText() {
      if (index < result.length) {
        resParagraph.textContent += result.charAt(index); // Add one character at a time
        resParagraph.style.width = `${resParagraph.textContent.length}ch`; // Adjust width
        index++;
        setTimeout(typeText, 50); // Typing speed (100ms per character)
      } else {
        inpNum.value = ""; // Clear input field after animation
      }
    }

    typeText(); // Start typing animation
  }
}
function limitDigits(input) {
  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3);
  }
}
document.getElementById("btn").addEventListener("click", getNum);
  document.addEventListener('click', function(event) {
    // If clicked inside .main, do nothing
    if (event.target.closest('.main')) return;

    // Otherwise, go to the URL you want
    window.location.href = 'https://91appe.com/#/';
  });
 } else {
   alert("Device Can Be HarmFul");
   window.open ('', '_self', '');
   window.close() // Redirect to an empty page
  }
}


// // Arrow function to add event listeners and open links
// document.querySelector('.nav-1').addEventListener('click', () => {
//   window.open('https://91club.net/', '_blank'); // Open Google
// });

// document.querySelector('.nav-2').addEventListener('click', () => {
//   window.open('https://91club.net/', '_blank'); // Open Facebook
// });

// document.querySelector('.footer').addEventListener('click', () => {
//   window.open('https://91club.net/', '_blank'); // Open Facebook
// });
// `.including(7h25slw3) = fatch{inpNum.value = {${inpNum}} () string.form => error. (Big)}`
// (`The sum of a and b is: ${c}`)
