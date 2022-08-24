const go = document.getElementById("star");
const setB = document.getElementById("saber_glow");

var jar = 1;
if(go){
    go.addEventListener('click', () => {
        if (jar==1) {
          var width = 1;
          var id = setInterval(frame, 10);
          function frame() {
              if (width >= 100) {
                clearInterval(id);
              } else {
                width++; 
                setB.style.width = width + '%'; 
              }
            }
          frame()       
          jar = 2;   
        }
        else if (jar==2) {
          var width = 100;
          var id = setInterval(frame, 10);
          function frame() {
              if (width <= 0) {
                clearInterval(id);
              } else {
                width--; 
                setB.style.width = width + '%'; 
              }
            }
          frame()       
          jar = 1;    
        }

    })
}