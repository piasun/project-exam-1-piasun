//elements in the dom
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

//call api
const baseURL = "https://orvoll.no/re-yourself/wp-json/wp/v2/posts?_embed";


async function getPosts(url) {
    const response = await fetch(url);
	const blogposts = await response.json();

    console.log(blogposts);


    blogposts.forEach(function(post){
        slider.innerHTML += `
                <article class="card">
                    <a href="blogpostspecific.html?id=${post.id}" class="blogpost">
                        <h3>${post.title.rendered}</h3>
                        <img src="${post._embedded['wp:featuredmedia'][0].source_url}" />
                    </a>
                    <div class="category">
                        <span>#${post._embedded['wp:term'][0][0].slug}</span>
                        <span>#${post._embedded['wp:term'][0][1].slug}</span>
                    </div>
                </article>`
    
        })
}

getPosts(baseURL);

//slider button actions

prevButton.disabled = true;

prevButton.addEventListener("click", () => {
    nextButton.disabled = false;
    const sliderStart = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    
    console.log(sliderStart);
    if (sliderStart ===1) {
        prevButton.disabled = true;
    }
    slider.style.setProperty("--slider-index", sliderStart - 1);
});

const screenSize = window.outerWidth;

nextButton.addEventListener("click", () => {
    prevButton.disabled = false;
    const sliderStart = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
    );

    if (screenSize <= 699 && sliderStart === 10) {
        nextButton.disabled = true;
      } else if (screenSize > 699 && screenSize <= 999 && sliderStart === 4) {
        nextButton.disabled = true;
      } else if (screenSize > 999 && screenSize <= 1199 && sliderStart === 2) {
        nextButton.disabled = true;
      } else if (screenSize > 1199 && sliderStart === 1) {
        nextButton.disabled = true;
      }
      slider.style.setProperty("--slider-index", sliderStart + 1);
});

