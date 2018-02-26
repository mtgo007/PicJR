let selImg = document.getElementById('selimg');
let img = document.getElementById('img');

selImg.addEventListener('change', ()=>{
    let val = selImg.value;
    if(val == "Vale em «V» raso"){
        img.src = "./_img/Rios/Raso.jpg";
    }
    if(val == "Vale em «V» profundo"){
        img.src = "./_img/Rios/Profundo.jpg";
    }
    if(val == "Garganta"){
        img.src = "./_img/Rios/Garganta.jpg";
    }
    if(val == "Concavo/abaulado"){
        img.src = "./_img/Rios/Concavo.jpg";
    }
    if(val == "Vale assimétrico"){
        img.src = "./_img/Rios/Assimetrico.jpg";
    }
    if(val == "Vale em «U»"){
        img.src = "./_img/Rios/U.jpg";
    }
    if(val == "Vale não perceptível"){
        img.src = "./_img/Rios/NaoPerceptivel.jpg";
    }
});