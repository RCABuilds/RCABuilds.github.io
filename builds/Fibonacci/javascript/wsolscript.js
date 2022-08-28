cal = document.getElementById("calculate")
encal = document.getElementById("N")

if (N) {
    N.addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            erase()
            solve()
        }
    })
}

if (cal) {
    cal.addEventListener('click', ()=> {
        erase()
        solve()
    })
}

/*
if(N){
    N.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
           run()
        }
    });
}
*/

function solve() {
    const anz = document.getElementById("answer")
    uni_val = 0

    uni_val = uni_val+1
    div = document.createElement("div")
    anz.insertBefore(div, anz.children[uni_val])
    h1("Formula")

    uni_val = uni_val+1
    min_div = document.createElement("div")
    div.appendChild(min_div)
    
    sub_h2("F")
    sub_h4("N")
    sub_h2("=")
    sub_h2("F")
    sub_h4("N")
    sub_h4("-")
    sub_h4("2")
    sub_h2("+")
    sub_h2("F")
    sub_h4("N")
    sub_h4("-")
    sub_h4("1")

    uni_val = uni_val+1
    div = document.createElement("div")
    anz.insertBefore(div, anz.children[uni_val])

    h1("Main Answer")

    uni_val = uni_val+1
    min_div = document.createElement("div")
    div.appendChild(min_div)

    N = document.getElementById("N").value

    sub_h2("F")
    sub_h4(parseInt(N))
    sub_h2("=")

    A = 0
    B = 1

    aray = [A,B]
    N = N-1
    
    for (let index = 0; index < N; index++) {
        X = aray[aray.length-1] 
        X = X + aray[aray.length-2]
        aray.push(X)
        //sub_h2(X)
    }
    sub_h2(X)


    uni_val = uni_val+1
    div = document.createElement("div")
    anz.insertBefore(div, anz.children[uni_val])

    h1("Answer by Sequence_1")

    uni_val = uni_val+1
    min_div = document.createElement("div")
    div.appendChild(min_div)

    N = document.getElementById("N").value
    N = N-1

    A = 0
    B = 1
    sub_h2("F")
    sub_h4(N+1)
    sub_h2("=")

    sub_h2("{")
    sub_h2(A)
    sub_h2(",")
    sub_h2(B)

    fibonacci_seq = [A,B]
    for (let index = 0; index < N; index++) {
        X = fibonacci_seq[fibonacci_seq.length-1]
        X = X + fibonacci_seq[fibonacci_seq.length - 2]
        fibonacci_seq.push(X)
        sub_h2(",")
        sub_h2(X)
    }
    sub_h2("}")

    uni_val = uni_val+1
    div = document.createElement("div")
    anz.insertBefore(div, anz.children[uni_val])

    h1("Answer by Sequence_2")

    uni_val = uni_val+1
    min_div = document.createElement("div")
    div.appendChild(min_div)

    uni_val = uni_val+1
    extra_min_div = document.createElement("div")
    min_div.appendChild(extra_min_div)

    A = 0
    B = 1
    
    
    aray = [A,B]
    N = document.getElementById("N").value
    N = N - 1
    
    sub_xh2("X0 = " + A)
    sub_xh2("X1 = " + B)
    for (let index = 0; index < N; index++) {
        X = aray[aray.length-1] 
        X = X + aray[aray.length-2]
        aray.push(X)
        sub_xh2("X" + (index + 2) + " = " + X)
    }

    uni_val = uni_val+1
    div = document.createElement("div")
    anz.insertBefore(div, anz.children[uni_val])

    h1("How to Solve?")

    uni_val = uni_val+1
    min_div = document.createElement("div")
    div.appendChild(min_div)

    uni_val = uni_val+1
    extra_min_div = document.createElement("div")
    min_div.appendChild(extra_min_div)

    sub_xh2("1. First we must understand that fibonacci sequence are arranged in increasing order, that can be written as the sequence {1,1,2,3,5,8,13,21,34,55,89....} and so on.")
    sub_xh2("2. It's sequence is infinite that you can't memorize, so you have to undersand the pattern of calculating it.")
    sub_xh2("3. Calculating it is so easy and simple, for example, starting from {Fn} = {0,1}")
    sub_xh2("----- In order t know the next digit, just add the last and 2nd to the last numbers.")
    sub_xh2("----- 0, 1")
    sub_xh2("----- 0 (2nd to the last number), 1(last number)")
    sub_xh2("----- (2nd to the last number) + (last number) = {0, 1, 1}")
    sub_xh2("----- {0, 1(new 2nd to the last number), 1(new last number)}")
    sub_xh2("----- (new 2nd to the last number) + (new last number) = {0, 1, 1, 2}")
    sub_xh2("---------- Just repeat it until you reach the Nth Term")
}



function erase(){
    var board = document.getElementById("answer")

    var erase = board.lastElementChild;
    while(erase){
        board.removeChild(erase);
        erase = board.lastElementChild;
    }
}







//Lazyscript Library
function sub_xh1(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h1")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    extra_min_div.appendChild(anotherstep)   
}

function sub_xh2(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h2")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    extra_min_div.appendChild(anotherstep)   
}

function sub_xh3(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h3")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    extra_min_div.appendChild(anotherstep)   
}

function sub_xh4(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h4")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    extra_min_div.appendChild(anotherstep)   
}

function sub_xh5(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h5")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    extra_min_div.appendChild(anotherstep)   
}

function sub_xh6(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h6")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    extra_min_div.appendChild(anotherstep)   
}
////
function sub_h1(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h1")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    min_div.appendChild(anotherstep)   
}

function sub_h2(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h2")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    min_div.appendChild(anotherstep)   
}

function sub_h3(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h3")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    min_div.appendChild(anotherstep)   
}

function sub_h4(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h4")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    min_div.appendChild(anotherstep)   
}

function sub_h5(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h5")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    min_div.appendChild(anotherstep)   
}

function sub_h6(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h6")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    min_div.appendChild(anotherstep)   
}

function h1(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h1")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    div.appendChild(anotherstep)   
}

function h2(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h2")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    div.appendChild(anotherstep)   
}

function h3(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h3")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    div.appendChild(anotherstep)   
}

function h4(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h4")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    div.appendChild(anotherstep)   
}

function h5(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h5")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    div.appendChild(anotherstep)   
}

function h6(thing) {
    //Another Step
    uni_val = uni_val+1
    anotherstep = document.createElement("h6")
    texty3 = document.createTextNode(thing)
    anotherstep.appendChild(texty3)
    div.appendChild(anotherstep)   
}