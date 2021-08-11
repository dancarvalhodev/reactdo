import Edit from './edit';
import Delete from './delete';
import dayjs from 'dayjs';

function setButtonsAction(){
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

function Read() {
    document.addEventListener("DOMContentLoaded", function () {
        const tbody = document.querySelector('.tasks');
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            const tasks = JSON.parse(this.responseText);

            tasks.forEach(task => {
                tbody.innerHTML +=
                `<tr>
                    <td style="display: none;">${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.content}</td>
                    <td>${dayjs(new Date(task.created.date)).format('DD/MM/YY HH:MM')}</td>
                    <td>
                        <button style="width: 80px; margin: 2px;" class='btn btn-info text-white edit'>Edit</button>
                        <button style="width: 80px; margin: 2px;" class='btn btn-danger delete'>Delete</button>
                    </td>
                </tr>`;
            });

            setButtonsAction();
        }

        xhttp.open("GET", "http://localhost:8000/api/tasks/all");
        xhttp.send();
    });
}

export default Read;