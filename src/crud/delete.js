import Swal from 'sweetalert2'

function Delete(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const xhttp = new XMLHttpRequest();

            xhttp.onload = function () {
                const response = JSON.parse(this.response);
                if (response.status === "Task Deleted") {
                    Swal.fire(
                        'Deleted!',
                        'Your task has been deleted.',
                        'success'
                    ).then(() => {
                        window.location.reload();
                    });
                }
            }

            xhttp.open("DELETE", `http://localhost:8000/api/tasks/delete/${id}`);
            xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
            xhttp.send();
        }
    })
}


export default Delete;