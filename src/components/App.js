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
                <th>Id</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tasks"></tbody>
          </table>
          <hr></hr>
          <button type="submit" className="btn btn-primary newTask">Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
