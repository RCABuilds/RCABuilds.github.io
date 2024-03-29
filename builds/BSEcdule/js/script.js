let data;
let section = document.title

let mon = document.getElementById("Monday")
let tue = document.getElementById("Tuesday")
let wed = document.getElementById("Wednesday")
let thu = document.getElementById("Thursday")
let fri = document.getElementById("Friday")
let sat = document.getElementById("Saturday")

fetch('data/' + section + ".json")
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        displaySchedule();

    })
    .catch(error => {
        console.error('Error:', error);
    });

    
function displaySchedule(){
    constructor()
}


function constructor(){
    dataFetch3()
    controlWeek(true)
    functionToggle()
    functionX()
}

class uni_vars{
    days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Subday = ["SubSunday", "SubMonday", "SubTuesday", "SubWednesday", "SubThursday", "SubFriday", "SubSaturday"];

    today(){
        let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let today = new Date();
        let day = days[today.getDay()];
        return day;
    }
    
}

function dataFetch3(){
    let acc = new uni_vars()
    let main_section = document.getElementById("main_section")
    let scheduleData = data[document.title]; console.log(document.title)
    for(i = 0; i < acc.days.length; i++){
        let containers = document.createElement("ol")                
        let header = document.createElement("div")
        containers.id = acc.days[i]
        header.id = "header"

        let layerA000 = document.createElement("div")
        layerA000.id = "layerA000"
        header.appendChild(layerA000)

        let dato = document.createElement("h4")
        dato.innerHTML = acc.days[i]
        dato.id  = "dato" + acc.days[i]
        layerA000.appendChild(dato)

        containers.appendChild(header)
        main_section.appendChild(containers)

        let touches = document.createElement("div")
        touches.id = "touch" + acc.days[i]
        layerA000.appendChild(touches)

        //.bar1
        let bar1 = document.createElement("div")
        bar1.className = "bar1"
        //.bar2
        let bar2 = document.createElement("div")
        bar2.className = "bar2"
        //.bar3
        let bar3 = document.createElement("div")
        bar3.className = "bar3"

        document.getElementById("touch" + acc.days[i]).appendChild(bar1)
        document.getElementById("touch" + acc.days[i]).appendChild(bar2)
        document.getElementById("touch" + acc.days[i]).appendChild(bar3)

        let toggler = document.createElement("toggler")
        let week = document.createElement("ul")
        week.id = acc.days[i] + "linggo"
        let today = acc.today()

        let layerA001 = document.createElement("layerA001")
        layerA001.id = "layerA001"

        header.appendChild(layerA001)
        layerA001.appendChild(toggler)
        toggler.appendChild(week)
        lock = acc.days[i]
        for(j = 0; j < acc.days.length; j++){
            let day = document.createElement("button")


            day.innerHTML = acc.days[j]
            day.className = "araw"
            day.id = lock +  "Sub" + acc.days[j]
            if ("Sub" + acc.days[i] == "Sub" + acc.days[j]){
                day.classList.add("today")
            }
            else{
                day.classList.remove("today")
            }
            week.appendChild(day)
        }
        toggler.appendChild(week)

        for(let sub in scheduleData){
            if(scheduleData[sub]['Day'].includes(acc.days[i])){
                let sub_box = document.createElement("div")
                sub_box.id = "sub_box"
                containers.appendChild(sub_box)
                
                let layerA = document.createElement("div")
                sub_box.appendChild(layerA)
                layerA.id = "layerA"
                //image deck
                let imgx = document.createElement("img")
                imgx.id = "imgx"
                imgx.src = "img/subs/" + scheduleData[sub]['subject'] + ".png"
                layerA.appendChild(imgx)            
                //Subject
                let subject = document.createElement("h4")
                subject.innerHTML = scheduleData[sub]["subject"]
                subject.id = "subjects"
                layerA.appendChild(subject)
                //Teacher
                let teacher = document.createElement("ul")
                teacher.innerHTML = scheduleData[sub]["Teacher"]
                teacher.id = "teacher"
                layerA.appendChild(teacher)                

                let layerB = document.createElement("div")
                layerB.id = "layerB"
                sub_box.appendChild(layerB)
                //Room
                let room = document.createElement("ul")           
                room.innerHTML = "Room: " +  scheduleData[sub]["Room"]
                room.id = "room"
                layerB.appendChild(room)                
                //Time
                let time_div = document.createElement("div")
                time_div.id = "time"
                layerB.appendChild(time_div)
                let timeA = document.createElement("ol")
                timeA.innerHTML = scheduleData[sub]["Time"][0]
                timeA.id = "time_start"
                let timeB = document.createElement("ol")
                timeB.innerHTML = scheduleData[sub]["Time"][1]
                timeB.id = "time_end"
                time_div.appendChild(timeA)
                time_div.appendChild(timeB)

                //image deck
                let img2 = document.createElement("img")
                img2.id = "img2"
                img2.src = "img/subs/" + scheduleData[sub]['subject'] + ".png"
                sub_box.appendChild(img2)

                let down_deck = document.createElement("div")
                down_deck.id = "down_deck"
                sub_box.appendChild(down_deck)
                //class
                let classC = document.createElement("ol")
                classC.innerHTML = "Class: " + scheduleData[sub]["Class"]
                down_deck.appendChild(classC)
                //code
                let codeC = document.createElement("ol")
                codeC.innerHTML = "Code: " + scheduleData[sub]["Code"]
                down_deck.appendChild(codeC)
            }
        }

        
    }
}

function functionToggle(){
    let acc = new uni_vars()
    for(i = 0; i < acc.days.length; i++){
        const partition = document.getElementById("touch" + acc.days[i])

        

        if (partition) {
            partition.addEventListener('click', () => {
                partition.classList.toggle("change")
                
                for(b = 0; b < acc.days.length; b++){
                    //console.log(acc.days[b])
                    const nav = document.getElementById(acc.days[b] + "linggo");
                    if (nav.style.right === "0px") {
                        nav.style.right = "-1000px";
                        
                      } else {
                        nav.style.right = "0px";                        
                      }                                                                  
                }

            })
        }
    }

}


function controlWeek(ba){
    if (ba == true) {
        weekSort()
    }
    else{
        console.log("sorting disabled")
    }
}

function weekSort(){
    let access = new uni_vars()    
    let today = access.today()
        
    for(i = 0; i < access.days.length; i++){
        let whatDay = access.days[i]        
        if (whatDay == today) {
            //console.log("--> Today")
            //console.log(whatDay)
            document.getElementById(whatDay).style.display = ""
        }
        else{
            //console.log("--> Not Today")
            //console.log(whatDay)
            document.getElementById(whatDay).style.display = "none"
        }
    }
    
}

function functionX(){
    acc = new uni_vars()
    for (let i = 0; i < acc.days.length; i++) {
        //console.log(i)
        for (let j = 0; j < acc.days.length; j++) {
            //console.log(acc.days[i] + "Sub" + acc.days[j])
            let switcher = document.getElementById(acc.days[i] + "Sub" + acc.days[j])
            if (switcher) {
                switcher.addEventListener('click', () =>{

                    //console.log(acc.days[i])
                    let prev_notch = document.getElementById("touch" + acc.days[i])
                    prev_notch.classList.toggle("change")
                    for(x = 0; x < acc.days.length; x++){
                        const partition = document.getElementById("touch" + acc.days[x])
                        for(b = 0; b < acc.days.length; b++){
                            //console.log(acc.days[b])
                            const nav = document.getElementById(acc.days[b] + "linggo");
                            if (nav.style.right === "0px") {
                                nav.style.right = "-1000px";
                                
                              } else {
                                nav.style.right = "0px";                        
                              }                                                                  
                        }
                    }


                    let almond = acc.days[j]
                    //console.log(almond)
                    
                    for(let m = 0; m < acc.days.length; m++){
                        //console.log(acc.days[m])
                        let nut = acc.days[m]
                        document.documentElement.scrollTop = 0;
                        if (almond == nut) {
                            //console.log(nut + "-->")
                            document.getElementById(nut).style.display = ""
                        }
                        else if (almond != acc.days[m]) {
                            //console.log(nut)
                            document.getElementById(nut).style.display = "none"
                        }
                    }
                })
            }
        }
    }

}