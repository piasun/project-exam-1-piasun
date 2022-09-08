

//call api

let url = "http://localhost/re-yourself/wp-json/wp/v2/posts?filter%5Bposts_per_page%5D=20&page=1&_embed";

async function getArticles(url) {
    try {
        const response = await fetch(url);
	    const article = await response.json();
        console.log(article);

        articleList(article);


    } catch (error) {
        const articleList = document.querySelector(".articles");
        displayErrorMessage(articleList);
    } 
   
}

function articleList(article) {
    const articleContainer = document.querySelector(".articles");
    articleContainer.innerHTML="";

    for (let i = 0; i < article.length; i++) {
        if (i === 0 && i < 10)  {
            articleContainer.innerHTML = `<article class="blogpost_card">
                                            <a href="blogpostspecific.html?id=${article[i].id}" class="blogpost">
                                                <h3>${article[i].title.rendered}</h3>
                                                <img src="${article[i]._embedded['wp:featuredmedia'][0].source_url}" />
                                            </a>
                                            <p>${article[i]._embedded.author[0].name}</p>
                                            <div>
                                                <span>#${article[i]._embedded['wp:term'][0][0].slug}</span>
                                                <span>#${article[i]._embedded['wp:term'][0][1].slug}</span>
                                            </div>
                                        </article>`
        } else if (i > 10 && i < article.length) {
            articleContainer.innerHTML = `<article class="blogpost_card">
                                                <a href="blogpostspecific.html?id=${article[i].id}" class="blogpost">
                                                    <h3>${article[i].title.rendered}</h3>
                                                    <img src="${article[i]._embedded['wp:featuredmedia'][0].source_url}" />
                                                </a>
                                                <p>${article[i]._embedded.author[0].name}</p>
                                                <div>
                                                    <span>#${article[i]._embedded['wp:term'][0][0].slug}</span>
                                                    <span>#${article[i]._embedded['wp:term'][0][1].slug}</span>
                                                </div>
                                            </article>`

        }

     }
} 

getArticles(url);

function displayErrorMessage(htmlContainer) {
    htmlContainer.innerHTML = `<div class="error-message">
                                    <p>Oops looks like an error on our end</p>
                                    <p>Please go back and try again</p>
                                 </div>`;
  }
  