// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     if((i+j)%2==1){
      fill(170);
      rect(i*25,j*25,25,25);
     }
       // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
     }
   }
  for(i=0; i<8; i++){
    for(j=0; j<3; j++){
     if((i+j)%2==1){
      fill(255,0,0)
      circle(25*i+(25/2),25*j+(25/2),20)
     }
    }
  }
  for(i=0; i<8; i++){
    for(j=5; j<8; j++){
     if((i+j)%2==1){
      fill(0)
      circle(25*i+(25/2),25*j+(25/2),20)
  }
 }
}
}
