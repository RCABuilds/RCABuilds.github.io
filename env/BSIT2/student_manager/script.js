import { id, make, setTitle } from "./rca.mjs"

constructor()
function constructor(){
    config()
    header()

    Aller()

    Paid()

    NP()
}
function config(){
    setTitle("BSIT 2")
}
function header(){
    make('section').from('header').to('body').content('').build()
    make

    //make('div').from('Status').to('#header').content('Status').build()
    make('div').from('NP').to('#header').content('Not Paid').build()
    make('div').from('Paid').to('#header').content('Paid').build()
    make('div').from('All').to('#header').content('All').build()

    id('All').addClass('head')
    document.getElementById('All').classList.toggle('active')
    id('Paid').addClass('head')
    id('NP').addClass('head')
    id('Status').addClass('head')
    
    make('section').from('SecondYear').to('body').content('BSIT 2B').build()

    head_function()
}

function Aller(){
    make('section').from('stud_all_list').to('body').content('').build()
    fetch('stud.json')
    .then(response => response.json())
    .then(data => {
    for(let i = 0; i < data.length; i++){
        make('div').from('stud_' + i).to('#stud_all_list').content('').build()
        id("stud_" + i).addClass('stud_box')

        make('div').from('studName_' + i).to('#stud_' + i).content(i+1 + ": " + data[i].Student_Name).build()
        id('studName_' + i).addClass('SName')

        //Status
        make('div').from('container' + i).to('#stud_' + i).content('').build()
        id('container' + i).addClass('container')

        make('div').from('studStatus_' + i).to('#container' + i).content(data[i].Status).build()

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

function Paid(){
    make('section').from('stud_paid_list').to('body').content('').build()
    fetch('stud.json')
    .then(response => response.json())
    .then(data => {
        let a = 0;
        for(let j = 0; j < data.length; j++){
            
            
            if(data[j].Status == 'Paid'){
                a++;
                make('div').from('studr_' + j).to('#stud_paid_list').content('').build()
                id('studr_' + j).addClass('stud_box')
                
                make('div').from('stud_Name_' + j).to('#studr_' + j).content(a + ": " + data[j].Student_Name).build()
                id('stud_Name_' + j).addClass('SName')

                make('div').from('containers' + j).to('#studr_' + j).content('').build()
                id('containers' + j).addClass('container')

                make('div').from('studStatusr_' + j).to('#containers' + j).content(data[j].Status).build()
                id('studStatusr_' + j).addClass('SPayed')

                make('div').from('studPendingr_' + j).to("#containers" + j).content("₱ " + data[j].Pending).build()
                id('studPendingr_' + j).addClass('SPending')
            }
        }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function NP(){
    make('section').from('stud_NP_list').to('body').content('').build()
    fetch('stud.json')
    .then(response => response.json())
    .then(data => {
        let b = 0;
        for(let j = 0; j < data.length; j++){
            if(data[j].Status == 'Paid'){
            }
            else{
                b++;
                make('div').from('studrs_' + j).to('#stud_NP_list').content('').build()
                id('studrs_' + j).addClass('stud_box')
                
                make('div').from('stud_Name_' + j).to('#studrs_' + j).content(b + ": " + data[j].Student_Name).build()
                id('stud_Name_' + j).addClass('SName')
    
                make('div').from('containerss' + j).to('#studrs_' + j).content('').build()
                id('containerss' + j).addClass('container')
    
                //Continue Here <--
                make('div').from('studStatusrs_' + j).to('#containerss' + j).content(data[j].Status).build()
                let stats = data[j].Status
                if(stats == 'Not Yet'){
                    id('studStatusrs_' + j).addClass('SNot')
                }
                else if(stats == 'Half Paid'){
                    id('studStatusrs_' + j).addClass('SHalf')
                }
              
                id('studStatusrs_' + j).addClass('SPayed')
    
                make('div').from('studPendingrs_' + j).to("#containerss" + j).content("₱ " + data[j].Pending).build()
                id('studPendingrs_' + j).addClass('SPending')
            }
        }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function head_function(){
    const All = document.getElementById('All');
    const Paid = document.getElementById('Paid');
    const NP = document.getElementById('NP');
    if(All){
        All.addEventListener('click', ()=>{
            document.getElementById('stud_all_list').style.display = "block"
            document.getElementById('stud_paid_list').style.display = "none"
            document.getElementById('stud_NP_list').style.display = "none"

            document.getElementById('All').classList.add('active')
            document.getElementById('Paid').classList.remove('active')
            document.getElementById('NP').classList.remove('active')

        })
    }
    if(Paid){
        Paid.addEventListener('click', ()=>{
            document.getElementById('stud_all_list').style.display = "none"
            document.getElementById('stud_paid_list').style.display = "block"
            document.getElementById('stud_NP_list').style.display = "none"

            document.getElementById('All').classList.remove('active')
            document.getElementById('Paid').classList.add('active')
            document.getElementById('NP').classList.remove('active')
        })
    }
    if(NP){
        NP.addEventListener('click', ()=>{
            document.getElementById('stud_all_list').style.display = "none"
            document.getElementById('stud_paid_list').style.display = "none"
            document.getElementById('stud_NP_list').style.display = "block"

            document.getElementById('All').classList.remove('active')
            document.getElementById('Paid').classList.remove('active')
            document.getElementById('NP').classList.add('active')
        })
    }
}