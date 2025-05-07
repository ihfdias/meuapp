function adicionarTarefa() {
    const input = document.getElementById("nova-tarefa");
    const texto = input.value.trim();
  
    if (texto !== "") {
      const lista = document.getElementById("lista-tarefas");
  
      const item = document.createElement("li");
      item.innerHTML = `
        ${texto}
        <button onclick="removerTarefa(this)">Excluir</button>
      `;
  
      lista.appendChild(item);
      input.value = "";
    }
  }
  
  function removerTarefa(botao) {
    const item = botao.parentElement;
    item.remove();
  }