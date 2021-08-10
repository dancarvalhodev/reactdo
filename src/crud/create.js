function Create() {
    document.addEventListener("DOMContentLoaded", function () {
        const newTaskButton = document.querySelector('.newTask');
        const xhttp = new XMLHttpRequest();

        newTaskButton.addEventListener('click', (event) => {
            event.preventDefault();

            let title = document.querySelector('.title').value;
            let content = document.querySelector('.content').value;

            xhttp.onload = function () {
                console.log((this.response));
            }

            xhttp.open("POST", `http://localhost:8000/api/tasks/create?title=${title}&content=${content}`);
            xhttp.send();
        });
    });
}

export default Create;