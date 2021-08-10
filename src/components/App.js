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

export default App;
