import { fav_icon, img, make, print, id} from './rca.mjs';

//make("h1").from("nodeId").to("body").content("Hello, World!").build();

function constructor(){
    configuration()
    body()
}
constructor()

function configuration(){
    document.title = "RCA"
    fav_icon("assets/icon.png")
}

function body(){
    //make("h1").from("").to("body").content("This website is still under development, and the developer is also lazy, and also it is still under renovations").build()
    heading()
    content()
}

function heading(){
    var mess = "I'm a tech enthusiast, 2D animator (Krita), and game developer (Godot 4). As a web developer, I work with Vanilla JS, HTML, and CSS. I also explore Android dev (Java/Python). My goal is to create impactful solutions for users. Grateful for the chance to contribute to tech."
    make("div").from("heading").to("body").content("").build()
    make("div").from("message_dock").to("#heading").build()
    make("div").from("welcome_dock").to("#message_dock").build()
    make("h1").from("welcome").to("#welcome_dock").content("Hello There!").build()
    make("h1").from("welcome_").to("#welcome_dock").content("~ReCruAs Here!").build()
    make("div").from("mess_container").to("#message_dock").build()
    make("p").from("message").to("#mess_container").content(mess).build()
}

function content(){
    make("div").from("sandwich_top").to("body").build()
    make("ul").from("categories").to("#sandwich_top").build()
    var category = [
        "All", "Animation", "Game Dev", "Website", "Edit"
    ]
    for (let i = 0; i < category.length; i++){
        make("li").from("which_" + category[i]).to("#categories").content(category[i]).build()
        document.getElementById("which_" + category[i]).className = "category_butts"
    }
}

function foot(){

    var soc_med = [
        "Facebook", "YouTube", "TikTok", "Instagram", "Threads", "Twitter"
    ]
}