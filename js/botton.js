const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function() {
    btn1.style.backgroundColor = "#ff0000";
    btn2.style.backgroundColor = "#FFF";
    btn3.style.backgroundColor = "#FFF";
});
btn2.addEventListener('click', function() {
    btn2.style.backgroundColor = "#ff0000";
    btn1.style.backgroundColor = "#FFF";
    btn3.style.backgroundColor = "#FFF";
});
btn3.addEventListener('click', function() {
    btn3.style.backgroundColor = "#ff0000";
    btn3.style.textColor = "#FFF";
    btn2.style.backgroundColor = "#FFF";
    btn1.style.backgroundColor = "#FFF";
});