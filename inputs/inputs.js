'strict';

const inputs = [
    'custom-checkbox',
    // 'custom-radio',
    // 'dynamic-list',
    // 'file-upload',
    // 'toggle-button',
];

function getScript(src) {
    const elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = src;
    document.body.appendChild(elem);
}

(() => {
    inputs.forEach(i => getScript(`inputs/${i}/${i}.js`));
})();