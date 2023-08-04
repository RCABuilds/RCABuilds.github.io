import { fav_icon, make } from './rca.mjs';

//make("h1").from("nodeId").to("body").content("Hello, World!").build();

function constructor(){
    configuration()
    body()
}
constructor()

function configuration(){
    document.title = "RCA Builds"
    fav_icon("assets/icon.png")
}

function body(){
    make("h1").from("").to("body").content("This website is still under development, and the developer is also lazy, and also it is still under renovations").build()
    var soc_med = [
        "Facebook", "YouTube", "TikTok", "Instagram", "Threads"
    ]
    for (let i = 0; i < soc_med.length; i++){
        //make("h1").from("id_" + soc_med[i]).to("body").content(soc_med[i]).build()
    }
}
