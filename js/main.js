let userInput = document.querySelector("#userdata")
let gender = userInput.gender.value
let jina = userInput.username.value


userInput.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    //uses date object to get the date for input by the user
    let daya = userInput.dateofbirth.value

    //instantiates the date object
    let d = new Date(daya)

    //uses the .getDay() method to get the day of the week for the date entered
    siku = d.getDay()
    // mwezi = d.getMonth()
    // mwaka = d.getFullYear()
    
})
validate = () =>{
    if(gender == 'male'){
        maleLogic()
    }
    else if(gender == 'female'){
        femaleLogic()
    }
    

}
maleLogic = () =>{
    names = ['kwasi','kwadwo','kwabena','kwaku','yaw','kofi','kwame']

}
femaleLogic = () =>{
    names = ['akosua','adwoa','abena','akua','yaa','afua','ama']

}