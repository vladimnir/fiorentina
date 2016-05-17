/**
 * Function to show or hide extra billing info
 * @returns {undefined}
 */
function switchExtraBillingInfo() {
    element = document.getElementById("extraBillingInformation");
    check = document.getElementById("showExtraBillInfo");
    if (check.checked) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}