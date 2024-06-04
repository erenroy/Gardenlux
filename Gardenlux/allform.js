
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get form values
        const fullName = document.querySelector('input[name="fullname"]').value.trim();
        const phone = document.querySelector('input[name="phone"]').value.trim();

        // Check if the required fields are filled
        if (fullName === "" || phone === "") {
            alert("Please fill in all the required fields.");
        } else {
            // Display the pop-up notification
            alert("Form has been submitted successfully!");

            // Optionally, you can clear the form fields
            this.reset();
        }
    });
