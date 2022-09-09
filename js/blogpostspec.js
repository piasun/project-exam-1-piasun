import { displayErrorMessage } from "../functions/errormessage.js";

const articleContainer = document.querySelector(".post_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = `http://localhost/re-yourself/wp-json/wp/v2/posts?_embed/${id}`;


async function postDetails() {

    try {
        const response = await fetch(url);
        const article = await response.json();
        
        console.log(article);

        const headTitle = document.querySelector ("title");
        headTitle.innerHTML = `Re-yourself | ${article.title.rendered}`;


        createDetailsHtml(article);

    }
    catch(error) {
        const createDetailsHtml = document.querySelector(".post_details");
        displayErrorMessage(createDetailsHtml);
    }   

}

postDetails();

function createDetailsHtml(article) {
    articleContainer.innerHTML = `  <h1>${article.title.rendered}</h1>
                                    <p>${article._embedded.author[0].name}</p>
                                    <img src="${article._embedded['wp:featuredmedia'][0].source_url}"
                                    <h2>${article.excerpt.rendered}</h2>
                                    `;
}