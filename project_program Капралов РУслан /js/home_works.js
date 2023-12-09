const gmailInp = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const validateGmail = (gmail) => {
    const regExp = /^[a-z0-9._]+@gmail\.com$/i
    return regExp.test(gmail)
}

gmailBtn.addEventListener('click', () => {
    const gmail = gmailInp.value.trim()
    if (validateGmail(gmail)){
        gmailResult.style.color = 'green'
        gmailResult.innerHTML = 'Адрес правильный'
    } else {
        gmailResult.innerHTML = 'Адрес неправильный'
        gmailResult.style.color = 'red'
    }
})

const parent = document.querySelector('#parent_block')
const child = document.querySelector('#child_block')

function moveRight(position){
    if (position < parent.clientWidth - child.clientWidth){
        position += 1
        child.style.right = `${position}px`

        setTimeout(() => moveRight(position), 10)
    }
}

moveRight()
