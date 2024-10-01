document.addEventListener('DOMContentLoaded', function () {
    // Obtendo a data atual
    const data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Meses começam em 0, então adicionamos 1
    const ano = data.getFullYear();
  
    // Adicionando zero à esquerda para dias e meses menores que 10
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
  
    // Formatando a data como dd/mm/aaaa
    const dataFormatada = `${dia}/${mes}/${ano}`;
  
    // Exibindo a data no elemento HTML
    document.getElementById('data-atual').innerHTML = dataFormatada;
  });
  