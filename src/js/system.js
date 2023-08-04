import { fav_icon, img, make, print } from './rca.mjs';

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
}

function heading(){
    var mess = "I'm a tech enthusiast, 2D animator (Krita), and game developer (Godot 4). As a web developer, I work with Vanilla JS, HTML, and CSS. I also explore Android dev (Java/Python). My goal is to create impactful solutions for users. Grateful for the chance to contribute to tech."
    make("div").from("heading").to("body").content("").build()
    make("div").from("message_dock").to("#heading").build()
    make("div").from("welcome_dock").to("#message_dock").build()
    make("h1").from("welcome").to("#welcome_dock").content("Hello There!").build()
    make("h1").from("welcome_").to("#welcome_dock").content(" ...ReCruAs Here!").build()
    make("div").from("mess_container").to("#message_dock").build()
    make("p").from("message").to("#mess_container").content(mess).build()
}

function foot(){

    var soc_med = [
        "Facebook", "YouTube", "TikTok", "Instagram", "Threads", "Twitter"
    ]
}

/**
 * I am a dedicated individual with a passion for technology. As a hobbyist, I find joy in exploring various creative pursuits. As a 2D animator, I enjoy bringing visuals to life using Krita, striving to create captivating animations. In game development, I find pleasure in utilizing Godot 4 to craft engaging gaming experiences. As a web developer, I am constantly learning and improving my skills in Vanilla JavaScript, HTML, CSS, and more, with the goal of creating user-friendly websites. My knowledge extends to Android development with Android Studio and Java, where I work on building meaningful mobile applications. I also have experience coding in Python, Java, HTML, CSS, and JavaScript, allowing me to tackle various projects and challenges with humility. I aim to deliver creative and functional solutions that can positively impact users and audiences. I am grateful for the opportunity to contribute to the world of technology in my own small way.
 */