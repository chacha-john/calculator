let userInput = document.querySelector("#userdata")
let gender = userInput.gender.value
let names = []


userInput.addEventListener("submit", (e)=>{
    e.preventDefault()

    let name = userInput.username.value
    
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
        names = ['kwasi','kwadwo','kwabena','kwaku','yaw','kofi','kwame']
    }
    else if(gender == 'female'){
        names = ['akosua','adwoa','abena','akua','yaa','afua','ama']
    }
    
}