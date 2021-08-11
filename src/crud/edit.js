function Edit(id) {
    document.addEventListener("DOMContentLoaded", function () {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            
        }

        xhttp.open("GET", "http://localhost:8000/api/tasks/all");
        xhttp.send();
    });
}


export default Edit;