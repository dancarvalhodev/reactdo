import Navbar from "./Navbar";
import Separator from "./Separator";
import InfoAlert from "./InfoAlert";
import Table from "./Table";

function App() {
  return (
    <div>
      < Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            < Separator />
            <h1>Welcome</h1>
            <p>Click in the button below to add a task</p>
            <button className="newTask">New task</button>
            < Separator />
            < InfoAlert />
            < Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
