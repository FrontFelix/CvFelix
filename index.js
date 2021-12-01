

let textVar = {
    "helloTop": document.getElementById('helloTop'),
    "developer": document.getElementById('developer'),
    "designer": document.getElementById('designer'),
    "bot": document.getElementById('bot'),
    "portfolioBtn": document.getElementById('portfolioBtn'),
    "contactBtn": document.getElementById('contactBtn'),
    "aboutH1": document.getElementById('aboutH1'),
    "aboutP": document.getElementById('aboutP'),
    "contactH1": document.getElementById('contactH1')
}



let divVar = {
    "language": document.getElementById('lang'),
    "body": document.getElementById('body')

}

let buttons = {
    "sweBtn": document.getElementById('swedish'),
    "engBtn": document.getElementById('english')
}

divVar.language.style.display = "block"
divVar.body.style.display = "none"

if(localStorage.getItem('language')) {
    divVar.language.style.display = "none"
    divVar.body.style.display = "block"
}

function setLanguageSwe() {
    if(localStorage.getItem('language') === "Swe") {
        textVar.helloTop.innerHTML = "Tja, mitt namn är Felix. Jag är"
        textVar.developer.innerHTML = "Front-End Utvecklare"
        textVar.designer.innerHTML = "UX / UI Designer"
        textVar.bot.innerHTML = "Node.JS Utvecklare"
        textVar.portfolioBtn.innerHTML = "Portfölj"
        textVar.contactBtn.innerHTML = "Kontakt"
        textVar.aboutH1.innerHTML = "Om mig"
        textVar.contactH1.innerHTML = "Kontakta mig!"
        textVar.aboutP.innerText = "Shoo, mitt namn är Felix kallas även FrontFelix. Jag är en FrontEnd utvecklare. Jag har jobbat med utveckling av hemsidor i 4år vilket har gett mig en bra förståelse hur man ska arbeta med kunder och partners."
    }
}
function setLanguageEng() {
    if(localStorage.getItem('language') === "Eng") {
        textVar.helloTop.innerHTML = "Hello, my name is Felix. I am"
        textVar.developer.innerHTML = "Front-End Developer"
        textVar.designer.innerHTML = "UX / UI Designer"
        textVar.bot.innerHTML = "Node.JS Developer"
        textVar.portfolioBtn.innerHTML = "Portfolio"
        textVar.contactBtn.innerHTML = "Contact"
        textVar.aboutH1.innerHTML = "About Me"
        textVar.contactH1.innerHTML = "Contact me!"
        textVar.aboutP.innerText = "Hello, my name is Felix. (Known as FrontFelix). I am a frontend developer. I have been working with frontend for the past 4 years which has given me a lot of experience how to work with clients and co-workers such as backend developers."
    }
}


function UpdateSwedish() {
    localStorage.setItem('language', "Swe")
    divVar.language.style.display = "none"
    divVar.body.style.display = "block"
    setLanguageSwe()
}

function UpdateEnglish() {
    localStorage.setItem('language', "Eng")
    divVar.language.style.display = "none"
    divVar.body.style.display = "block"
    setLanguageEng()
}

function setLanguage(item) {
    let language = item.id
    if(language === "swedish") {
        UpdateSwedish()
    }else if(language === "english") {
        UpdateEnglish()
    }

}

function ClearMe() {
    localStorage.clear()
}


setLanguageEng()
setLanguageSwe()