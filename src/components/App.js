import { MdAdd } from "react-icons/md";

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
                <th className="hide">Id</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tasks"></tbody>
          </table>
          <button type="submit" className="newTask btn btn-outline-primary">< MdAdd/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
