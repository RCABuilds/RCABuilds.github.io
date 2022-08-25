const binary = document.getElementById("binary")
const octal = document.getElementById("octal")
const decimal = document.getElementById("decimal")
const hex = document.getElementById("hex")
const cone = document.getElementById("convert")
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

if (cone) {
    cone.addEventListener('click', ()=>{
        convert()
    })
}

if (binary) {
    binary.addEventListener('click', ()=>{
        octal.value = ""
        decimal.value = ""
        hex.value = ""
    })
    binary.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            num = document.getElementById("binary").value
            ror = num.toString().toUpperCase()

            //alert(ror)

            const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\', "2", "3", "4", "5", "6", "7", "8", "9"]
            for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
                const element = UNESSESSARY_EXTRA[index];
                ror = ror.replaceAll(element, "")
                fixInput = document.getElementById("binary").value = ror
            }

            octal.value = ""
            decimal.value = ""
            hex.value = ""

            convert()
            if (octal.value=="NAN"|| octal.value == "NaN") {
                binary.value = ""
                octal.value = ""
                decimal.value = ""
                hex.value = ""
            }
        }
    });
}
if (octal) {
    octal.addEventListener('click', ()=>{
        binary.value = ""
        decimal.value = ""
        hex.value = ""
    })
    octal.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {

            xoxo = document.getElementById("octal").value
            jojo = xoxo.toString().toUpperCase()
            const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']

            for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
                const element = UNESSESSARY_EXTRA[index];
                jojo = jojo.replaceAll(element, "")

                giorno = document.getElementById("octal").value = jojo
            }
            binary.value = ""
            decimal.value = ""
            hex.value = ""

            convert()
            if (octal.value=="NAN"|| octal.value == "NaN") {
                binary.value = ""
                octal.value = ""
                decimal.value = ""
                hex.value = ""
            }
        }
    });
}
if (decimal) {
    decimal.addEventListener('click', ()=>{
        binary.value = ""
        octal.value = ""
        hex.value = ""
    })
    decimal.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            popo = document.getElementById("decimal").value
            jolly = popo.toString().toUpperCase()
            const UNESSESSARY_EXTRA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']
            for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
                const element = UNESSESSARY_EXTRA[index];
                jolly = jolly.replaceAll(element, "")
                yum = document.getElementById("decimal").value = jolly
            }

            binary.value = ""
            octal.value = ""
            hex.value = ""

            convert()
            if (octal.value=="NAN"|| octal.value == "NaN") {
                binary.value = ""
                octal.value = ""
                decimal.value = ""
                hex.value = ""
            }
        }
    });
}
if (hex) {
    hex.addEventListener('click', ()=>{
        binary.value = ""
        octal.value = ""
        decimal.value = ""
    })
    hex.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            coco = document.getElementById("hex").value
            jumbo = coco.toString().toUpperCase()
            
            const UNESSESSARY_EXTRA = ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[" , "]" , "{" , "}" , ";" , ":" , "<" , "," , "." , ">" , "?" , "/", "'", '"', "|", '\\']

            for (let index = 0; index < UNESSESSARY_EXTRA.length; index++) {
                const element = UNESSESSARY_EXTRA[index];
                jumbo = jumbo.replaceAll(element, "")
                jinx = document.getElementById("hex").value = jumbo
            }

            binary.value = ""
            octal.value = ""
            decimal.value = ""

            convert()
            if (octal.value=="NAN"|| octal.value == "NaN") {
                binary.value = ""
                octal.value = ""
                decimal.value = ""
                hex.value = ""
            }
        }
    });
}

function convert() {
    if(octal.value=="" && decimal.value=="" && hex.value==""){
        let base2 = binary.value;
        decimal.value = parseInt(base2, 2);
        const bin = decimal.value;
        const oct = (parseInt(bin)).toString(8);
        const hez = (parseInt(bin)).toString(16).toUpperCase();
        octal.value = oct
        hex.value = hez
    }
    else if(binary.value=="" && decimal.value=="" && hex.value==""){
        let oct = octal.value;
        decimal.value = parseInt(oct, 8);
        const dec = decimal.value;
        const bin = (parseInt(dec)).toString(2);
        const hez = (parseInt(dec)).toString(16).toUpperCase();
        binary.value = bin;
        hex.value = hez;
    }
    else if(binary.value=="" && octal.value=="" && hex.value==""){
        let dec = decimal.value;
        const bin = (parseInt(dec)).toString(2);
        const oct = (parseInt(dec)).toString(8);
        const hez = (parseInt(dec)).toString(16).toUpperCase();

        binary.value = bin;
        octal.value = oct;
        hex.value = hez;
    }
    else if(binary.value=="" && octal.value=="" && decimal.value==""){
            let hez = hex.value;
            decimal.value = parseInt(hez, 16);
            const dec = decimal.value;
            const bin = (parseInt(dec)).toString(2);
            binary.value = bin;
            const oct = (parseInt(dec)).toString(8);
            octal.value = oct;
            hex.value = hex.value.toUpperCase();
    }
}