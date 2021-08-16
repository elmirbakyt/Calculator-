const ontimes = () => {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result =parseInt(num1)*parseInt(num2)
    document.getElementById("res").innerHTML = `result: ${result}`
}

const onmins = () => {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result =parseInt(num1)-parseInt(num2)
    document.getElementById("res").innerHTML = `result: ${result}`
}

const onpls = () => {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result =parseInt(num1)+parseInt(num2)
    document.getElementById("res").innerHTML = `result: ${result}`
}

const ondivide = () => {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result =parseInt(num1)/parseInt(num2)
    document.getElementById("res").innerHTML = `result: ${result}`
}

const onstp = () => {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let result =parseInt(num1)**parseInt(num2)
    document.getElementById("res").innerHTML = `result: ${result}`
}