
// const btn = document.querySelector('.btn')

const obj = {
    "Name": "LidiaDeineko"
}  

window.addEventListener('load', () => {
    fetch('http://localhost:9090/Item/AddName', {
        method: 'POST',
        body: JSON.stringify(obj),
        mode: 'no-cors',
        headers: {'sid': 'fsfsfsfsfsfsfsf', 
                'Content-Type': 'application/json',
                'Accept': '*/*', 
                'Access-Conrol-Allow-Origin':'*'
            }
    })
        .then((resp) => resp.json())
        .then(data => console.log(data))
        .catch(() => console.log('ERRRRORRRRR!'))
})


