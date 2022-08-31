const articleContainer = document.querySelector(".post_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "http://localhost/re-yourself/wp-json/wp/v2/posts/" + id;

console.log(url);


async function postDetails() {

    try {
        const response = await fetch(url);
        const article = await response.json();
        
        console.log(article);

        const headTitle = document.querySelector ("title");
        headTitle.innerHTML = article.title;


        createDetailsHtml(article);

    }
    catch(error) {
        articleContainer.innerHTML = "We apologuise, something went wrong! Please go back and try again";
    }   

}

postDetails();

function createDetailsHtml(article) {
    articleContainer.innerHTML = `  <h1>${article.title}</h1>
                                    <p>${article.author.name}</p>
                                    <h2>${article.excerpt}</h2>
                                    `;
}