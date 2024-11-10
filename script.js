function toggleContent() {
    // Get all radio buttons with the name "toggle"
    const toggleOptions = document.getElementsByName("toggle");

    // Loop through the radio buttons to find the selected one
    let selectedOption = "";
    for (const option of toggleOptions) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    // Show or hide content based on selected radio button
    const content = document.getElementById("content");
    if (selectedOption === "show") {
        content.style.display = "block";
    } else if (selectedOption === "hide") {
        content.style.display = "none";
    }
}


