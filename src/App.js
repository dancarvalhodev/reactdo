function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>Welcome to Reactdo</h1>
          <hr></hr>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="tasks"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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

export default App;
