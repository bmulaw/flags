let flagsAndCountry = {}
let newFlag;

function setUpFlags(){
    fetch("https://restcountries.com/v3.1/all")
        .then( (response) => response.json() )
        .then ( (data) => {
            for(let i = 0; i < data.length; i++) {
                let flag = data[i].flags.png
                let country = data[i].name.common
                flagsAndCountry[flag] = country 
            }
            console.log(flagsAndCountry)
            getRandomCountry()
        })
}


function getRandomCountry(){
    const keys = Object.keys(flagsAndCountry);
    newFlag = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById("flag").src=newFlag
    console.log(newFlag)
}


function compareUserInput(){    
    let userInput = (document.getElementById("country").value).toLowerCase()
    let answer = (flagsAndCountry[newFlag]).toLowerCase()
    let isCorrect = userInput === answer
    console.log(userInput,answer, isCorrect )

    if (isCorrect) {
        getRandomCountry()
        document.getElementById("country").value = ""
    }
}


setUpFlags()
