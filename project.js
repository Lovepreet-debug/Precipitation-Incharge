let input1 = document.querySelector(".prep-type");
let input2 = document.querySelector(".accu-type");
let input3 = document.querySelector(".temp-type");
let div = document.querySelector(".output");


let output = document.createElement("h2");
div.append(output);

let btn = document.querySelector(".bt");
let btn1 = document.querySelector(".bt-2");


btn.addEventListener("click", getTemp);
btn1.addEventListener("click", clearDisplay);

function clearDisplay() {
    output.innerHTML = '';
}


function getTemp() {

    let txt1 = input1.value;
    let txt2 = input2.value;
    let txt3 = input3.value;

    console.log(txt1)
    if (txt1 === 'mixed' && txt2 === '2.6-5.0' && txt3 === '<=-10') {
        output.innerHTML = "Dispatch one plow truck and one sand truck. The application rate of sand should be light";
    }
    if (txt1 === 'mixed' && txt2 === '2.6-5.0' && txt3 === '-10 to -5') {
        output.innerHTML = "Dispatch one plow truck and one salt truck. The application rate of salt should be light";
    }
    if (txt1 === 'mixed' && txt2 === '2.6-5.0' && txt3 === '>-5') {
        output.innerHTML = "Dispatch one plow truck";
    }
    if (txt1 === 'mixed' && txt2 === '5.1-15.0' && txt3 === '<=-10') {
        output.innerHTML = "Dispatch one plow truck and one sand truck. The applictaion rate of sand should be heavy";
    }
    if (txt1 === 'mixed' && txt2 === '5.1-15.0' && txt3 === '-10 to -5') {
        output.innerHTML = "Dispatch one plow truck and one salt truck. The application rate of salt should be heavy";
    }
    if (txt1 === 'mixed' && txt2 === '5.1-15.0' && txt3 === '>-5') {
        output.innerHTML = "Dispatch one plow truck and one salt truck. The application rate of salt should be normal";
    }
    if (txt1 === 'mixed' && txt2 === '15.1-45.0' && txt3 === '<=-10') {
        output.innerHTML = "Dispatch two plow trucks and one sand truck. The application rate of sand should be heavy";
    }
    if (txt1 === 'mixed' && txt2 === '15.1-45.0' && txt3 === '-10 to -5') {
        output.innerHTML = "Dispatch two plow trucks and one salt truck. The application rate of salt should be heavy";
    }
    if (txt1 === 'mixed' && txt2 === '15.1-45.0' && txt3 === '>-5') {
        output.innerHTML = "Dispatch two plow trucks and one salt truck. The application rate of salt should be light";

    }

    console.log("clicked");
}

