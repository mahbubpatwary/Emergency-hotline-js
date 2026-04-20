
const save = [];
var coppy = [];
var balance = 500;

document.getElementById('balance').innerText = balance;













var getSave = (e) => {
    let element = e.target;
    element.classList.add('text-red-500', 'fa-solid')

    let heartCount = parseInt(document.getElementById('heart_count').innerText)
    document.getElementById('heart_count').innerText = heartCount + 1;

}






var getCoppy = (e) => {
    let target = e.target.parentElement.parentElement
    let text = parseInt(target.querySelector('h3').innerText);

    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('copied to clipboard')
            let coppyCount = parseInt(document.getElementById('clipboard').innerText)
            document.getElementById('clipboard').innerText = coppyCount + 1;
        })
        .catch(err => {
            console.log('faild to coppy', err)
        })
}









var callFunction = (e) => {
    let balance = parseInt(document.getElementById('balance').innerText);

    if (balance <= 0) {
        alert('you have not enough balence')
        return;
    }

    let grandDiv = e.target.parentElement.parentElement;

    let callName = grandDiv.querySelector('h2')
    let callNo = grandDiv.querySelector('h3')
    let nameElement = callName.cloneNode(true)
    let numberElement = callNo.cloneNode(true)

    let createDiv = document.createElement('div')
    createDiv.append(nameElement)
    createDiv.append(numberElement)
    createDiv.classList.add('bg-slate-100','text-center', 'p-5', 'rounded-md')

    let callHistoryDiv = document.getElementById('call_history')
    callHistoryDiv.prepend(createDiv)
    
    document.getElementById('balance').innerText = balance - 100;

    console.log(createDiv.classList)
}