import './wiki.css';
import { marked } from 'marked';

var $ = selector => {
    return document.querySelector(selector);
};

function RenderCategoryContent(categorypath, pagearray) {
    $('.page-content').textContent = '';
    pagearray.forEach(page => {
        fetch(categorypath + '/' + page) //path.join?
        .then(response => response.text())
        .then(text => {
            const addedEl = document.createElement("div");
            addedEl.innerHTML = (page.endsWith(".md") ? marked.parse(text) : text) + '<hr>';
            $('.page-content').appendChild(addedEl);
        });
    });
}

export function RenderCategoriesUI(docpath, active_idx = 0, containerRoot = document) {
    $ = selector => {
        return containerRoot.querySelector(selector);
    }

    fetch(docpath + 'Table_Of_Contents.json')
    .then(response => response.json())
    .then(index => {
        const categories = Object.keys(index);

        categories.forEach(category => {
            const addedEl = document.createElement('li');
            addedEl.textContent = category // Should be image

            const pages = index[category].reverse()

            addedEl.addEventListener("click", (event) => {
                $('.active-page').classList.remove('active-page')
                event.target.classList.add('active-page');
                RenderCategoryContent(docpath + '/' + category, pages);
            });
            $('.carousel-container').appendChild(addedEl);

        });

        $('.carousel-container').children.item(active_idx).classList.add('active-page');

        const activeCategory = categories[active_idx];
        RenderCategoryContent(docpath + activeCategory + '/', index[activeCategory]);
    });
}

//RenderCategoriesUI("/wikis/RETICLE2/");