export function articleList(article) {
    const articleContainer = document.querySelector(".articles");
    const loadMorePosts = document.querySelector(".more-posts");
    articleContainer.innerHTML="";


//load more button
loadMorePosts.style.display = "block";

//create list of articles
 for (let i = 0; i < article.length; i++) {
        if (i === 0 && i < 10)  {
            articleContainer.innerHTML += `<article class="card">
                                            <a href="blogpostspecific.html?id=${article[i].id}" class="blogpost">
                                                <h3>${article[i].title.rendered}</h3>
                                                <img src="${article[i]._embedded['wp:featuredmedia'][0].source_url}" />
                                            </a>
                                            <p class="author">by ${article[i]._embedded.author[0].name}</p>
                                            <div class="category">
                                                <div>#${article[i]._embedded['wp:term'][0][0].slug}</div>
                                                <div>#${article[i]._embedded['wp:term'][0][1].slug}</div>
                                            </div>
                                        </article>`
        } else if (i > 10 && i < article.length) {
            articleContainer.innerHTML += `<article class="card hidden">
                                                <a href="blogpostspecific.html?id=${article[i].id}" class="blogpost">
                                                    <h3>${article[i].title.rendered}</h3>
                                                    <img src="${article[i]._embedded['wp:featuredmedia'][0].source_url}" />
                                                </a>
                                                <p class="author">by ${article[i]._embedded.author[0].name}</p>
                                                <div class="category">
                                                    <div>#${article[i]._embedded['wp:term'][0][0].slug}</div>
                                                    <div>#${article[i]._embedded['wp:term'][0][1].slug}</div>
                                                </div>
                                            </article>`

        }

     }
} 


