/*
document.getElementById("btSim").addEventListener("click", verificarBotao);
document.getElementById("btNao").addEventListener("click", verificarBotao);*/

function verificarBotao(event)  {
      
    // Captura o valores do input   .replace(',','.').match(/\d+,\d+/);
    let botaoSim=document.getElementById("btSim");
    let botaoNao=document.getElementById("btNao");
    let btconcluir=document.getElementById("btConcluir");

   
    let valorConsumo=0;
    let valorPessoa=0;
    const taxa=5.00;

    let inputValorConta = document.getElementById("txtvalor").value;
    let inputValorConta1=inputValorConta.match(/\d+,\d+/);
    let inputValorConta2=inputValorConta1[0].replace(',','.');
    
    const inputValorOpcao = document.getElementById("cbOption");
    const valorSelecionado = inputValorOpcao.value;
    const inputQtdPessoas = document.getElementById("qtdInput").value;

    if(event==='Sim' || event==='Não'){
        if(event==='Sim'){
        valorConsumo=inputValorConta2-(inputValorConta2 * 0.1);

        }else if(event==='Não'){
        valorConsumo=inputValorConta2*1;
        }

        botaoSim.style.display='none';
        botaoNao.style.display='none';
        btconcluir.style.display='inline';

        // Exibe o valor em um diálogo
        if (valorSelecionado==='Sim'){
            valorPessoa=(valorConsumo+taxa)/inputQtdPessoas;    
            document.getElementById("titulo-modal").innerText = "Valor da Conta:"
            document.getElementById("txtmodal").innerText = "Total do consumo: R$" + valorConsumo.toFixed(2) + "\nTaxa de serviço: R$" + taxa.toFixed(2) + "\nTotal por pessoa: R$" + valorPessoa.toFixed(2);

        }else if(valorSelecionado==='Não'){
            valorPessoa=valorConsumo/inputQtdPessoas;        
            document.getElementById("titulo-modal").innerText = "Valor da Conta:"
            document.getElementById("txtmodal").innerText = "Total do consumo: R$" + valorConsumo.toFixed(2) + "\nTotal por pessoa: R$" + valorPessoa.toFixed(2);
        }   
    }
}


function validarNumero(input) {
    const valor = input.value.trim();
    const error = document.getElementById('error-msg');

    // Substitui vírgula por ponto para garantir compatibilidade com parseFloat
    const valorFormatado = valor.replace(',', '.');

    if (isNaN(parseFloat(valorFormatado))) {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
}

/*if(event==="Sim"){
        const buttonOpen = document.querySelector(".btSim");
        buttonOpen.onclick= function(){
            modal.showModal();
            modal.style.display='flex';
        }

    }else if(event==="Não"){
        const buttonOpen = document.querySelector(".btNao");
        buttonOpen.onclick= function(){
            modal.showModal();
            modal.style.display='flex';
        }
    }*/