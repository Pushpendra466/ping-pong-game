var x = 435;
var y = 0;
let ball = document.querySelector('#ball');
var rod1 = document.querySelector('#rod1');
var rod2 = document.querySelector('#rod2');
let rodl = 400;
let green = 0;
let red = 0;
// ball.style.left = "50px";

window.onkeypress = function(e){
    if(e.key =='Enter'){
        console.log("ent")
     startGame();
    }
    
}


var down = true;
var horizontal = true;
function startGame(){
    window.onkeypress = function(e){

        if(e.key=='d'||e.key=='D'){
            if(rodl<=700)
            {rodl = rodl+100;
            rod1.style.left = rodl+'px';
            rod2.style.left = rodl+'px';
        }
        }
        if(e.key=='a'||e.key=='A'){
            if(rodl>=100)
            {rodl = rodl-100;
            rod1.style.left = rodl+'px';
            rod2.style.left = rodl+'px';
        }
        }
        if(e.key =='Enter'){
            console.log("ent")
         startGame();
        }
        // console.log(rodl);
    }
var interval = setInterval(function(){
        if(down&&horizontal)
       { if(y>=410){
           down = false;
           if(rodl<=x&&x<=rodl+100){
            green = green + 50;
        }
        else{
            clearInterval(interval);
            alert("Red wins, Score :"+red);
            red = 0;
            green = 0;
            console.log("red Wins")
        }
           console.log("y hit")
       }
       else if(x>=850){
           horizontal = false;
           console.log("x hit");
       }
       else
        {x = x+2;
        y = y+2;
        ball.style.left = x+'px';
        ball.style.top = y+'px';}
    }
        if(!down&&!horizontal){
            if(y<=10){
                down = true ; 
                if(rodl<=x&&x<=rodl+100){
                    red = red+50;
                }
                else{
                    clearInterval(interval);
                    alert("Green wins, Score :"+green);
                    red = 0;
                    green = 0;
                    console.log("green Wins")
                }
            }
            else if(x<=10){
                horizontal = true;
            }
            else
           { x = x-2;
            y = y-2;
            ball.style.left = x+'px';
            ball.style.top = y+'px';}
        }
        
        if(horizontal&&!down){
            if(y<=10){
                down = true;
                if(rodl<=x&&x<=rodl+100){
                    red = red+50;
                }
                else{
                    clearInterval(interval);
                    alert("Green wins, Score :"+green);
                    red = 0;
                    green = 0;
                    console.log("green Wins")
                }
            }
            else if(x>=850){
                horizontal = false;
            }
            y = y-2;
            x = x+2;
            ball.style.left = x+'px';
            ball.style.top = y+'px';
        }

        if(down&&!horizontal){
            if(x<=10){
                horizontal = true;
            }
            else if(y>=410){
                down = false;
                if(rodl<=x&&x<=rodl+100){
                    green = green+50;
                }
                else{
                    clearInterval(interval);
                    alert("Red wins, Score :"+red);
                    red = 0;
                    green = 0;
                    console.log("red Wins")
                }
                console.log("y1 hit",x)
            }
            else
            {ball.style.left = x+'px';
            ball.style.top = y+'px';
            x = x-2;
            y = y+2;}

        }

},10)

}