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
  document.getElementById('data-atual').innerHTML = dataFormatada;

  const botaoAdicionar = document.getElementById("adiciona");
  const areaAdicionar = document.querySelector('.area-adicionar');
  const botaoEnviar = document.getElementById('enviar');
  const tarefasModelo = document.querySelectorAll('.area-tarefas > div'); // Tarefas modelo
  let tarefasUsadas = 0; // Contador de tarefas modelo usadas

  // Mostrar/Esconder área de adicionar tarefa
  botaoAdicionar.addEventListener('click', () => {
      areaAdicionar.classList.toggle('aparece');
  });

  // Função para reorganizar a classe das tarefas (alternando tarefa1 e tarefa2)
  function reorganizarTarefas() {
      const tarefas = document.querySelectorAll('.area-tarefas > div');
      tarefas.forEach((tarefa, index) => {
          tarefa.classList.remove('tarefa1', 'tarefa2');
          if (index % 2 === 0) {
              tarefa.classList.add('tarefa1');
          } else {
              tarefa.classList.add('tarefa2');
          }
      });
  }

  // Adicionando nova tarefa na lista
  botaoEnviar.addEventListener('click', () => {
      const tarefa = document.getElementById('tarefa').value;
      const data = document.getElementById('data').value;
      const descricao = document.getElementById('descri').value;
      const anotacoes = document.getElementById('anota').value;

      if (tarefa && data && descricao && anotacoes) {
          let novaTarefa;

          // Se houver tarefas modelo disponíveis
          if (tarefasUsadas < tarefasModelo.length) {
              novaTarefa = tarefasModelo[tarefasUsadas];
              tarefasUsadas++;
          } else {
              // Caso não haja mais tarefas modelo, criamos uma nova
              novaTarefa = document.createElement('div');
              document.querySelector('.area-tarefas').appendChild(novaTarefa);
          }

          // Atualizando os dados da tarefa
          novaTarefa.innerHTML = `
              <div class="abas check">
                  <label class="marcado">
                      <input class="checked" type="checkbox">
                      <div class="checkmark"></div>
                  </label>
              </div>
              <div class="abas tarefa"><p>${tarefa}</p></div>
              <div class="abas data"><p>${data.split('-').reverse().join('/')}</p></div>
              <div class="abas descricao"><p>${descricao}</p></div>
              <div class="abas anota"><p>${anotacoes}</p></div>
              <div class="lixo"><button><img src="images/trash.png" alt="Remover" width="20px"></button></div>
          `;

          // Limpar campos de entrada
          document.getElementById('tarefa').value = '';
          document.getElementById('data').value = '';
          document.getElementById('descri').value = '';
          document.getElementById('anota').value = '';

          // Esconder área de adicionar após o envio
          areaAdicionar.classList.remove('aparece');
          areaAdicionar.classList.add('esconde');

          // Remover tarefa
          const botaoRemover = novaTarefa.querySelector('.lixo button');
          botaoRemover.addEventListener('click', () => {
              novaTarefa.remove();
              reorganizarTarefas(); // Reorganizar as tarefas após remover uma
          });

          reorganizarTarefas(); // Reorganizar as tarefas após adicionar uma nova
      } else {
          alert('Por favor, preencha todos os campos antes de adicionar a tarefa.');
      }
  });
});
