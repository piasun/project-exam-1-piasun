import { articleList } from "./listOfArticles.js";

export function filterByCategory(article) {
    const categorySelector = document.querySelector(".category")
    categorySelector.addEventListener("change", () => {
        if (categorySelector.value === "all-categories") {
            articleList(article);
        }
        else {
            const filteredArticles = data.filter((post) => {
                return (
                categorySelector.value === post._embedded['wp:term'][0][0].slug ||
                categorySelector.value === post._embedded['wp:term'][0][1].slug
                );
            });

            articleList(filteredArticles);
        }
    });

}