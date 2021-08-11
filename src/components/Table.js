function Table() {
    return (
        <table className="table table-responsive table-hover">
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
    );
}

export default Table;
