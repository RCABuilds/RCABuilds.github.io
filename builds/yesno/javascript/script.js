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
        window.open("yey.htm", "_self")
    })
}