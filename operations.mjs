export const mountCard = ({title, body}) => `
    <div class="card bg-dark text-light px-2 mb-3 border border-dark rounded" style="width: 18rem;">
        <div class="card-body ">
            <h5 class="card-title text-center font-weight-bold">${title}</h5>
            <hr class="bg-light"/>
            <p class="card-text text-justify font-weight-light">${body}</p>
        </div>
    </div>`;

export const buildUrl = offset => `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=8`;