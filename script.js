document.addEventListener('DOMContentLoaded', function () {
    //Une fois le DOM analysé je déclare mes variables:
    const form = document.querySelector('form');
    const commentList = document.getElementById('comment-list');
    const errorMessage = document.getElementById('error-message');

    //Je créé l'évenement ClickBtn
    form.addEventListener('submit', function (clickBtn) {
        clickBtn.preventDefault();

        //Je déclare mes variables pour récupération de données saisies
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const message = document.getElementById('message').value.trim();

        //Si condition non rempli msg "error" et si condition OK modification du DOM et creation du contenu
        if (firstName === '' || lastName === '' || message === '') {
            errorMessage.style.display = 'block';
        } else {          
            const createDiv = document.createElement('div');
            createDiv.classList.add('flex-1', 'py-10', 'border-t', 'border-gray-200');

            const title = document.createElement('h3');
            title.classList.add('font-medium', 'text-gray-900');
            title.textContent = `${firstName} ${lastName}`;

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
            const paragraph = document.createElement('p');
            paragraph.textContent = message;
            contentDiv.appendChild(paragraph);

            createDiv.appendChild(title);
            createDiv.appendChild(contentDiv);
            commentList.appendChild(createDiv);
            
            //Une fois la modification du DOM faite et la création du contenu, effacement des données dans les zones de texte
            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('message').value = '';
        }
    });
});
