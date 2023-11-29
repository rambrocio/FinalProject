// script.js

function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    switch (searchTerm) {
        case "home":
            window.location.href = "../pages/MalizBar.html";
            break;
        case "bar menu":
        case "main menu":
            window.location.href = "../pages/barMenu.html";
            break;
        case "smurf":
            window.location.href = "../pages/smurf-Drink.html";
            break;
        case "oreo frappe":
            window.location.href = "../pages/oreoFrappe-Drink.html";
            break;
        case "margarita bulldog":
            window.location.href = "../pages/margaritaBulldog-Drink.html";
            break;
        case "pina colada":
            window.location.href = "../pages/pinaColada-Drink.html";
            break;
        case "social media":
            window.location.href = "../pages/socialMedia.html";
            break;
        case "contact us":
            window.location.href = "../pages/contactPage.html";
            break;
        default:
            // Handle other cases or display a message
            alert("No matching result found for: " + searchTerm);
    }

    return false; // Prevent the form from submitting
}
