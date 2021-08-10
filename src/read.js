function Read() {
    document.addEventListener("DOMContentLoaded", function () {
        const tbody = document.querySelector('.tasks');
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            const tasks = JSON.parse(this.responseText);

            tasks.forEach(task => {
                tbody.innerHTML +=
                    `<tr>
                <td>${task.title}</td>
                <td>${task.content}</td>
                <td>${task.created.date}</td>
              </tr>`;
            });
        }

        xhttp.open("GET", "http://localhost:8000/api/tasks/all");
        xhttp.send();
    });
}

export default Read;