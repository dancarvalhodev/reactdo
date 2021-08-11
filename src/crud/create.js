import Swal from 'sweetalert2'
import URL_API from '../confg/config';

function Create() {
    document.addEventListener("DOMContentLoaded", function () {
        const newTaskButton = document.querySelector('.newTask');
        const xhttp = new XMLHttpRequest();

        newTaskButton.addEventListener('click', () => {
            Swal.fire({
                heightAuto: 'false',
                title: 'Create a task',
                html:
                    `<input style="width: 70%;" id="swal-input1" placeholder="Task Title" class="swal2-input">` +
                    `<input style="width: 70%;" id="swal-input2" placeholder="Task Content" class="swal2-input">`,
                focusConfirm: false,
                preConfirm: () => {
                    let title = document.getElementById('swal-input1').value;
                    let content = document.getElementById('swal-input2').value;
    
                    xhttp.onload = function () {
                        const response2 = JSON.parse(this.response);
    
                        if (response2.status === "Task Created") {
                            Swal.fire(
                                'Created!',
                                'Your task has been created.',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            });
                        }
                    }
                
                    xhttp.open("POST", `${URL_API}/api/tasks/create?title=${title}&content=${content}`);
                    xhttp.send();
                }
            })
        });
    });
}

export default Create;