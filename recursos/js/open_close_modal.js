const buttonOpen = document.querySelector(".btncalcular");
const buttonSim = document.querySelector(".btnsim");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".close-modal");
const buttonConcluir = document.querySelector(".concluir");

buttonOpen.onclick= function(){
   
 /*   var vlrinput=document.getElementById("txtvalor");
   
    if(vlrinput.value === "" || vlrinput.value === null){
        alert("Campo Valor total da conta está vazio.");
        return;
    }else{*/
    modal.showModal();
    modal.style.display='flex';
    
}

buttonClose.onclick= function(){
    modal.close();
    modal.style.display='none';
}


buttonConcluir.onclick= function(){
        let botaoSim=document.getElementById("btSim");
        let botaoNao=document.getElementById("btNao");
        let btconcluir=document.getElementById("btConcluir");

        document.getElementById("titulo-modal").innerText = "Esse pagamento terá desconto?"
        document.getElementById("txtmodal").innerText = "Apenas para contas pagas em pix, débito ou dinheiro";
        document.getElementById("txtvalor").value="";
        document.getElementById("qtdInput").value=1;
        // Percorrer todas as opções dentro do select
        var select = document.getElementById("cbOption");
       
        for(var i=0; i<select.options.length; i++){
            if(select.options[i].innerText==="Sim"){
                select.options[i].selected=true;
            }
        }

        botaoSim.style.display='inline';
        botaoNao.style.display='inline';
        btconcluir.style.display='none';
    

        modal.close();
        modal.style.display='none';
    }

 


/* outro tipo de fechar o modal
function openModal(modalname){
    let modal =document.getElementById(modalname);
    if(typeof modal == 'undefined' || modal == null){
        return;
    }
    modal.style.display='flex';
    document.body.style.overflow='hidden';
}

function closeModal(modalname){
    let modal =document.getElementById(modalname);
    if(typeof modal == 'undefined' || modal == null){
        return;
    }
    modal.style.display='none';
    document.body.style.overflow='auto';
}*/