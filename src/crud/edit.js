import Swal from 'sweetalert2'

function Edit(id) {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const response = JSON.parse(this.response);

        Swal.fire({
            heightAuto: 'false',
            title: 'Edit a task',
            html:
                `<input style="width: 70%;" id="swal-input1" value="${response.title}" class="swal2-input">` +
                `<input style="width: 70%;" id="swal-input2" value="${response.content}" class="swal2-input">`,
            focusConfirm: false,
            preConfirm: () => {
                const newTitle = document.getElementById('swal-input1').value;
                const newContent = document.getElementById('swal-input2').value;

                xhttp.onload = function () {
                    const response2 = JSON.parse(this.response);

                    if (response2.status === "Task Updated") {
                        Swal.fire(
                            'Updated!',
                            'Your task has been updated.',
                            'success'
                        ).then(() => {
                            window.location.reload();
                        });
                    }
                }
            
                xhttp.open("PATCH", `http://localhost:8000/api/tasks/update/${id}?title=${newTitle}&content=${newContent}`);
                xhttp.send();
            }
        })
    }

    xhttp.open("GET", `http://localhost:8000/api/tasks/task/${id}`);
    xhttp.send();















}


export default Edit;