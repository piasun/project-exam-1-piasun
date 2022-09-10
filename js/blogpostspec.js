import { displayErrorMessage } from "../functions/errormessage.js";

const articleContainer = document.querySelector(".post_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = `https://orvoll.no/re-yourself/wp-json/wp/v2/posts/${id}`;


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
                                    <p>by ${article.author}</p>
                                    <div class="post_details">
                                    <img ${article.featured_media}>
                                    <p>${article.content.rendered}</p>
                                    <div>#${article.categories}</div>
                                    <div>#${article.categories}</div>
                                    </div>
                                    `;
}