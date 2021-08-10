function NewTask() {
    return (
        <div className="newTaskForm">
            <form>
                <div className="mb-3">
                    <input type="text" placeholder="Title" className="form-control title" id="title"></input>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Content" className="form-control content" id="content"></input>
                </div>
                <button type="submit" className="btn btn-primary newTask">Add Task</button>
            </form>
        </div>
    );
}

export default NewTask;
