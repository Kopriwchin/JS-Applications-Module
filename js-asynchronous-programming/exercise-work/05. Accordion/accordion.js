async function solution() {
    const getArticlesUrl = "http://localhost:3030/jsonstore/advanced/articles/list";

    let response = await fetch(getArticlesUrl);

    let jsonData = await response.json();

    const mainSection = document.getElementById('main');

    for (const article of jsonData) {
        let accordionDiv = document.createElement('div');
        accordionDiv.classList.add('accordion');

        let headDiv = document.createElement('div');
        headDiv.classList.add('head');

        let spanTitle = document.createElement('span');
        spanTitle.textContent = article['title'];

        let buttonEl = document.createElement('button');
        buttonEl.classList.add('button');
        buttonEl.id = article['_id'];
        buttonEl.textContent = 'More';

        let extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');
        let paragraphEl = document.createElement('p');
        paragraphEl.classList.add('content');
        paragraphEl.textContent = '';
        extraDiv.appendChild(paragraphEl);

        accordionDiv.appendChild(headDiv);
        accordionDiv.appendChild(extraDiv);

        headDiv.appendChild(spanTitle);
        headDiv.appendChild(buttonEl);

        mainSection.appendChild(accordionDiv);
    }

    const articleDetailsUrl = "http://localhost:3030/jsonstore/advanced/articles/details";

    const articleDetailsResult = await fetch(articleDetailsUrl);

    const detailsJson = await articleDetailsResult.json();

    let moreButtons = document.querySelectorAll('button');
    moreButtons.forEach(x => {
        x.addEventListener('click', (event) => {
            let extraDiv = event.currentTarget.parentNode.parentNode.getElementsByClassName('extra')[0];

            if (event.currentTarget.textContent == 'More') {
                let paragraphContent = event.currentTarget.parentNode.parentNode.getElementsByClassName('content')[0];
                
                const articleContent = Object.entries(detailsJson).find(x => x[0] == event.currentTarget.id)[1].content;
                
                paragraphContent.textContent = articleContent;
                
                extraDiv.style.display = 'inline';            
                event.currentTarget.textContent = 'Less'
            } 
            else if (event.currentTarget.textContent == 'Less') {
                extraDiv.style.display = 'none';                
                
                event.currentTarget.textContent = 'More'
            }
        })
    })

}

solution();