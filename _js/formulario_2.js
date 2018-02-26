const remote = require('electron').remote
const electron = require('electron')
const ipcRenderer = electron.ipcRenderer;
const main = remote.require('./main.js')
const db = require('electron-db');


var title;
var data = new Array(68);

for(let i = 0;i<data.lenght;i++){
    data[i] = [];
}

data[0] = [0,6,12,18,24];
data[1] = [1,7,13,19,25];
data[2] = [1,8,14,20,26];
data[3] = [3,9,15,21,27];
data[4] = [4,10,16,22,28];
data[5] = [30];
data[6] = [31];
data[7] = [32];
data[8] = [119];
data[9] = [33];
data[10] = [34];
data[11] = [35];
data[12] = [36];
data[13] = [37];
data[14] = [38];
data[15] = [39];
data[16] = [40];
data[17] = [42];
data[18] = [43];
data[19] = [45];
data[20] = [46];
data[21] = [48];
data[22] = [49];
data[23] = [51];
data[24] = [52];
data[25] = [54];
data[26] = [55];
data[27] = [57];
data[28] = [58];
data[29] = [60];
data[30] = [61];
data[31] = [62];
data[32] = [64];
data[33] = [66];
data[34] = [68];
data[35] = [70];
data[36] = [72];
data[37] = [74];
data[38] = [76];
data[39] = [120];
data[40] = [78];
data[41] = [80];
data[42] = [82];
data[43] = [84];
data[44] = [86];
data[45] = [87];
data[46] = [89];
data[47] = [90];
data[48] = [92];
data[49] = [93];
data[50] = [95];
data[51] = [96];
data[52] = [98];
data[53] = [99];
data[54] = [101];
data[55] = [102];
data[56] = [104];
data[57] = [105];
data[58] = [107];
data[59] = [108];
data[60] = [110];
data[61] = [111];
data[62] = [113];
data[63] = [114];
data[64] = [116];
data[65] = [117];
data[66] = [36,5,11,17,23,29,41,44,47,50,53,56,59,63,65,67,69,71,73,75,77,79,81,83,85,88,91,94,97,100,103,106,109,112,115,118,121];
data[67] = [122];


function setEstado(value){
    nform.innerHTML = estado[value];
}
//end structure
var nform = document.getElementById("nform");

var estado = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "k"];
var conv = [0,5,25,57.5,87.5];

function retornVal(num){
    return conv[num];
}

var dados ={};
var metricas = [];
for (let i =0;i<67;i++){
    dados[i] = [];
}


var count =0;
var btn = document.getElementById("btn-p");
var btc = document.getElementById("btn-c");

btn.addEventListener('click', ()=>{
    if(count<=10){
        nform.innerHTML = estado[count];
        for(let i =0;i<67;i++){
            let v = data[i];
            for(let j =0;j<v.length;j++){
                if(document.getElementById("i"+v[j]).value != ""){
                    dados[i].push( document.getElementById("i"+v[j]).value);
                    document.getElementById("i"+v[j]).value = "";
                }
            }
        }
        count++;
        setEstado(count);
        
        main.openWindow('formulario_3', 1400, 900);
        var win = remote.getCurrentWindow();
        win.close(); 
    }else if(count > 10){
        // salvaDados(title, dados);
        // main.openWindow('formulario_3', 1400, 900);
        // var win = remote.getCurrentWindow();
        // win.close(); 
    }
})

btc.addEventListener('click', ()=>{
    var win = remote.getCurrentWindow();
    win.close();
})


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