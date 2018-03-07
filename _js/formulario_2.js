// // const remote = require('electron').remote
// // const electron = require('electron')
// // const ipcRenderer = electron.ipcRenderer;
// // const main = remote.require('./main.js')
// // const db = require('electron-db');


// // var title;

// // function setEstado(value){
// //     nform.innerHTML = estado[value];
// // }
// // //end structure
// // var nform = document.getElementById("nform");

// // var estado = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "k"];

var dados ={};



// // var count =0;
var btn = document.getElementById("btn-p");
// // var btc = document.getElementById("btn-c");

btn.addEventListener('click', ()=>{
//     // if(count<=10){
            //Dist M Esq
            dados[0] = geraArr(0,4);
            // Prof
            dados[1] = geraArr(5,9);
            //Codigo (Tam Class)
            dados[2] = geraArr(10,14);
            //Imersão
            dados[3] = geraArr(15,19);
            //Tipo B/F
            dados[4] = geraArr(20,24);
            //Obs
            dados[5] = geraArr(25,29);
//         //altera estado
//         // count++;
//         // setEstado(count);
        
//         // main.openWindow('formulario_3', 1400, 900);
//         // var win = remote.getCurrentWindow();
//         // win.close(); 
//     // }else if(count > 10){
//     //     // salvaDados(title, dados);
//     //     // main.openWindow('formulario_3', 1400, 900);
//     //     // var win = remote.getCurrentWindow();
//     //     // win.close(); 
//     // }
})

// // btc.addEventListener('click', ()=>{
// //     // var win = remote.getCurrentWindow();
// //     // win.close();
// // })


// // ipcRenderer.send('get-title', '*');
// // ipcRenderer.once('title-reply', function(event, arg){
// //     title = arg;
// // });





function geraArr(ini, end){
    var arr = [];
    var count = 0;
    for(var i = ini;i<=end;i++){
        arr[count] = document.getElementById(i).value;
        count++;
    }
    return arr;
}