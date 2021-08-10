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

const tbody = document.querySelector('.tasks');
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
  console.log(JSON.stringify(this.responseText));
}

xhttp.open("GET", "http://localhost:8000/api/tasks/all");
xhttp.send();

export default App;
