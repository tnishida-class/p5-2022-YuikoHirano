// 最終課題を制作しよう

function setup(){
  createCanvas(400, 400);
  background(255);  
  noStroke();       
  for (let y = 0; y < 400; y += 10){
    if(y % 20 == 0){
      for (let x = 0 ; x < 400; x += 10){
        if(x % 20 == 0){ 
          fill('rgba(100,100,100,0.8)');    
          rect(x, y, 10, 10);
        }
        else{ 
          fill('rgba(100,100,100,0.4)');  
          rect(x, y, 10, 10);          
        }
      }
    }
    else{
      for (let x = 0; x < 400; x += 20){
        fill('rgba(100,100,100,0.4)');    
        rect(x, y, 10, 10);            
      }
    }
  }
  tree(200,80);
  snowflake();
 }
  
function tree(x1,y1){
  noStroke();
  fill(0,150,0);
  triangle(x1,y1,x1-80,y1+60,x1+80,y1+60);
  triangle(x1,y1+30,x1-115,y1+90,x1+115,y1+90);
  triangle(x1,y1+50,x1-135,y1+120,x1+135,y1+120);
  triangle(x1,y1+70,x1-115,y1+150,x1+115,y1+150);
  triangle(x1,y1+90,x1-135,y1+180,x1+135,y1+180);
  triangle(x1,y1+110,x1-115,y1+210,x1+115,y1+210);
  fill(80,81,40);
  rect(x1-25,y1+210,50,40);
  fill(255,204,0);
  star(x1,y1,30);
  
  for(i=0; i<6; i++){
   fill(random(255),random(255),random(255));
   ellipse(x1-60+i*25,y1+60+i*10,random(10,15));
   fill(random(255),random(255),random(255));
   ellipse(x1-60+i*25,y1+120+i*10,random(10,15));
   fill(random(255),random(255),random(255));
   ellipse(x1-75+i*25,y1+200-i*10,random(10,15));
   fill(random(255),random(255),random(255));
   ellipse(x1-85+i*25,y1+110-i*10,random(10,15));
   }
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function snowflake(){
  let snowflakes = [];
  let s = snowflakes[i];
   for(let i = 0; i < 30; i++){
    s = {x:random(400),
         y:random(400)};
    stroke('rgba(255,255,255,0.8)');
    line(s.x-10, s.y, s.x+10, s.y);
    line(s.x+cos(PI/3)*10, s.y+sin(PI/3)*10, s.x+cos(4*PI/3)*10, s.y+sin(4*PI/3)*10);
    line(s.x+cos(2*PI/3)*10, s.y+sin(2*PI/3)*10, s.x+cos(5*PI/3)*10, s.y+sin(5*PI/3)*10);
   }
 }