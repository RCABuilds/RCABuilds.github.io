const binary = document.getElementById("binary")
const octal = document.getElementById("octal")
const decimal = document.getElementById("decimal")
const hex = document.getElementById("hex")
const cone = document.getElementById("convert")


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

            octal.value = ""
            decimal.value = ""
            hex.value = ""

            convert()
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
            event.preventDefault();

            binary.value = ""
            decimal.value = ""
            hex.value = ""

            convert()
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

            binary.value = ""
            octal.value = ""
            hex.value = ""

            convert()
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

            binary.value = ""
            octal.value = ""
            decimal.value = ""

            convert()
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