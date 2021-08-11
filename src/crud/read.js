import Edit from './edit';
import Delete from './delete';
import dayjs from 'dayjs';
//import { MdDeleteForever } from "react-icons/md";
//import { MdCreate } from "react-icons/md";

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
                        <button class='btn btn-outline-info edit'>Edit</button>
                        <button class='btn btn-outline-danger delete'>Delete</button>
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