const baseURL = "http://localhost/re-yourself/wp-json/wp/v2/posts?_embed";
const blogContainer = document.querySelector(".blogposts");



async function getBlogposts(url) {
    const response = await fetch(url);
	const blogposts = await response.json();

    console.log(blogposts);


    blogposts.forEach(function(blogpost){
        blogContainer.innerHTML += `
                <article class="blogpost_card">
                    <a href="blogpostspecific.html?id=${blogpost.id}" class="blogpost">
                        <h3>${blogpost.title.rendered}</h3>
                        <img src="${blogpost._embedded['wp:featuredmedia'][0].source_url}" />
                    </a>
                    <div>
                        <span>#${blogpost._embedded['wp:term'][0][0].slug}</span>
                        <span>#${blogpost._embedded['wp:term'][0][1].slug}</span>
                    </div>
                </article>`
    
        })
}

getBlogposts(baseURL);