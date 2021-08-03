'strict';

function init(elem) {
    const container = document.createElement('label');
    container.classList.add('adv', 'custom-checkbox-container');
    const checkbox = document.createElement('span');
    checkbox.classList.add('adv','custom-checkbox');
    elem.classList.add('adv', 'hidden-input');
    elem.insertAdjacentElement('beforebegin', container);
    container.appendChild(elem);
    container.appendChild(checkbox);
}

(() => {
    document.querySelectorAll('input[data-adv][type="checkbox"]').forEach(init);
})();