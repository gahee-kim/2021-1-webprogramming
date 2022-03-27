

function music1() {
    const row = document.getElementById('tr1');
    show(row);
}

function music2() {
    const row = document.getElementById('tr2');
    show(row);
}

function music3() {
    const row = document.getElementById('tr3');
    show(row);
}

function music4() {
    const row = document.getElementById('tr4');
    show(row);
}
function music5() {
    const row = document.getElementById('tr5');
    show(row);
}
function music6() {
    const row = document.getElementById('tr6');
    show(row);
}
function music7() {
    const row = document.getElementById('tr7');
    show(row);
}
function music8() {
    const row = document.getElementById('tr8');
    show(row);
}
function music9() {
    const row = document.getElementById('tr9');
    show(row);
}
function music10() {
    const row = document.getElementById('tr10');
    show(row);
}

function show(row){
    if (row.style.display == 'none'){
        row.style.display = '';
    }
    else if(row.style.display == ''){
        row.style.display = 'none';
    }
}