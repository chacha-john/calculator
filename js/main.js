let userInput = document.querySelector("#userdata")


userInput.addEventListener("submit", (e)=>{
    e.preventDefault()

    let name = userInput.username.value
    let gender = userInput.gender.value
    let date = userInput.dateofbirth.value
    let daya = userInput.dateofbirth.value
    let d = new Date(daya)
    siku = d.getDay()
    mwezi = d.getMonth()
    mwaka = d.getFullYear()
    
})