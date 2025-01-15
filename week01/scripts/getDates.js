// Dynamically populate copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Populate last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
