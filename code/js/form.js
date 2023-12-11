$(document).ready(function () {

    /*sync form data to google sheet*/
    const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz9XG3z2jjEIc1n3XpxZ0xOS3mpbjh4mc1D1mhcWLont88Xlmoarh6Js7XOAT01mA51/exec'
         
    form.addEventListener('submit', e => {
        e.preventDefault()

        console.log(form)
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

        /*log response*/
        .then(response => { alert('Success!', response) })
        .catch(error => { alert('Error!', error.message) })
    })
    
});