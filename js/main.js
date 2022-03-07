let userInput = document.querySelector("#userdata")
let ff = document.querySelector("#funfact")

//names arrays
male = ['Kwasi','Kwadwo','Kwabena','KwaKu','Yaw','Kofi','Kwame']
female = ['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Ama']
funFacts = ['Ghana is at the centre of the world! Both close to the equator and the Greenwich Meridian!','Ghana existed as an empire from the seventh to the thirteenth century!','Ghana was the first country to get independence from colonization in the year 1957 under Kwame Nkurumah as the president!','The Akan people of Ghana still practice inheritance based on matriarchial lineage!','For the Akan tribe, the first names of children are based on the day of the week they were born and their gender!','Ghanaians make very fancy coffins - mostly artistic - because they believe there is life after death and the coffins serves to make a good impression for the deead when they arrive in their next life!','The popular musical style of the mid 20th century originated in Ghana. Highlife today has evolved to electronic Twi music!','Soccer is the national pastime in Ghana which has made the sport so successful since the 1940s!']


window.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    
    validate()
    
})
window.addEventListener("load",(e)=>{
    document.querySelector("#fact").textContent = funFacts[Math.floor(Math.random()*funFacts.length)]
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