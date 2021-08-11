import Edit from './edit';
import Delete from './delete';

function Read() {
    document.addEventListener("DOMContentLoaded", function () {
        const tbody = document.querySelector('.tasks');
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            const tasks = JSON.parse(this.responseText);

            tasks.forEach(task => {
                tbody.innerHTML +=
                    `<tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.content}</td>
                    <td>${task.created.date}</td>
                    <td>
                        <button class='btn btn-info text-white edit'>Edit</button>
                        <button class='btn btn-danger delete'>Delete</button>
                    </td>
                </tr>`;
            });

            const editButton = Array.from(document.querySelectorAll('.edit'));
            const deleteButton = Array.from(document.querySelectorAll('.delete'));

            editButton.forEach((button) => {
                button.addEventListener('click', () => {
                    let id = button.parentElement.parentElement.firstElementChild.textContent;
                    Edit(id);
                });
            });

            deleteButton.forEach((button) => {
                button.addEventListener('click', () => {
                    let id = button.parentElement.parentElement.firstElementChild.textContent;
                    Delete(id);
                });
            });
        }


        xhttp.open("GET", "http://localhost:8000/api/tasks/all");
        xhttp.send();
    });
}


export default Read;