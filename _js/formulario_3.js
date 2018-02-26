const remote = require('electron').remote
const electron = require('electron')
const ipcRenderer = electron.ipcRenderer;
const main = remote.require('./main.js')
const db = require('electron-db');


var estado = ['B-C','C-D', 'D-E', 'E-F', 'F-G', 'G-H', 'H-I', 'I-J', 'J-k'];
var count = 0;
var btnc = document.getElementById("btn-c");
var btnp = document.getElementById("btn-p");
var nfomr = document.getElementById("nform");
let title;


btnp.addEventListener('click', function(){
    if(count<8){
        // count++;
        // alteraEstado(count);
        main.openWindow('formulario_4', 1400, 900);
        fechaJanela();
    }else{
        // salvaDados(title, dados);
        // main.openWindow('formulario_4', 1400, 900);
        // fechaJanela();
    }

});

btnc.addEventListener('click', function(){
    fechaJanela();
});

function alteraEstado(num){
    document.getElementById("sel1").style.display = "none";
    nform.innerHTML = estado[num];
}

function fechaJanela(){
    var win = remote.getCurrentWindow();
    win.close();
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