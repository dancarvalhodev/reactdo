import Swal from 'sweetalert2'

function Delete(id) {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const response = JSON.parse(this.response);
        if (response.status === "Task Deleted") {
            Swal.fire({
                icon: 'success',
                title: 'Wow',
                text: 'Task Deleted',
                footer: '<a href="">Puff?</a>'
            }).then(() => {
                window.location.reload();
            });
        }
    }

    xhttp.open("DELETE", `http://localhost:8000/api/tasks/delete/${id}`);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
    xhttp.send();
}


export default Delete;