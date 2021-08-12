import Edit from './edit';
import View from './view';
import Delete from './delete';
import dayjs from 'dayjs';
import URL_API from '../confg/config';

function setButtonsAction() {
    const editButton = Array.from(document.querySelectorAll('.edit'));
    const viewButton = Array.from(document.querySelectorAll('.view'));
    const deleteButton = Array.from(document.querySelectorAll('.delete'));

    editButton.forEach((button) => {
        button.addEventListener('click', () => {
            let id = button.parentElement.parentElement.firstElementChild.textContent;
            Edit(id);
        });
    });

    viewButton.forEach((button) => {
        button.addEventListener('click', () => {
            let id = button.parentElement.parentElement.firstElementChild.textContent;
            View(id);
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

            if (Array.from(tasks).length === 0) {
                tbody.innerHTML += `<tr><td colspan=4><div class="alert alert-danger" role="alert">No tasks found</div></td></tr>`;
            } else {
                tasks.forEach(task => {
                    tbody.innerHTML +=
                        `<tr>
                        <td style="display: none;">${task.id}</td>
                        <td>${task.title.slice(0, 8)}..</td>
                        <td>${task.content.slice(0, 4)}..</td>
                        <td>${dayjs(new Date(task.created.date)).format('DD/MM/YYYY HH:mm')}</td>
                        <td>
                            <button style="width: 80px; margin: 2px;" class='btn btn-info text-white edit'>Edit</button>
                            <button style="width: 80px; margin: 2px;" class='btn btn-warning text-white view'>View</button>
                            <button style="width: 80px; margin: 2px;" class='btn btn-danger delete'>Delete</button>
                        </td>
                    </tr>`;
                });

                setButtonsAction();
            }
        }

        xhttp.open("GET", `${URL_API}/api/tasks/all`);
        xhttp.send();
    });
}

export default Read;