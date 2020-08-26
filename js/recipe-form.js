window.onload = function(){
    const contactSubmit = document.getElementById('recipePageSubmit');

    contactSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const value = document.getElementById('recipePageSelect').value;
        const elementToScrollTo = document.getElementById(value);
        elementToScrollTo.scrollIntoView({ behavior: "smooth" });
    })
 };
