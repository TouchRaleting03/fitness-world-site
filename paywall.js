function redirectToPaywall() {
    window.location.href = "SubsWall.html" // Replace with the URL of your paywall
  }
// Check if the user has paid by looking for a cookie
function hasPaid() {
    return document.cookie.indexOf('paid=true') !== -1;
  }
  
  // Set a cookie to indicate that the user has paid
  function setPaid() {
    document.cookie = 'paid=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window.location.href = 'index.html'; // Redirect to home page
  }
  
  // Show the content if the user has paid, otherwise show the paywall
  if (hasPaid()) {
    document.getElementById('content').style.display = 'block';
  } else {
    document.getElementById('paywall').style.display = 'block';
  
    // When the user clicks the subscribe button, set the cookie and redirect to the home page
    document.getElementById('subscribe-button').addEventListener('click', function() {
      setPaid();
    });
  }