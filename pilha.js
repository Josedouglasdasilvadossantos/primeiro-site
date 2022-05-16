var elementos = []; // declarando array vazio
var topo      = -1; // variavel topo vale -1
const MAX     = 10; // constante maxima será 10

function push(num){ // Criando função push
   if (topo < MAX){
       
    topo = topo + 1;
    elementos[topo] =num;
   
   }
 
   else
   {

   console.log("Pilha está cheia"); 

   }

}

function estaVazia(){
    return topo == -1;
}


function pop(){ // criando função pop
    if (topo != -1){
       let num = elementos[topo];
       topo = topo - 1;
       return num;
    
    }

    else{
        console.log("Pilha está vazia!")
    }

}


//Programa

push(10);
push(20);
push(30);

console.log (elementos);

console.log(pop());
console.log(pop());
console.log(pop());




 
