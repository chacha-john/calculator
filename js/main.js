let userInput = document.querySelector("#userdata")

//names arrays
male = ['Kwasi','Kwadwo','Kwabena','KwaKu','Yaw','Kofi','Kwame']
female = ['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Ama']


userInput.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    
    validate()
    
})
validate = () =>{
    //instantiates the gender
    let gender = userInput.gender.value

    //instantiates the name of the user
    let jina = userInput.username.value

    //uses date object to get the date for input by the user
    let daya = userInput.dateofbirth.value

    //instantiates the date object
    let d = new Date(daya)

    //uses the .getDay() method to get the day of the week for the date entered
    siku = d.getDay()
    // mwezi = d.getMonth()
    // mwaka = d.getFullYear()

    if(gender == 'male'){
        userInput.addEventListener("submit",(e)=>{
            document.getElementById("collect-input").style.display = "none"
            document.getElementById("akan-name").textContent = "Hi there, " + jina + "! Your Akan Name is " + male[siku] + "!";
        })
        
    }
    else if(gender == 'female'){
        userInput.addEventListener("submit",(e)=>{
            document.getElementById("collect-input").style.display = "none"
            document.getElementById("akan-name").textContent = "Hi there, " + jina + "! Your Akan Name is " + female[siku] + "!";
        })
    }

}