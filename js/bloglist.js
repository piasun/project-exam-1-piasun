import { articleList } from "../functions/listOfArticles.js";
import { displayErrorMessage } from "../functions/errormessage.js";

//hide button
const loadMorePosts = document.querySelector(".more-posts");
loadMorePosts.style.display = "none";

//call api

let url = "https://orvoll.no/re-yourself/wp-json/wp/v2/posts?per_page=12&_embed";

async function getArticles() {
    try {
        const response = await fetch(url);
	    const article = await response.json();
        console.log(article);

        articleList(article);


    } catch (error) {
        const articleContainer = document.querySelector(".articles");
        displayErrorMessage(articleContainer);
        console.log(error);
    } 
   
}

//load more posts
loadMorePosts.addEventListener("click", () => {
    const addArticles = document.querySelectorAll(".card");
    addArticles.forEach((post) => {
        post.classList.remove("hidden");
    });
    loadMorePosts.style.display = "none";
});

getArticles();
  