function showDropdown() {
    document.getElementById('dropdown').style.display = 'inline-block';
}

function hideDropdown() {
    document.getElementById('dropdown').style.display = 'none';
}
function handleSelection(select) {
    var selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "#login.html") {
        window.location.href = selectedOption.value;
    }
}
function handleSelection(select) {
    var selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "#form.html") {
        window.location.href = selectedOption.value;
    }
}