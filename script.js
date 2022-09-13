let saida = document.getElementById("saida");

function baseConverter(){
    const decNumber = Number(document.getElementById("entrada1").value);
    const base = Number(document.getElementById("entrada2").value);
    const remStack = new Pilha();
    const digts = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let baseString = ''
    if (!(base>= 2 && base <=36)){
        return ''
    }
    while(number > 0){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while(!remStack.isEmpty()){
        baseString += digts[remStack.pop()]
    }
    
    alert(`Resultado: ${baseString}`)
}

