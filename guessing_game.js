var colors = generateRandomColor(6);
var sq = document.querySelectorAll(".square");
var pickedColor = pickColor();
var level = 6;
var easy = document.querySelector("#elevel");
var done = false;

var reset_button = document.querySelector(".reset");
reset_button.addEventListener("click",function(){
    reset(level);
});
easy.addEventListener("click",function(){
    easy.classList.add("selected")
    hard.classList.remove("selected");
    level=3;
    reset(3);
});
var hard = document.querySelector("#hlevel");
hard.addEventListener("click",function(){
    level=6;
    easy.classList.remove("selected");
    hard.classList.add("selected");
    reset(6);
});

hard.classList.add("selected");
reset(level);

var updateRgb =  document.querySelector("#rgb");
updateRgb.textContent=pickColor();
var answerColor = document.querySelector("#rgb").textContent;
var msg = document.querySelector("#message");
var heading = document.querySelector("h1");
heading.style.background = "steelblue";
for(let i = 0;i<sq.length;i++){
    sq[i].addEventListener("click",function(){
        if(done)return;
        pickedColor = colors[i];
        if(answerColor==pickedColor){
            msg.textContent = "Success";
            changeButtonColor();
            done = true;
            heading.style.background = pickedColor;
            msg.classList.add("success");
            msg.classList.remove("fail");
            change_color(pickedColor);
        }
        else {
            sq[i].style.backgroundColor = "rgb(3, 291, 251)";
            msg.textContent = "Try Again!";
            msg.classList.remove("success");
            msg.classList.add("fail");
        }
    });
}

function change_color(color){
    for(let i = 0;i<level;i++){
        sq[i].style.backgroundColor = color;
    }
}
function pickColor(){
    return colors[Math.floor(Math.random(0,7)*colors.length)]
}


function reset(num){
    if(level==6){
        hard.style.backgroundColor = "steelblue";
        easy.style.backgroundColor = "whitesmoke";
    }else{
        easy.style.backgroundColor = "steelblue";
        hard.style.backgroundColor = "whitesmoke";
    }
    done=false;
    reset_button.addEventListener("mouseover",function (){
        reset_button.style.backgroundColor="steelblue";
    });
    reset_button.addEventListener("mouseout",function (){
        reset_button.style.backgroundColor="whitesmoke";
    });
    colors = generateRandomColor(num);
    for(let i = 0;i<num;i++){
        if(sq[i].style.display == "none")sq[i].style.display = "block";
        sq[i].style.backgroundColor = colors[i];
    }
    for(let i = num;i<sq.length;i++){
        sq[i].style.display = "none";
    }
    updateRgb =  document.querySelector("#rgb");
    updateRgb.textContent=pickColor();
    answerColor = document.querySelector("#rgb").textContent;
    msg = document.querySelector("#message");
    var heading = document.querySelector("h1");
    heading.style.background = "steelblue";
    var msg = document.querySelector("#message");
    msg.classList.remove("success");msg.classList.remove("fail");
    msg.textContent="";
}

function generateRandomColor(num){
    var arr = []
    for(let i = 0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    return "rgb("+Math.floor(Math.random(0)*256)+","+Math.floor(Math.random(0)*256)+","+Math.floor(Math.random(0)*256)+")";
}

function changeButtonColor(){
    if(level==6){
        hard.style.backgroundColor = answerColor;
    }else easy.style.backgroundColor = answerColor;
    reset_button.addEventListener("mouseover",function (){
        reset_button.style.backgroundColor=answerColor;
    });
    reset_button.addEventListener("mouseout",function (){
        reset_button.style.backgroundColor="whitesmoke";
    });
}