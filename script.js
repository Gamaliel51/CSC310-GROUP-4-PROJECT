// Calculator button functions
function inputScreen(value){
    event.preventDefault()
    document.getElementById('scr').value += value
}

function calcAns(){
    event.preventDefault()
    let screen = document.getElementById('scr')
    let temp = screen.value.replaceAll("÷", "/")
    let result = eval(temp)
    screen.value = result
}

function delScreen(){
    event.preventDefault()
    let screen = document.getElementById('scr')
    screen.value = screen.value.slice(0,-1)
}

// Same page transition Code(Calculator)
function clickCalc(){
    event.preventDefault()

    let calcList = document.getElementsByClassName('calc')
    let calc = calcList[0]
    let bioList = document.getElementsByClassName('biodata')
    let bio = bioList[0]
    let formList = document.getElementsByClassName('form')
    let form = formList[0]

    bio.style.transitionDuration = '0ms'
    bio.style.width = '0'
    bio.style.visibility = 'hidden'

    form.style.transitionDuration = '0ms'
    form.style.width = '0'
    form.style.visibility = 'hidden'

    calc.style.width = '350px'
    calc.style.transitionDuration = '1000ms'
    calc.style.visibility = 'visible'
}

// Same page transition Code(Biodata)
function clickBio(){
    event.preventDefault()
   
    let calcList = document.getElementsByClassName('calc')
    let calc = calcList[0]
    let bioList = document.getElementsByClassName('biodata')
    let bio = bioList[0]
    let formList = document.getElementsByClassName('form')
    let form = formList[0]


    calc.style.transitionDuration = '0ms'
    calc.style.width = '0'
    calc.style.visibility = 'hidden'


    form.style.transitionDuration = '0ms'
    form.style.width = '0'
    form.style.visibility = 'hidden'

    bio.style.transitionDuration = '1000ms'
    bio.style.width = '100%'
    bio.style.visibility = 'visible'

}


// Same page transition Code(Form)
function clickForm(){
    event.preventDefault()
   
    let calcList = document.getElementsByClassName('calc')
    let calc = calcList[0]
    let bioList = document.getElementsByClassName('biodata')
    let bio = bioList[0]
    let formList = document.getElementsByClassName('form')
    let form = formList[0]


    calc.style.transitionDuration = '0ms'
    calc.style.width = '0'
    calc.style.visibility = 'hidden'

    bio.style.transitionDuration = '0ms'
    bio.style.width = '0'
    bio.style.visibility = 'hidden'

    form.style.position = 'absolute'
    form.style.margin = 'auto'
    form.style.marginTop = '40px'
    form.style.marginLeft = '300px'
    form.style.transitionDuration = '1000ms'
    form.style.width = '60%'
    form.style.visibility = 'visible'
}