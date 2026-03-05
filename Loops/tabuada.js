let n = parseFloat(prompt("Digite um numero"))

let contador = 0

while(isNaN(n) == "true"){
    if(isNaN(n) == "true"){
        alert('Não é um numero válido')
        let n = parseFloat(prompt("Digite um numero"))
    }else{
        console.log('É um numero válido')
    }
    
}
while (contador <= 1000){
    document.write(`${n} X ${contador} = `+ n*contador + ("<br>"))
    contador+=1
}

