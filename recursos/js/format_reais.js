function formatarMoeda(valor) {
    // Função para formatar o valor como moeda brasileira
    valor = valor.replace(/[^0-9,-.]/g, ""); // Remove caracteres inválidos
    valor = valor.replace(/,/g, "."); // Troca vírgulas por pontos
    valor = parseFloat(valor).toFixed(2); // Formata com duas casas decimais
    return "R$ " + valor.replace(/\./g, ","); // Adiciona símbolo de moeda e formata milhares
  }

  function onValorChange() {
    var valorFormatado = formatarMoeda(document.getElementById("txtvalor").value);
    document.getElementById("txtvalor").value = valorFormatado;
  }