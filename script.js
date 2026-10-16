function addRecommendation(event) {
    event.preventDefault();
    
    // Get the textarea element where the user types the new recommendation
    const textarea = document.getElementById("new_recommendation");
    const recommendationText = textarea.value.trim();
    
    // Check that the input is not empty before submitting
    if (recommendationText !== "") {
        const container = document.getElementById("all_recommendations");
        
        // Create a new recommendation card element matching the existing format
        const card = document.createElement("div");
        card.className = "recommendation-card";
        card.innerHTML = `<p>&ldquo;${recommendationText}&rdquo;</p><h4>- Anonymous</h4>`;
        
        // Append the new card to the recommendations container list
        container.appendChild(card);
        
        // Clear the input textarea field
        textarea.value = "";
        
        // Trigger showPopup ONLY when a new recommendation is successfully submitted
        showPopup(true);
    }
}

function showPopup(bool) {
    const popup = document.getElementById("popup");
    if (bool) {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }
}

function closePopup() {
    showPopup(false);
}