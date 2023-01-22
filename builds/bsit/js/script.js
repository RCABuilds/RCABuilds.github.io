let data;

fetch('js/object.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        displaySchedule();

    })
    .catch(error => {
        console.error('Error:', error);
    });

function displaySchedule() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let schedule = document.getElementById("schedule");
    let scheduleData = data["1B"];

    for (let i = 0; i < days.length; i++) { 
        let li = document.createElement("div"); 
        li.innerHTML = days[i]; 
        schedule.appendChild(li);

        let AMArr = []
        let PMArr = []     
        let x = 0;
        li.id = "week"
        for (let sub in scheduleData) {
            if (scheduleData[sub]['Day'].includes(days[i])) {
                let subject = document.createElement("ul");
                subject.style.color = "black"
                let classTimeA = document.createElement("div"); 
                let classTimeB = document.createElement("div"); 
                let teacher = document.createElement("p");
                let time_div = document.createElement("div");
                
                let code_div = document.createElement("section")
                let room = document.createElement("div");
                let classCodeA = document.createElement("div");
                let classCodeB = document.createElement("div");

                let time = scheduleData[sub]['Time'][0]            
                let amIndex = time.indexOf("am");
                let pmIndex = time.indexOf("pm");
                
                let imgx = document.createElement("img")
                

                if (amIndex !== -1) {
                    imgx.src = "img/" + scheduleData[sub]['subject'] + ".png"                    
                    AMArr.push(scheduleData[sub]['subject'])
                    subject.innerHTML = scheduleData[sub]['subject']  
                    subject.style.background = "rgb(65, 93, 255)"          
                    teacher.innerHTML = scheduleData[sub]["Teacher"]
                    teacher.style.color = "white"
                    classTimeA.innerHTML = scheduleData[sub]["Time"][0];
                    classTimeB.innerHTML = scheduleData[sub]["Time"][1];
                    room.innerHTML = "Room: " + scheduleData[sub]["Room"];
                    classCodeA.innerHTML = "Class: " + scheduleData[sub]["Class"]
                    classCodeB.innerHTML = "Code: "+ scheduleData[sub]["Code"]
                    
                } else if (pmIndex !== -1) {
                    imgx.src = "img/" + scheduleData[sub]['subject'] + ".png"
                    PMArr.push(scheduleData[sub]['subject'])
                    subject.innerHTML = scheduleData[sub]['subject']
                    subject.style.color = "white"
                    subject.style.background = "rgb(0, 13, 88)"          
                    teacher.innerHTML = scheduleData[sub]["Teacher"]
                    teacher.style.color = "white"
                    classTimeA.innerHTML = scheduleData[sub]["Time"][0];
                    classTimeB.innerHTML = scheduleData[sub]["Time"][1];
                    code_div.style.color = "black"
                    room.innerHTML = "Room: " + scheduleData[sub]["Room"];
                    classCodeA.innerHTML = "Class: " + scheduleData[sub]["Class"]
                    classCodeB.innerHTML = "Code: " + scheduleData[sub]["Code"]
                }

                li.appendChild(subject);
                subject.appendChild(imgx)
                subject.appendChild(teacher);                                
                subject.appendChild(code_div)
                subject.appendChild(time_div);
                code_div.appendChild(room)       
                code_div.appendChild(classCodeA)
                code_div.appendChild(classCodeB)

                time_div.appendChild(classTimeA);
                time_div.appendChild(classTimeB);  

                time_div.style.background = "none"
                                                   
            }
        }

    }
    
}

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
let currentWeekday = weekdays[today.getDay()];
//console.log(currentWeekday);

let divElements = document.getElementById("week")

for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id === "week" && divElements[i].innerText === "fri") {
        // Perform actions on the element here
        console.log(divElements[i]);
    }
}