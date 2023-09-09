import {IMP_JSON, id, make, setTitle } from "../rca.mjs";

function constructor(){
    config()
    HeadersX()
    functions()
}
constructor()

function config(){
    setTitle("BSIT 2")
    //Student_List()
}

function HeadersX(){
    make('section').from('header').to('body').content('').build()
      
    make('div').from('Status').to('#header').content('Status').build()
    make('div').from('NP').to('#header').content('Not Paid').build()
    make('div').from('Paid').to('#header').content('Paid').build()
    make('div').from('All').to('#header').content('All').build()

    id('All').addClass('head')
    id('Paid').addClass('head')
    id('NP').addClass('head')
    id('Status').addClass('head')
    
    make('section').from('SecondYear').to('body').content('BSIT 2B').build()
}

function Alls(){
    make('section').from('stud_all_list').to('body').content('').build()
}

function All_List(){
    fetch('stud.json')
    .then(response => response.json())
    .then(data => {
        // Now 'data' contains the parsed JSON
        /**
         * Allasdfdsf
         * Fully Paid
         * Not Fully Paid
        */
    //make('section').from('stud_all_list').to('body').content('').build()
    for(let i = 0; i < data.length; i++){
        make('div').from('stud_' + i).to('#stud_all_list').content('').build()
        

        id("stud_" + i).addClass('stud_box')

        make('div').from('studName_' + i).to('#stud_' + i).content(i+1 + ": " + data[i].Student_Name).build()
        id('studName_' + i).addClass('SName')

        //Status
        make('div').from('container' + i).to('#stud_' + i).content('').build()
        id('container' + i).addClass('container')

        make('div').from('studStatus_' + i).to('#container' + i).content(data[i].Status).build()
        //console.log(data[i].Status)
        let stats = data[i].Status
        if(stats == 'Paid'){
            id('studStatus_' + i).addClass('SPayed')
        }
        else if(stats == 'Not Yet'){
            id('studStatus_' + i).addClass('SNot')
        }
        else if(stats == 'Half Paid'){
            id('studStatus_' + i).addClass('SHalf')
        }

        make('div').from('studPending_' + i).to('#container' + i).content("₱ " + data[i].Pending).build()
        id('studPending_' + i).addClass('SPending')
    }

    })
    .catch(error => {
      console.error('Error:', error);
    });




}

function functions(){
    let status = document.getElementById('Status')
    let NP = document.getElementById('NP')
    let Paid = document.getElementById('Paid')
    let All = document.getElementById('All')

    All_List()
    

    if(status){
        status.addEventListener('click',()=>{
            //console.log('Status')
            document.getElementById('stud_all_list').remove()
            //Student_List()
        })
    }
    if(NP){
        NP.addEventListener('click',()=>{
            document.getElementById('stud_list').remove()
            //console.log('Status')
        })
    }
    if(Paid){
        Paid.addEventListener('click',()=>{
            document.getElementById('stud_list').remove()
            //console.log('Paid')
        })
    }
    if(All){
        All.addEventListener('click',()=>{
            //document.getElementById('stud_list').remove()
            document.getElementById('stud_all_list').style.display = "block"
            //Alls()

            document.getElementById('stud_all_list').removeChild()
        })
    }
}