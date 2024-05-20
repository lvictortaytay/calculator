  // if(viewPort.value.length % 3 == 0){
        //     let savedVal = viewPort.value
        //     viewPort.value = ''
        //     viewPort.value += `, ${savedVal}`
        // }


let operationSign = ""
let operationBtn;
let firstNum;
let secNum;
let controller = 1 



const viewPort = document.querySelector("input")

const calculator = document.getElementById("equal")

const clearBtn = document.getElementById("AC")
document.addEventListener("click" , function(e){
    const value = (e.target.innerText)
    // console.log(value)
    
    if(value == "+" || value == "/" || value == "X" || value == "-"){
        controller === 1? controller =  2 : controller = 1
        console.log(controller)
        operationSign = value
        operationBtn = document.getElementById(`${value}`)
        // controller === 1? firstNum = viewPort.value : secNum = viewPort.value
        viewPort.value =  ""
        // console.log(operationBtn)
        console.log(operationSign)
        // console.log(operation)
        
    }else if(!Number.isInteger(Number(value))){
        console.log("wrong selection")
    }else{
        viewPort.value += Number(value)
    }

    controller === 1? firstNum = viewPort.value : secNum = viewPort.value
    console.log("first num " + firstNum)
    console.log("second num " + secNum)

})


function calculate(sign , firstNum , secNum){
    if(sign == "+"){
        return Number(firstNum) + Number(secNum)
    }
    if(sign == "-"){
        return Number(firstNum) - Number(secNum)
    }
    if(sign == "/"){
        return Number(firstNum) / Number(secNum)
    }
    if(sign == "X"){
        return Number(firstNum) * Number(secNum)
    }

    
}



    calculator.addEventListener("click" , function(){
   
        viewPort.value = calculate(operationSign, firstNum , secNum)
        
        console.log("equal sign")
        console.log("operation sign : " + operationSign)
        console.log("first num  : " + firstNum)
        console.log("second num  : " + secNum)
        console.log(viewPort.value)
    })



clearBtn.addEventListener("click" , function(){
        viewPort.value = ""
        firstNum = ""
        secNum = ""
        operationBtn;
        console.log(firstNum)
        console.log(secNum)
        console.log(operationBtn)
    
    })
