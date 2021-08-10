import NewTask from './NewTask';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>Welcome to Reactdo</h1>
          <hr></hr>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="tasks"></tbody>
          </table>
          <hr></hr>
          <NewTask />
        </div>
      </div>
    </div>
  );
}

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


export default App;
