

let number = document.querySelectorAll('.number')
let result = document.querySelector('.result')
let operation = document.querySelector('.operation')
let operator = document.querySelectorAll('.operator')
let cancel = document.querySelector('.cancel')
let equalKey = document.querySelector('.equalKey')
let overwrite = false

let sqr = document.querySelector('.sqr')
sqr.addEventListener('click',()=>result.innerHTML=Math.pow(parseFloat(result.innerHTML),2))

let sqrt = document.querySelector('.sqrt')
sqrt.addEventListener('click',()=>result.innerHTML=Math.sqrt(parseFloat(result.innerHTML)))

let mathPi = document.querySelector('.math-pi')
mathPi.addEventListener('click',() => result.innerHTML = Math.PI.toFixed(10))



cancel.addEventListener('click',clear)
function clear(){
    
    result.innerHTML = ''
    operation.innerHTML=''
    number[10].addEventListener('click',display)
}

for (let i=0; i<number.length ; i++){
    number[i].addEventListener('click',display)
        function display (){
            if(overwrite){
                result.innerHTML=''
                overwrite=false
            }
            result.innerHTML += number[i].textContent
                
                if (result.innerHTML.includes('.')){
                    number[10].removeEventListener('click',display)
                }
            
        }
}



for (let i=0;i<operator.length;i++){

    operator[i].addEventListener('click',operate)


}
function operate () {
    number[10].addEventListener('click',display)
    if (result.innerHTML !=='' && operation.innerHTML ==''){
        operation.innerHTML = result.innerHTML+this.textContent
        result.innerHTML =''
    }
    if (operation.innerHTML!=='' && result.innerHTML !==''){
        compute()
        operation.innerHTML = result.innerHTML+this.textContent
        result.innerHTML = ''
        number[10].addEventListener('click',display)

    }
}
  
function compute(){
    switch (operation.textContent[operation.textContent.length-1]){
        case  '+': 
        result.innerHTML = parseFloat(result.innerHTML) + parseFloat (operation.innerHTML)
        break
        case  '-': 
        result.innerHTML = parseFloat (operation.innerHTML) - parseFloat(result.innerHTML)
        break
        case  'x': 
        result.innerHTML = parseFloat (operation.innerHTML) * parseFloat(result.innerHTML)
        break
        case  '/': 
        result.innerHTML = (parseFloat (operation.innerHTML) / parseFloat(result.innerHTML))
        break

    }
}

equalKey.addEventListener('click',equal)

function equal (){
    overwrite = true
    console.log(overwrite)
    compute()
    operation.innerHTML = ''
    if (result.innerHTML.includes('.')){
        number[10].removeEventListener('click',display)
    }
    else {
        number[10].addEventListener('click',display)
    }

}




