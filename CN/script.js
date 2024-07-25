function search(inputId) {
    const inputValue = document.getElementById(inputId).value;
    if (inputValue) {
        alert(`Searching for: ${inputValue}`);
        //search functionality here
    } else {
        alert('Please enter something.');
    }
}

function Buses() {
    alert('Buses option inka raledhu thammudu .');
    // buses functionality here
}

function findRoute() {
    alert('Find Route option inka raledhu thammudu.');
    // find route functionality here
}

function clearAll() {
    document.getElementById('facultyInput').value = '';
    document.getElementById('staffInput').value = '';
    document.getElementById('studentInput').value = '';
    document.getElementById('buildingInput').value = '';
    document.getElementById('serviceInput').value = '';
    alert('All inputs cleared.');
}

function printPage() {
    window.print();
}
function birdsView() {
    alert('Birds View option inka raledhu thammudu.');
    // birds view functionality here
}
