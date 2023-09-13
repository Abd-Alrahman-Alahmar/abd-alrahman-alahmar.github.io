// Submit handler
function submitHandler(event) {

  event.preventDefault();

  // Get form data  
  const form = event.target;

  // Submit to Formspree
  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  })
  .then(response => {

    // Redirect if successful
    if(response.ok) {
      window.location.replace("thanks.html");
    }

  });

}

// Add listener
document.addEventListener("submit", submitHandler);