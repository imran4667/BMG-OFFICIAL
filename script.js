function addPlayer() {
  const name = document.getElementById('pname').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const played = parseInt(document.getElementById('played').value) || 0;
  const win = parseInt(document.getElementById('win').value) || 0;
  const draw = parseInt(document.getElementById('draw').value) || 0;
  const loss = parseInt(document.getElementById('loss').value) || 0;

  const winPercent = played > 0 ? ((win / played) * 100).toFixed(2) : 0;

  const table = document.getElementById('playerTable');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>${address}</td>
    <td>${played}</td>
    <td>${win}</td>
    <td>${draw}</td>
    <td>${loss}</td>
    <td>${winPercent}%</td>
  `;

  table.appendChild(row);

  document.getElementById('pname').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
  document.getElementById('played').value = '';
  document.getElementById('win').value = '';
  document.getElementById('draw').value = '';
  document.getElementById('loss').value = '';
}
