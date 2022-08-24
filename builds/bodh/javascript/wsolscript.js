const convert_it = document.getElementById("con")
const val = document.getElementById("val")
const ans = document.getElementById("answer")
const touch = document.getElementById("touch")
const nav = document.getElementById("navbar")

ziggy = 0

function myFunction(x) {
    x.classList.toggle("change");
  }

if (touch) {
    touch.addEventListener('click', () =>{
        if (ziggy == 0) {
            nav.style.marginRight = "-10px"
            ziggy = 1
        }
        else if(ziggy == 1){
            nav.style.marginRight = "-1000px"
            ziggy = 0
        }
    })
}


if (val) {
    val.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            dino = document.getElementById("val").value
            if (dino == "0" || dino == "" || dino == " ") {
                var board = document.getElementById("answer")
                var erase = board.lastElementChild;
                while(erase){
                    board.removeChild(erase);
                    erase = board.lastElementChild;
                }
            }
            else{
                convert()
            }
        }
    });
}

if (convert_it) {
    convert_it.addEventListener('click', ()=>{
        dino = document.getElementById("val").value
        if (dino == "0" || dino == "" || dino == " ") {
            var board = document.getElementById("answer")
            var erase = board.lastElementChild;
            while(erase){
                board.removeChild(erase);
                erase = board.lastElementChild;
            }
        }
        else{
            convert()
        }
    })
}

function convert(){
    var board = document.getElementById("answer")

    var erase = board.lastElementChild;
    while(erase){
        board.removeChild(erase);
        erase = board.lastElementChild;
    }
    
    // Create a "li" element:
    //const newNode = document.createElement("h1");
    // Create a text node:
    /*const textNode = document.createTextNode("Water");

    // Append text node to "li" element:
    newNode.appendChild(textNode);

    // Insert before existing child:
    const list = document.getElementById("answer");
    list.insertBefore(newNode, list.children[0]);*/
    /*
    for (let i = 0; i < 5; i++) {
        //text += "The number is " + i + "<br>";
        const textNode = document.createTextNode("Water ");
        newNode.appendChild(textNode);
      }
        // Append text node to "li" element:
        

        // Insert before existing child:
        const list = document.getElementById("answer");
        list.insertBefore(newNode, list.children[0]);
    */

   connect()

}

function connect(){
    var dropd1 = document.getElementById('pd1');
    var STRING_OPTION_A = dropd1.options[dropd1.selectedIndex].text;//gets what is selected A


    var dropd2 = document.getElementById('pd2');
    var STRING_OPTION_B = dropd2.options[dropd2.selectedIndex].text;//gets what is selected B

    let val = document.getElementById('val').value;

    //alert(STRING_OPTION_A + " and " + STRING_OPTION_B)
    if (STRING_OPTION_A == STRING_OPTION_B) {
        alert("it is the same!")
    }

    else if (STRING_OPTION_A == "Decimal" && STRING_OPTION_B == "Binary") {
        num = val.toString().toUpperCase();
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)
        
        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Another Break
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 2 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr

        num = document.getElementById("val").value
        d = num*2
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/2);
            r = q%2;
            q = Math.floor(q/2);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 2")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(2) + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + num)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(2))
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }

    
    //Decimal to octal
    else if (STRING_OPTION_A == "Decimal" && STRING_OPTION_B == "Octal") {
        num = val.toString().toUpperCase();

        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 2 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr

        num = document.getElementById("val").value
        d = num*8
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/8);
            r = q%8;
            q = Math.floor(q/8);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 8")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(8) + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + num)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(8))
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }

    //Decimal to hex
    else if (STRING_OPTION_A == "Decimal" && STRING_OPTION_B == "Hex") {
        uni_val = 0
        num = val.toString().toUpperCase();

        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 2 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr

        num = document.getElementById("val").value
        d = num*16
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/16);
            r = q%16;
            q = Math.floor(q/16);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 16")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(16).toUpperCase() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Take note about the value of A,B,C,D,E,F, when converting something from or to hexadecimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
        //making a new div
        uni_val = uni_val + 1
        //makediv = document.createElement("div")
        lamesa = document.createElement("table")
        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("A")
        Aval = document.createElement("td")
        aval = document.createTextNode("10")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("B")
        Aval = document.createElement("td")
        aval = document.createTextNode("11")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("C")
        Aval = document.createElement("td")
        aval = document.createTextNode("12")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("D")
        Aval = document.createElement("td")
        aval = document.createTextNode("13")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("E")
        Aval = document.createElement("td")
        aval = document.createTextNode("14")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("F")
        Aval = document.createElement("td")
        aval = document.createTextNode("15")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)
        

        ans.insertBefore(lamesa, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + num)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(16).toUpperCase());
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }

    //Octal to Binary
    else if (STRING_OPTION_A == "Octal" && STRING_OPTION_B == "Binary") {
        num = val.toString().toUpperCase();
        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }
        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Firstly we have to convert to Decimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 8 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            ror = Math.pow(8, i);
            anz = reverse * ror
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 8")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            if (i==0) {
                textyee = document.createTextNode(" = " + reverse)
            }
            else{
                textyee = document.createTextNode(" = " + Math.round(anz))
            }
            
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(fixInput,8)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then convert it now to Binary:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 2 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr
        reset = document.getElementById("val").value
        num = parseInt(reset, 8)
        d = num*2
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/2);
            r = q%2;
            q = Math.floor(q/2);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 2")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(2) + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + num)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(2))
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }
    //Octal to Decimal
    else if (STRING_OPTION_A == "Octal" && STRING_OPTION_B =="Decimal") {
        num = val.toString().toUpperCase();
        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 8 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            ror = Math.pow(8, i);
            anz = ror * reverse
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 8")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            if (i==0) {
                textyee = document.createTextNode(" = " + reverse)
            }
            else{
                textyee = document.createTextNode(" = " + Math.round(anz))
            }
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(fixInput,8)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " +fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }
    //Octal to Hex
    else if (STRING_OPTION_A == "Octal" && STRING_OPTION_B == "Hex") {
        num = val.toString().toUpperCase();
        //anti leters and other number
        
        
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Firstly we have to convert to Decimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 8 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            ror = Math.pow(8, i);
            anz = ror * reverse
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 8")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")

            if (i==0) {
                textyee = document.createTextNode(" = " + reverse)    
            }
            else{
                textyee = document.createTextNode(" = " + Math.round(anz))
            }
            
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(val,8)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Take note about the value of A,B,C,D,E,F, when converting something from or to hexadecimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
        //making a new div
        uni_val = uni_val + 1
        //makediv = document.createElement("div")
        lamesa = document.createElement("table")
        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("A")
        Aval = document.createElement("td")
        aval = document.createTextNode("10")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("B")
        Aval = document.createElement("td")
        aval = document.createTextNode("11")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("C")
        Aval = document.createElement("td")
        aval = document.createTextNode("12")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("D")
        Aval = document.createElement("td")
        aval = document.createTextNode("13")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("E")
        Aval = document.createElement("td")
        aval = document.createTextNode("14")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("F")
        Aval = document.createElement("td")
        aval = document.createTextNode("15")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)
        

        ans.insertBefore(lamesa, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then convert it now to Hex:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 16 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr
        reset = document.getElementById("val").value
        num = parseInt(reset, 8)
        d = num*16
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/16);
            r = q%16;
            q = Math.floor(q/16);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 16")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(16).toUpperCase() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + num)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(16).toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }
    
    //Binary to Octal
    else if (STRING_OPTION_A == "Binary" && STRING_OPTION_B == "Octal") {
        num = val.toString().toUpperCase();
        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\', "2", "3", "4", "5", "6", "7", "8", "9"]
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Firstly we have to convert to Decimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 2 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            anz = Math.pow(reverse * 2, i);
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 2")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            textyee = document.createTextNode(" = " + Math.round(anz))
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(input,2)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then convert it now to Octal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 8 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr
        reset = document.getElementById("val").value
        num = parseInt(reset, 2)
        d = num*8
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/8);
            r = q%8;
            q = Math.floor(q/8);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 8")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(8) + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(8))
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }
    //Binary to Decimal
    else if (STRING_OPTION_A == "Binary" && STRING_OPTION_B =="Decimal") {
        num = val.toString().toUpperCase();
        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\', "2", "3", "4", "5", "6", "7", "8", "9"]
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }
        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 2 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            anz = Math.pow(reverse * 2, i);
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 2")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            textyee = document.createTextNode(" = " + Math.round(anz))
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(val,2)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }
    //Binary to Hex
    else if (STRING_OPTION_A == "Binary" && STRING_OPTION_B == "Hex") {
        num = val.toString().toUpperCase();
        //anti leters and other number
        const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\', "2", "3", "4", "5", "6", "7", "8", "9"]
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            num = num.replaceAll(element, "");

            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input)
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Firstly we have to convert to Decimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 2 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            anz = Math.pow(reverse * 2, i);
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 2")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            textyee = document.createTextNode(" = " + Math.round(anz))
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(val,2)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + fixInput)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then convert it now to Hex:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 16 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr
        reset = document.getElementById("val").value
        num = parseInt(reset, 2)
        d = num*16
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/16);
            r = q%16;
            q = Math.floor(q/16);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 16")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(16).toUpperCase() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Take note about the value of A,B,C,D,E,F, when converting something from or to hexadecimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
        //making a new div
        uni_val = uni_val + 1
        //makediv = document.createElement("div")
        lamesa = document.createElement("table")
        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("A")
        Aval = document.createElement("td")
        aval = document.createTextNode("10")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("B")
        Aval = document.createElement("td")
        aval = document.createTextNode("11")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("C")
        Aval = document.createElement("td")
        aval = document.createTextNode("12")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("D")
        Aval = document.createElement("td")
        aval = document.createTextNode("13")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("E")
        Aval = document.createElement("td")
        aval = document.createTextNode("14")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("F")
        Aval = document.createElement("td")
        aval = document.createTextNode("15")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)
        

        ans.insertBefore(lamesa, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + num)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(16).toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
    }

    //Hex to Binary
    else if (STRING_OPTION_A == "Hex" && STRING_OPTION_B == "Binary") {
        //restriction characters
        num = val.toString().toUpperCase();
        const UNESSESSARY_EXTRA = ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            
            num = num.replaceAll(element, "");
            fixInput = document.getElementById('val').value = num;
        }

        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input.toUpperCase())
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Take note about the value of A,B,C,D,E,F, when converting something from or to hexadecimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
        //making a new div
        uni_val = uni_val + 1
        //makediv = document.createElement("div")
        lamesa = document.createElement("table")
        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("A")
        Aval = document.createElement("td")
        aval = document.createTextNode("10")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("B")
        Aval = document.createElement("td")
        aval = document.createTextNode("11")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("C")
        Aval = document.createElement("td")
        aval = document.createTextNode("12")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("D")
        Aval = document.createElement("td")
        aval = document.createTextNode("13")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("E")
        Aval = document.createElement("td")
        aval = document.createTextNode("14")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("F")
        Aval = document.createElement("td")
        aval = document.createTextNode("15")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)
        

        ans.insertBefore(lamesa, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("First Convert it to Decimal")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 16 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //alert("jotaroo")
        //This
        val = fixInput
        reverse = val.split("").reverse().join("")
        //jojo = reverseString(val)
        //alert(jojo)

        amount = 0-1
        total = 0
        for (let i = 0; i < reverse.length; i++) {
            s2 = reverse.charAt(i)
            
            if (s2 == "a" || s2=="A") {
                s3 = s2.valueOf();
                s3 = "10";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*10
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "b" || s2=="B") {
                s3 = s2.valueOf();
                s3 = "11";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*11
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "c" || s2=="C") {
                s3 = s2.valueOf();
                s3 = "12";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*12
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "d" || s2=="D") {
                s3 = s2.valueOf();
                s3 = "13";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*13
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "e" || s2=="E") {
                s3 = s2.valueOf();
                s3 = "14";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*14
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "f" || s2=="F") {
                s3 = s2.valueOf();
                s3 = "15";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*15
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            /*else if (s2 == "0") {
                s3 = s2.valueOf();
                amount ++;

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(0))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }*/
            else{// if(s2=='1' || s2=='2' || s2=='3' || s2=='4' || s2=='5' || s2=='6' || s2=='7' || s2=='8' || s2=='9'){
                s3 = s2.valueOf();
                amount++;
                anz = Math.pow(16, amount);
                anss = anz*s3;
                total=total+anss;

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(amount)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
        }


        

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        /*
        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            ror = Math.pow(16,i)
            anz = ror*reverse
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 16")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            if(i==0){
                textyee = document.createTextNode(" = " + reverse)
            }
            else{
                textyee = document.createTextNode(" = " + Math.round(anz))
            }
            
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        */

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(val,16)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " +val.toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("And convert it now to Binary;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 2 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr

        num = decimal_value
        d = num*2
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/2);
            r = q%2;
            q = Math.floor(q/2);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 2")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(2) + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + document.getElementById("val").value.toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(2))
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        zip = document.getElementById("val").value.toUpperCase()
        document.getElementById("val").value = zip
    

    }
    //Hex to Octal
    else if (STRING_OPTION_A == "Hex" && STRING_OPTION_B == "Octal") {
        //restriction characters
        num = val.toString().toUpperCase();
        const UNESSESSARY_EXTRA = ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            
            num = num.replaceAll(element, "");
            fixInput = document.getElementById('val').value = num;
        }
        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input.toUpperCase())
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("First Convert it to Decimal")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Take note about the value of A,B,C,D,E,F, when converting something from or to hexadecimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
        //making a new div
        uni_val = uni_val + 1
        //makediv = document.createElement("div")
        lamesa = document.createElement("table")
        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("A")
        Aval = document.createElement("td")
        aval = document.createTextNode("10")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("B")
        Aval = document.createElement("td")
        aval = document.createTextNode("11")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("C")
        Aval = document.createElement("td")
        aval = document.createTextNode("12")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("D")
        Aval = document.createElement("td")
        aval = document.createTextNode("13")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("E")
        Aval = document.createElement("td")
        aval = document.createTextNode("14")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("F")
        Aval = document.createElement("td")
        aval = document.createTextNode("15")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)
        

        ans.insertBefore(lamesa, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 16 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //This
        //alert("jotaroo")
        //This
        val = fixInput
        reverse = val.split("").reverse().join("")
        //jojo = reverseString(val)
        //alert(jojo)

        amount = 0-1
        total = 0
        for (let i = 0; i < reverse.length; i++) {
            s2 = reverse.charAt(i)
            
            if (s2 == "a" || s2=="A") {
                s3 = s2.valueOf();
                s3 = "10";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*10
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "b" || s2=="B") {
                s3 = s2.valueOf();
                s3 = "11";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*11
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "c" || s2=="C") {
                s3 = s2.valueOf();
                s3 = "12";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*12
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "d" || s2=="D") {
                s3 = s2.valueOf();
                s3 = "13";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*13
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "e" || s2=="E") {
                s3 = s2.valueOf();
                s3 = "14";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*14
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "f" || s2=="F") {
                s3 = s2.valueOf();
                s3 = "15";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*15
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            /*else if (s2 == "0") {
                s3 = s2.valueOf();
                amount ++;

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(0))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }*/
            else{// if(s2=='1' || s2=='2' || s2=='3' || s2=='4' || s2=='5' || s2=='6' || s2=='7' || s2=='8' || s2=='9'){
                s3 = s2.valueOf();
                amount++;
                anz = Math.pow(16, amount);
                anss = anz*s3;
                total=total+anss;

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(amount)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
        }

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        guru = document.getElementById("val").value
        vals = parseInt(guru)

        dNum = vals
        reverse = 0
        i = -1

        while (vals>0) {
            reverse = Math.floor(vals%10);
            vals = Math.floor(vals/10);
            i++;
            
            anz = Math.pow(reverse * 16, i);
            if (reverse==0 || reverse==0.0) {
                anz=0.0;
            }
            //document.getElementById('text').value += "" + reverse + "x8^" + i + " = " + Math.round(ans)+"\n";
            //Lets make a div
            uni_val = uni_val + 1
            div = document.createElement("div")
            ans.insertBefore(div, ans.children[uni_val])

            uni_val = uni_val+1
            anotherstep = document.createElement("h3")
            sup = document.createElement("h4")
            texty3 = document.createTextNode(reverse + " x 16")
            suppy = document.createTextNode(i)

            equalz = document.createElement("h3")
            if(i==0){
                textyee = document.createTextNode(" = " + reverse)
            }
            else{
                textyee = document.createTextNode(" = " + Math.round(anz))
            }
            
            
            anotherstep.appendChild(texty3)
            equalz.appendChild(textyee)
            sup.appendChild(suppy)

            div.appendChild(anotherstep)
            div.appendChild(sup)
            div.appendChild(equalz)
            //ans.insertBefore(anotherstep, ans.children[uni_val])
            //ans.insertBefore(sup, ans.children[uni_val])
        }
        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(val,16)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " +val.toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("And convert it now to Octal;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Step 1 Line
        uni_val = uni_val + 1
        const step1 = document.createElement("h3")
        const step1_text = document.createTextNode("Divide the input(d) by 8 and note the remainder(r)")
        step1.appendChild(step1_text)
        ans.insertBefore(step1, ans.children[uni_val])

        //Step 1 Process
        const stepProcess = document.createElement("table")
        const stepcontain_1 = document.createElement("tr")
        //const stepcontain_2 = document.createElement("td")

        //making the table
        uni_val = uni_val +1

        //prototype
        /*stepProcess.appendChild(stepcontain_1)
        stepcontain_1.appendChild(stepcontain_2)*/
        stepProcess.appendChild(stepcontain_1)
        const Divident = document.createTextNode("Dividend")
        const Quotient = document.createTextNode("Quotient")
        const Remainder = document.createTextNode("Remainder")

        //Divident
        DividentContainer = document.createElement("td")
        stepcontain_1.appendChild(DividentContainer)
        DividentContainer.appendChild(Divident)

        //Quotient
        QuotientContainer = document.createElement("td")
        stepcontain_1.appendChild(QuotientContainer)
        QuotientContainer.appendChild(Quotient)    

        //Remainder
        RemainderContainer = document.createElement("td")
        stepcontain_1.appendChild(RemainderContainer)
        RemainderContainer.appendChild(Remainder)         


        //Inserting new tr

        num = decimal_value
        d = num*8
        q = num
        r = 0
        eQ = 0
        while(q>1){
            d = Math.floor(d/8);
            r = q%8;
            q = Math.floor(q/8);

            const moretr = document.createElement("tr")
            stepProcess.appendChild(moretr)

            partd = document.createTextNode(d + " / 8")
            partq = document.createTextNode(q)
            partr = document.createTextNode(r)

            partds = document.createElement("td")
            partqs = document.createElement("td")
            partrs = document.createElement("td")

            moretr.appendChild(partds)
            moretr.appendChild(partqs)
            moretr.appendChild(partrs)

            partds.appendChild(partd)
            partqs.appendChild(partq)
            partrs.appendChild(partr)


            eQ = q;
            //make a tr
        }
        const extratr = document.createElement("tr")
        stepProcess.appendChild(extratr)

        //then make a th
        none = document.createTextNode("")
        eq = document.createTextNode(eQ)

        mono = document.createElement("td")
        mono2 = document.createElement("td")
        lastQ = document.createElement("td")

        extratr.appendChild(mono)
        extratr.appendChild(mono2)
        extratr.appendChild(lastQ)

        mono.appendChild(none)
        mono2.appendChild(none)
        lastQ.appendChild(eq)

        //Entering The Table
        ans.insertBefore(stepProcess, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])
        
        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Repeat the process till we get 0 or 1 as the quoteint;")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Then Write the values of remainders(r) starting from the bottom to the top and we will get " + (parseInt(num)).toString(8) + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " + document.getElementById("val").value.toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_B + ": " + (parseInt(num)).toString(8))
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        zip = document.getElementById("val").value.toUpperCase()
        document.getElementById("val").value = zip
    }
    //Hex to Decimal
    else if (STRING_OPTION_A == "Hex" && STRING_OPTION_B == "Decimal") {
        //restriction characters
        num = val.toString().toUpperCase();
        const UNESSESSARY_EXTRA = ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
        
        for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
            const element = UNESSESSARY_EXTRA[index];
            
            num = num.replaceAll(element, "");
            fixInput = document.getElementById('val').value = num;
        }
        
        uni_val = 0
        //Starter
        const newh1 = document.createElement("h2")
        const texty = document.createTextNode("Converting " + STRING_OPTION_A + " to " + STRING_OPTION_B + ";")
        newh1.appendChild(texty)

        ans.insertBefore(newh1, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Input overview
        uni_val = uni_val+1
        const newval = document.createElement("h2")
        const input = document.getElementById("val").value
        const texty2 = document.createTextNode("Your " + STRING_OPTION_A +" Input was " + input.toUpperCase())
        newval.appendChild(texty2)
        ans.insertBefore(newval, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Take note about the value of A,B,C,D,E,F, when converting something from or to hexadecimal:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])
        //making a new div
        uni_val = uni_val + 1
        //makediv = document.createElement("div")
        lamesa = document.createElement("table")
        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("A")
        Aval = document.createElement("td")
        aval = document.createTextNode("10")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("B")
        Aval = document.createElement("td")
        aval = document.createTextNode("11")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("C")
        Aval = document.createElement("td")
        aval = document.createTextNode("12")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("D")
        Aval = document.createElement("td")
        aval = document.createTextNode("13")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("E")
        Aval = document.createElement("td")
        aval = document.createTextNode("14")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)

        tapa = document.createElement("tr")
        lamesa.appendChild(tapa)

        A = document.createElement("td")
        a = document.createTextNode("F")
        Aval = document.createElement("td")
        aval = document.createTextNode("15")

        A.appendChild(a)
        Aval.appendChild(aval)

        tapa.appendChild(A)
        tapa.appendChild(Aval)
        

        ans.insertBefore(lamesa, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("List all the numbers from last to first and then multiply it by 16 with an exponent of sequenced number!")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //start solving
        //alert("jotaroo")
        //This
        val = fixInput
        reverse = val.split("").reverse().join("")
        //jojo = reverseString(val)
        //alert(jojo)

        amount = 0-1
        total = 0
        for (let i = 0; i < reverse.length; i++) {
            s2 = reverse.charAt(i)
            
            if (s2 == "a" || s2=="A") {
                s3 = s2.valueOf();
                s3 = "10";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*10
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "b" || s2=="B") {
                s3 = s2.valueOf();
                s3 = "11";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*11
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "c" || s2=="C") {
                s3 = s2.valueOf();
                s3 = "12";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*12
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "d" || s2=="D") {
                s3 = s2.valueOf();
                s3 = "13";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*13
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "e" || s2=="E") {
                s3 = s2.valueOf();
                s3 = "14";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*14
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            else if (s2 == "f" || s2=="F") {
                s3 = s2.valueOf();
                s3 = "15";
                amount ++;

                anz = Math.pow(16, amount)
                anss = Math.round(anz)*15
                total = total + anss

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
            /*else if (s2 == "0") {
                s3 = s2.valueOf();
                amount ++;

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(i)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(0))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }*/
            else{// if(s2=='1' || s2=='2' || s2=='3' || s2=='4' || s2=='5' || s2=='6' || s2=='7' || s2=='8' || s2=='9'){
                s3 = s2.valueOf();
                amount++;
                anz = Math.pow(16, amount);
                anss = anz*s3;
                total=total+anss;

                //Lets make a div
                uni_val = uni_val + 1
                div = document.createElement("div")
                ans.insertBefore(div, ans.children[uni_val])

                uni_val = uni_val+1
                anotherstep = document.createElement("h3")
                sup = document.createElement("h4")
                texty3 = document.createTextNode(s3 + " x 16")
                suppy = document.createTextNode(amount)

                equalz = document.createElement("h3")
                textyee = document.createTextNode(" = " + Math.round(anss))
                
                anotherstep.appendChild(texty3)
                equalz.appendChild(textyee)
                sup.appendChild(suppy)

                div.appendChild(anotherstep)
                div.appendChild(sup)
                div.appendChild(equalz)
            }
        }

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")

        decimal_value = parseInt(val,16)

        texty3 = document.createTextNode("Then sum all value, and we get " + decimal_value.toString().toUpperCase() + ";")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Just a break line
        uni_val = uni_val + 1
        filler = document.createElement("br")
        ans.insertBefore(filler, ans.children[uni_val])

        uni_val = uni_val + 1
        anotherstep = document.createElement("h2")
        texty3 = document.createTextNode("So in conclusion:")
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode(STRING_OPTION_A + ": " +val.toUpperCase())
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        //Another Step
        uni_val = uni_val+1
        anotherstep = document.createElement("h3")
        texty3 = document.createTextNode("Decimal" + ": " + decimal_value)
        anotherstep.appendChild(texty3)
        ans.insertBefore(anotherstep, ans.children[uni_val])

        zip = document.getElementById("val").value.toUpperCase()
        document.getElementById("val").value = zip
    }
}