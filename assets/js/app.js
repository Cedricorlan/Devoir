


//Exercice5

const text = document.getElementById('text');
const img = document.getElementById('img');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');


let change = false

text.addEventListener('mouseenter', function(){
  if(change === false){
    img.src = 'assets/image/home.jfif'
    change = true
  }else if(change === true){
    img.src = 'assets/image/Coffee in the mountains.jpeg'
    change = false
  }
  
});

text.addEventListener('mouseenter', function(){
  if(change === false){
    img2.src = 'assets/image/Coffee + Grace.jpeg'
    change = true
  }else if(change === true){
    img2.src = 'assets/image/Coffee in the mountains.jpeg'
    change = false
  }
  
});

text.addEventListener('mouseenter', function(){
  if(change === false){
    img3.src = 'assets/image/home2.jfif'
    change = true
  }else if(change === true){
    img3.src = 'assets/image/Coffee in the mountains.jpeg'
    change = false
  }
  
});


text.addEventListener('mouseenter', function(){
  if(change === false){
    img4.src = 'assets/image/Coffee + Grace.jpeg'
    change = true
  }else if(change === true){
    img4.src = 'assets/image/Coffee in the mountains.jpeg'
    change = false
  }
  
});

text.addEventListener('mouseenter', function(){
  if(change === false){
    img5.src = 'assets/image/home3.jfif'
    change = true
  }else if(change === true){
    img5.src = 'assets/image/Coffee in the mountains.jpeg'
    change = false
  }
  
});