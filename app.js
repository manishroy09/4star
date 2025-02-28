
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});





document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const movie = document.getElementById('movie').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create confirmation message
    const confirmationMessage = `
        <h2>Booking Confirmation</h2>
        <p>Movie: ${movie}</p>
        <p>Date: ${date}</p>
        <p>Seats: ${seats}</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `;

    // Display confirmation message
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = confirmationMessage;
    confirmationDiv.classList.remove('hidden');

    // Optionally, reset the form
    document.getElementById('booking-form').reset();
});  