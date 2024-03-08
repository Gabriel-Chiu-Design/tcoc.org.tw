$(document).ready(function () {

    /*sync form data to google sheet*/
    const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz9XG3z2jjEIc1n3XpxZ0xOS3mpbjh4mc1D1mhcWLont88Xlmoarh6Js7XOAT01mA51/exec'
         
    form.addEventListener('submit', e => {
        e.preventDefault()

        console.log(form)
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

        /*log response*/
        .then(response => { alert('發送成功! 稍後將會有專人跟您聯繫，感謝!', response) })
        .catch(error => { alert('不好意思，表單填寫失敗，請重新填寫。', error.message) })
    })
    
});