// Selectors
const result = document.querySelector('#fetch-quotes')
const fetch_button = document.querySelector('#api-button')
const navi = document.querySelector('.ul-nav')
const hamburgerToggle = document.querySelector('.hamburger-button')

// Event Listeners
fetch_button.addEventListener('click', getRandomQ)
hamburgerToggle.addEventListener('click', () => {

    const show = navi.getAttribute('data-visible');
    console.log(show)
    if (show === "false") {
        navi.setAttribute('data-visible', true); 
        hamburgerToggle.setAttribute('aria-expanded', true);
    } else if (show === "true") {
        navi.setAttribute('data-visible', false);
        hamburgerToggle.setAttribute('aria-expanded', false);
    }
})


// Functions
function getRandomQ() {
    result.innerHTML = "<img src='Blocks-0.6s-78px.gif' alt='digital block loader' />"
    fetch('https://would-you-rather-api--abaanshanid.repl.co/')
    .then(res => res.json())
        .then(data => {
            console.log(data.json)
            document.querySelector('#fetch-quotes').innerHTML=data.data;
        })
}

// function toggleButton() {
//     const show = navi.getAttribute('data-visible');

//     if (show === "false") {
//         navi.setAttribute('data-visible', true);
//     } else if (visibility === 'true') {
//         navi.setAttribute('data-visible', false)
//     }
// }



// jQuery

