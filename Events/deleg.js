document.getElementById("parentList").addEventListener("click", function(event) {
    // Check if the clicked element is an <li> element
    if (event.target.tagName === 'LI') {
        // Output the text content of the clicked <li> element
        console.log("Clicked on:", event.target.textContent);
    }
});
