const no = document.getElementById("no");
const yes = document.getElementById("yes");

if(no){
    no.addEventListener('click', () => {
        no.style.transition = "0.3s ease"
        let x = Math.random() * 80;
        let y = Math.random() * 80;
        no.style.top = y + "%"
        no.style.left = x + "%"
        
    })
}
if (yes) {
    yes.addEventListener('click', () => {
        yes.style.transition = "0.3s ease"
        let x = Math.random() * 80;
        let y = Math.random() * 80;
        yes.style.top = y + "%"
        yes.style.left = x + "%"
    })
}

//window.open("yey.htm", "_self")
