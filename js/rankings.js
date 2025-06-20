Promise.all([
  fetch('https://api.octagon-api.com/rankings').then(res => res.json()),
  fetch('https://api.octagon-api.com/fighters').then(res => res.json())
])
.then(([rankingsData, fightersData]) => {
  const rankings = Array.isArray(rankingsData) ? rankingsData : rankingsData.rankings || [];
  const container = document.getElementById('rankings-container');

  rankings.forEach(categoria => {
    const divCategoria = document.createElement('div');
    divCategoria.className = 'categoria';

    const titulo = document.createElement('h2');
    titulo.textContent = categoria.categoryName;
    divCategoria.appendChild(titulo);

    const isPoundForPound = categoria.categoryName.includes("Pound-for-Pound");

    if (categoria.champion) {
      const champId = categoria.champion.id;
      const champName = categoria.champion.championName || champId || 'No asignado';

      if (!isPoundForPound) {
        const campeonTexto = document.createElement('p');
        campeonTexto.innerHTML = `<strong>Campeón:</strong> ${champName}`;
        divCategoria.appendChild(campeonTexto);
      }

      // Mostrar imagen del campeón si existe
      const champData = fightersData[champId];
      if (champData && champData.imgUrl) {
        const champImg = document.createElement('img');
        champImg.src = champData.imgUrl;
        champImg.alt = champName;
        champImg.style.width = '200px';
        champImg.style.marginBottom = '10px';
        champImg.style.display = 'block';
        divCategoria.appendChild(champImg);
      } else {
        console.log(`No se encontró imagen para: ${champName}`);
      }
    }

    // Lista de peleadores rankeados
    const lista = document.createElement('ul');
    categoria.fighters.forEach((peleador, i) => {
      const item = document.createElement('li');
      item.textContent = `${i + 1}. ${peleador.name}`;
      lista.appendChild(item);
    });

    divCategoria.appendChild(lista);
    container.appendChild(divCategoria);
  });
})
.catch(error => {
  console.error('Error al cargar los datos:', error);
});
