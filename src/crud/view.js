import Swal from 'sweetalert2'
import URL_API from '../confg/config';

function View(id) {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const response = JSON.parse(this.response);

        Swal.fire({
            title: 'Details',
            html:
            `<h6>Title</h6>
            ${response.title}
            <hr>
            <h6>Content</h6>
            ${response.content}`,
              
            showCancelButton: false,
            focusConfirm: false,
          })

        console.log(response);
    }

    xhttp.open("GET", `${URL_API}/api/tasks/task/${id}`);
    xhttp.send();
}


export default View;