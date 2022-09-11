import { displayErrorMessage } from "../functions/errormessage.js";

const articleContainer = document.querySelector(".post_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

//call api
const url = `https://orvoll.no/re-yourself/wp-json/wp/v2/posts/${id}?_embed`;

//image modal
const overlay= document.querySelector("body");
const modal = document.querySelector(".modal-container");


async function postDetails() {

    try {
        const response = await fetch(url);
        const article = await response.json();
        
        console.log(article);

        //change headtitle

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
                                    <p>by ${article._embedded.author[0].name}</p>
                                    <div class="post_details">
                                    <img src="${article._embedded['wp:featuredmedia'][0].source_url}" alt="${article._embedded['wp:featuredmedia'][0].alt_text}" />
                                    <p>${article.content.rendered}</p>
                                    <div class="divider">
                                    <div>#${article._embedded['wp:term'][0][0].slug}</div>
                                    <div>#${article._embedded['wp:term'][0][1].slug}</div>
                                    </div>
                                    </div>
                                    `;

                              

    }



