import { fav_icon, img, make, print, id, readJSONFile, openLink} from 'https://rcabuilds.github.io/src/js/rca.mjs';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";




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
    make("h1").from("gate_keep_mess").to("#google_login").content("Welcome to Hakdog").build()
    
    make("div").from("container_A000").to("#google_login").build()
        make()

    
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