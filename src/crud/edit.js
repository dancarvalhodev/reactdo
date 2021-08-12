import Swal from 'sweetalert2'
import URL_API from '../confg/config';

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
                let newTitle = document.getElementById('swal-input1').value;
                let newContent = document.getElementById('swal-input2').value;

                if (newTitle === '' || newContent === '') {
                    Swal.fire(
                        'Attention',
                        'Title or Content cannot be empty',
                        'warning'
                    )
                } else {
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

                    xhttp.open("PATCH", `${URL_API}/api/tasks/update/${id}?title=${newTitle}&content=${newContent}`);
                    xhttp.send();
                }
            }
        })
    }

    xhttp.open("GET", `${URL_API}/api/tasks/task/${id}`);
    xhttp.send();















}


export default Edit;