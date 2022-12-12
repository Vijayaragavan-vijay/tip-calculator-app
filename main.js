let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let amountInput = document.querySelector('#amount');
let peopleInput = document.querySelector('#peoplecount');
let tipperperson = document.querySelector('#tipamount');
let totalperperson = document.querySelector('#totalamount');
let resetbtn = document.querySelector('#but');

const counterr = document.querySelector('#counterr');
let billvalue = 0.0;
let personvalue = 1;


amountInput.addEventListener('input', amountinputfunc);
peopleInput.addEventListener('keyup', peopleinputfunc);

// amountInput.value = "0.0";
// peopleInput.value = "1";
tipperperson.innerHTML = "$" + (0.0).toFixed(2);
totalperperson.innerHTML = "$" + (0.0).toFixed(2);



function amountinputfunc() {
    billvalue = parseFloat(amountInput.value);
    //console.log(billvalue);
    calculateTip(flag, billvalue, personvalue)

}

function peopleinputfunc() {
    personvalue = parseFloat(peopleInput.value);
    console.log(personvalue);
    if (personvalue == 0) {
        counterr.innerHTML = `Can't be zero`;
        counterr.style.display = "block";
        counterr.style.fontSize = '16px';
        counterr.previousElementSibling.style.borderColor = 'red';
        counterr.previousElementSibling.style.outlineColor = 'red';
    } else {
        counterr.style.display = "none";
        counterr.previousElementSibling.style.borderColor = 'hsl(172, 67%, 45%)';
    }

    calculateTip(flag, billvalue, personvalue)
}


let custom = document.querySelector('#custom');
let flag = 0;
// let resetBut = document.querySelector('#but');
// resetBut.removeAttribute('disabled')

// resetBut.addEventListener('click', () => {
//     personvalue = 0;
//     billvalue = 0;
//     tipperperson = "$" + (0.0).toFixed(2);
//     totalperperson.innerHTML = "$" + (0.0).toFixed(2);
// })
btn1.addEventListener('click', (a) => {
    a.preventDefault();
    let btnval = btn1.value;
    flag = btnval;
    calculateTip(btnval, billvalue, personvalue);
    console.log((billvalue * (btnval / 100)) / personvalue);
})
btn2.addEventListener('click', (b) => {
    b.preventDefault();
    let btnval = btn2.value;
    flag = btnval;
    calculateTip(btnval, billvalue, personvalue);
})
btn3.addEventListener('click', (c) => {
    c.preventDefault();
    let btnval = btn3.value;
    flag = btnval;
    calculateTip(btnval, billvalue, personvalue);
})
btn4.addEventListener('click', (d) => {
    d.preventDefault();
    let btnval = btn4.value;
    flag = btnval;
    calculateTip(btnval, billvalue, personvalue);
})
btn5.addEventListener('click', (e) => {
    e.preventDefault();
    let btnval = btn5.value;
    flag = btnval;
    calculateTip(btnval, billvalue, personvalue);

})
custom.addEventListener('keyup', (f) => {
    let btnval = custom.value;
    flag = btnval;
    calculateTip(btnval, billvalue, personvalue)
})




function calculateTip(buttonvalues, billvalue, personvalue) {
    let tips = (billvalue * (buttonvalues / 100)) / personvalue;
    let totalamount = (billvalue / personvalue) + (tips);
    tipperperson.innerHTML = "$" + tips.toFixed(2);
    totalperperson.innerHTML = "$" + totalamount.toFixed(2);


}

but.addEventListener('click', () => {
    tipperperson.innerHTML = '$' + (0.0).toFixed(2);
    totalperperson.innerHTML = '$' + (0.0).toFixed(2);
    amountInput.value = null;
    peopleInput.value = null;
    billvalue = 0;
    personvalue = 1;
    custom.value = null;
})