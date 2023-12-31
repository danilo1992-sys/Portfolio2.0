window.onload = () => {
    const mailerform = document.getElementById('mailer-form');
    mailerform.onsubmit = async (e) => {
        e.preventDefault()
        const error = document.getElementById('error')
        error.innerHTML = ''
        const formdata = new FormData(mailerform);
        const data = Object.fromEntries(formdata.entries())
        const response = await fetch('/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            }
        })
        const responseText = await response.text()
        if (response.status > 300) {
            error.innerHTML = responseText
            return
        }
        mailerform.reset()
        alert('Correo enviado con éxito')
    }
}