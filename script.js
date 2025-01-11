// Function to add a new recommendation
function addRecommendation() {
    const recommendation = document.getElementById("new_recommendation");
  
    if (recommendation.value.trim() !== "") {
      // Create a new element for the recommendation
      const element = document.createElement("div");
      element.className = "recommendation";
      element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;
  
      // Add the recommendation to the list
      document.getElementById("all_recommendations").appendChild(element);
  
      // Reset the recommendation input field
      recommendation.value = "";
  
      // Show the popup
      showPopup(true);
    } else {
      alert("Please write a recommendation before submitting!");
    }
  }
  
  // Function to show the popup
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
    }
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popup').style.visibility = 'hidden';
  }
  