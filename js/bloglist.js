const baseURL = "http://localhost/re-yourself/wp-json/wp/v2/posts";
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
                        <p>${blogpost.excerpt.rendered}</p>
                        <div class="cta"> Read more...</div>
                    </a>
                </article>`
    
        })
}

getBlogposts(baseURL);

