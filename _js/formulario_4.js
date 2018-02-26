const remote = require('electron').remote
const electron = require('electron')
const ipcRenderer = electron.ipcRenderer;
const main = remote.require('./main.js')
const db = require('electron-db');

let sel = document.getElementById("nDisp");
let tb2 = document.getElementById("tb2");
let tb3 = document.getElementById("tb3");
let btnp = document.getElementById("btnp");
let btnc = document.getElementById("btnc");

let data = {};
let data2 = {};
let data3 = {};
let obs;
let title;

sel.addEventListener('change', function(){
    let num = sel.value;
    console.log(num);
    
    if(num == 1){
        tb2.style.visibility = "hidden";
        tb3.style.visibility = "hidden";
    } else if(num == 2){
        tb2.style.visibility = "visible";
        tb3.style.visibility = "hidden";
    } else if(num == 3){
        tb2.style.visibility = "visible";
        tb3.style.visibility = "visible";
    }
});

btnc.addEventListener('click', () => {
    fechaJanela();
});

btnp.addEventListener('click', ()=>{
    let num = sel.value;
    
    if(num == 1){
        data = getData("",data);
    } else if(num == 2){
        data = getData("",data);
        data2 = getData("s",data2);
    } else if(num == 3){
        data = getData("",data);
        data2 = getData("s",data2);
        data3 = getData("t",data3);
    }
    obs = document.getElementById("obs").value;

    main.openWindow('formulario_5', 1400, 900);
    // salvaDados(title, dados);
    fechaJanela();
})

function fechaJanela(){
    var win = remote.getCurrentWindow();
    win.close();
}

function getData(cod,obj){
    for(let i =0;i<40;i++){
        obj[i] = document.getElementById(cod+i).value;
    }
    return obj;
}

ipcRenderer.send('get-title', '*');
ipcRenderer.once('title-reply', function(event, arg){
    title = arg;
});

function salvaDados(titulo, obj){
    db.insertTableContent(titulo, obj, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    })
}