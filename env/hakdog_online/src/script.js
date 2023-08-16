import { fav_icon, img, make, print, id, readJSONFile, openLink} from 'https://rcabuilds.github.io/src/js/rca.mjs';




function constructor(){
    header()
    gate_keep()
}
constructor()


function header(){
    fav_icon("./assets/hotdog.png");
    document.title = "Hakdog"
}

function gate_keep(){
    // Google Firebase
    make("section").from("google_login").to("body").build()
    make("div").from("centerfied").to("#google_login").build()
    make("h1").from("gate_keep_mess").to("#centerfied").content("Welcome to Hakdog").build()
    
    make("div").from("container_A000").to("#centerfied").build()
        img("./assets/google.webp").from("google_icon").to("#container_A000").build()
        make("h2").from("login_butts").to("#container_A000").content("Login with Google").build()
    
    const container_A000 = document.getElementById("container_A000");
    if (container_A000) {
        container_A000.addEventListener('click', ()=>{
            google()
        })
    }
}

function google(){
    print("hello world")
}

function body(){

    // All

    // Sunday

    // Monday

    // Tuesday

    // Wednesday

    // Thursday

    // Friday

    // Saturday

    // Holiday Plugin

    // Time Plugin

    // Current Schedule

    // Scrollable

    // Current Button

    // Bible 
}