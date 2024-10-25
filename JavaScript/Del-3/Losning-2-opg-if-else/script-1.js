function lagTall(){
    let tall = Math.floor(Math.random()*10) + 1;

    if (tall > 5){
        txtUt.textContent = `Tallet er stort (${tall}).`;
    }else{
        txtUt.textContent = `Tallet er lite (${tall}).`;
    }
}

let txtUt = document.getElementById("txtUt");
let btn = document.getElementById("btnLagTall");

btn.addEventListener("click", lagTall);