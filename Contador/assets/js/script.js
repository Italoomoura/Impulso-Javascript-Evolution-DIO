var x = 0;

function verificaNegativo(){
    if(x < 0){
        document.getElementById("num").style.color = "rgb(255, 0, 0)";
    }
    else if(x == 0){
        document.getElementById("num").style.color = "rgb(255, 255, 255)";
    }
    else{
        document.getElementById("num").style.color = "rgb(255, 255, 255)";
    }
}

function mais(){
    console.log(x);
    x++;
    document.getElementById("num").innerHTML = x;
    verificaNegativo();
}

function menos(){
    console.log(x);
    x--;
    document.getElementById("num").innerHTML = x;
    verificaNegativo(x);
}