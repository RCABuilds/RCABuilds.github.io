import { fav_icon, img, make, print, id, readJSONFile, openLink} from './rca.mjs';

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
    //heading()
    //content()
    header()
    greetings()
}

function header(){
    make("section").from("header").to("body").build()

    // Home
        //-> Collection of News

    let selection = ["Software", "Games"]
    // Apps
    // Games
    for(let i = 0; i < selection.length; i++){
        let value = (selection[i]).toString().toUpperCase()
        make("div").from(value).to("#header").content(selection[i]).build()
        id(value).addClass("selection")
    }

    // Account
    make("div").from("ACCOUNT").to("#header").content("Account | Login").build()
}


function greetings(){
    make("div").from("banner").to("body").build()
        img("assets/ice_cream.jpg").from("nano").to("#banner").build()
        make("h1").from("hello").to("#banner").content("Welcome to ReCruAs").build();
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

    make("div").from("content_container").to("body").build()

    const fileUrl = "src/js/content.json";
    readJSONFile(fileUrl)
    .then((jsonData) => {
        if (jsonData) {
            for(let i = 0; i < jsonData.length; i++){
                make("div").from("data_" + jsonData[i].title).to("#content_container").build()
                document.getElementById("data_" + jsonData[i].title).className = "content_box"
                img(jsonData[i].thumbnail).from("data_img_" + jsonData[i].title).to("#data_" + jsonData[i].title)
                document.getElementById("data_img_" + jsonData[i].title).className = "content_img"
                
                make("ul").from("list_cate_" + jsonData[i].title).to("#data_" + jsonData[i].title).build()
                document.getElementById("list_cate_" + jsonData[i].title).className = "categ"
                
                for(let j = 0; j < jsonData[i].tags.length; j++){
                    //print(jsonData[i].tags[j])
                    make("li").from("list_" + jsonData[i].tags[j] + "_" + jsonData[i].title).to("#list_cate_" + jsonData[i].title).content(jsonData[i].tags[j]).build()
                    document.getElementById("list_" + jsonData[i].tags[j] + "_" + jsonData[i].title).className = "list_cate"
                }

                make("h3").from("title").to("#data_" + jsonData[i].title).content(jsonData[i].title).build()
                let value_title = document.getElementById("data_" + jsonData[i].title)
                if(value_title){
                    value_title.addEventListener('dblclick', () => {
                        //print(value_title)    
                               
                    })
                }
            }
        }
    })
    .catch((error) => {
        // Handle any errors that occurred during file reading
        console.error("Error:", error);
    });




}

function foot(){

    var soc_med = [
        "Facebook", "YouTube", "TikTok", "Instagram", "Threads", "Twitter"
    ]
}