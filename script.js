
const ctx = document.getElementById('setoresChart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Governo', 'Saúde', 'Educação', 'Financeiro'],
      datasets: [{
        label: 'Projetos',
        data: [6, 2, 1, 1],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Experiência por Setor' }
      }
    }
  });
}
