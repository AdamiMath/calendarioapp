document.addEventListener('DOMContentLoaded', function () {
  const startOfMonth = moment().startOf('month');
  const diasNoMes = [];

  // Preencher a array diasNoMes
  const daysInMonth = startOfMonth.daysInMonth();
  for (let i = 0; i < daysInMonth; i++) {
    const day = startOfMonth.clone().add(i, 'days');
    diasNoMes.push({
      numero: day.date(),
      semana: day.format('ddd')
    });
  }

  // Dividir a array em grupos de 7
  const semanas = [];
  while (diasNoMes.length > 0) {
    semanas.push(diasNoMes.splice(0, 7));
  }

  // Criar e preencher a tabela HTML
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Cabeçalho com os nomes abreviados dos dias da semana
  const headerRow = document.createElement('tr');
  const diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  diasDaSemana.forEach(dia => {
    const headerCell = document.createElement('th');
    headerCell.textContent = dia;
    headerRow.appendChild(headerCell);
  });
  thead.appendChild(headerRow);

  semanas.forEach(semana => {
    const row = document.createElement('tr');

    semana.forEach(dia => {
      const cell = document.createElement('td');
      cell.textContent = `${dia.numero} - ${dia.semana}`;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
});
