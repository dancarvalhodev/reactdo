import Navbar from "./Navbar";
import { MdAdd } from "react-icons/md";

function App() {
  return (
    <div>
      < Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
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
            <button className="newTask">< MdAdd /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
