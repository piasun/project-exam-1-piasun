

//call api

let url = "http://localhost/re-yourself/wp-json/wp/v2/posts?filter%5Bposts_per_page%5D=20&page=1&_embed";

async function getArticles(url) {
    const response = await fetch(url);
    const article = await response.json();

    console.log(article);

    function articleList(article) {
        const articleContainer = document.querySelector(".articles");
        articleContainer.innerHTML="";

        for (let i = 0; i < article.length; i++) {
            if (i === 0 && i < 10)  {
                articlesContainer.innerHTML = `<article class="blogpost_card">
                                                <a href="blogpostspecific.html?id=${article.id}" class="blogpost">
                                                    <h3>${article.title.rendered}</h3>
                                                    <img src="${article._embedded['wp:featuredmedia'][0].source_url}" />
                                                </a>
                                                <p>${article._embedded.author[0].name}</p>
                                                <div>
                                                    <span>#${article._embedded['wp:term'][0][0].slug}</span>
                                                    <span>#${article._embedded['wp:term'][0][1].slug}</span>
                                                </div>
                                            </article>`
            } else if (i > 10 && i < article.length) {
                articlesContainer.innerHTML = `<article class="blogpost_card">
                                                    <a href="blogpostspecific.html?id=${article.id}" class="blogpost">
                                                        <h3>${article.title.rendered}</h3>
                                                        <img src="${article._embedded['wp:featuredmedia'][0].source_url}" />
                                                    </a>
                                                    <p>${article._embedded.author[0].name}</p>
                                                    <div>
                                                        <span>#${article._embedded['wp:term'][0][0].slug}</span>
                                                        <span>#${article._embedded['wp:term'][0][1].slug}</span>
                                                    </div>
                                                </article>`

            }

         }
    }
}

getArticles(url);