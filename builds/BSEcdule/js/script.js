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
    dataFetch2()
    controlWeek(true)
    footer()
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

function dataFetch2(){
    let acc = new uni_vars()
    let main_section = document.getElementById("main_section")
    let scheduleData = data[document.title]; console.log(document.title)
    for(i = 0; i < acc.days.length; i++){
        let containers = document.createElement("ol")                
        let header = document.createElement("div")
        header.innerHTML = acc.days[i]
        containers.id = acc.days[i]
        header.id = "header"
        containers.appendChild(header)
        main_section.appendChild(containers)

        
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
                //Class
                //Code
            }
        }
    }
    
}

function dataFetch(){
    let main_section = document.getElementById("main_section")
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let scheduleData = data["BSIT_1B"];
    for(i = 0; i < days.length; i++){        
        let weekject = document.createElement("ol");
        let weeklet = document.createElement("div");
        weeklet.innerHTML = days[i]
        weeklet.id = "rott" //--> ????
        weekject.id = days[i]
        main_section.appendChild(weekject)
        weekject.appendChild(weeklet)

        for (let sub in scheduleData) {
            if (scheduleData[sub]['Day'].includes(days[i])) {
                let cone = document.createElement("div")
                cone.id = "cone"
                let layerA000 = document.createElement("div")
                cone.appendChild(layerA000)
                layerA000.id = "layerA000"
                
                let subject = document.createElement("h4"); //--> Subject
                subject.innerHTML = scheduleData[sub]['subject']  
                subject.id = "subjects"
                weekject.appendChild(cone)
                layerA000.appendChild(subject)

                //teacher
                let teacher = document.createElement("ul")
                teacher.innerHTML = scheduleData[sub]["Teacher"]
                teacher.id = "teacher"
                layerA000.appendChild(teacher)
                
                let ww = document.createElement("div")//--> where and when?
                ww.id = "ww"
                cone.appendChild(ww)
                //room                
                let room = document.createElement("ul")
                room.innerHTML = "Room: " +  scheduleData[sub]["Room"]
                room.id = "room"
                ww.appendChild(room)
                //time
                let time_div = document.createElement("div")
                time_div.id = "time"
                ww.appendChild(time_div)
                let timeA = document.createElement("ol")
                timeA.innerHTML = scheduleData[sub]["Time"][0]
                timeA.id = "time_start"
                let timeB = document.createElement("ol")
                timeB.innerHTML = scheduleData[sub]["Time"][1]
                timeB.id = "time_end"
                time_div.appendChild(timeA)
                time_div.appendChild(timeB)

                //image deck
                let imgx = document.createElement("img")
                imgx.id = "imgx"
                imgx.src = "img/subs/" + scheduleData[sub]['subject'] + ".png"
                cone.appendChild(imgx)
                
                let down_deck = document.createElement("div")
                down_deck.id = "down_deck"
                cone.appendChild(down_deck)
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

function footer (){
    let footer = document.getElementById("footer")
    acc = new uni_vars()
    let week = document.createElement("ul")
    week.id = "linggo"
    let today = acc.today()
    for(i = 0; i < acc.days.length; i++){
        let day = document.createElement("button")
        day.innerHTML = acc.days[i]
        day.className = "araw"
        day.id = "Sub" + acc.days[i]
        if ("Sub" + today == "Sub" + acc.days[i]){
            day.classList.add("today")
        }
        else{
            day.classList.remove("today")
        }
        week.appendChild(day)

    }
    
    footer.appendChild(week)
    
}

function functionX(){
    acc = new uni_vars()
    for(i = 0; i < acc.Subday.length; i++){
        //console.log(acc.Subday[i])
        const subs = document.getElementById(acc.Subday[i])

        if (subs) {
            subs.addEventListener('click', () =>{
                for(i = 0; i < acc.days.length; i++){
                    //console.log(acc.days[i])
                    //console.log(subs.textContent)
                    let which = subs.textContent
                    let currentDay = acc.days[i]
                    //let day = document.getElementById(acc.days[i])
                    //console.log(which + " " + currentDay)
                    if (which == currentDay) {
                        //console.log("You clicked " + currentDay)
                        document.documentElement.scrollTop = 0;
                        document.getElementById("Sub" + currentDay).classList.add("today")
                        document.getElementById(currentDay).style.display = ""
                    }
                    else if(which != currentDay){
                        try {
                            document.documentElement.scrollTop = 0;
                            document.getElementById("Sub" + currentDay).classList.remove("today")
                            document.getElementById(currentDay).style.display = "none"
                        } catch (Uncaught) {

                        }
                    }
                }
            })
        }
    }
}