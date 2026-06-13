Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
    <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent; 
  document.querySelector('table tbody').appendChild(tr);
});

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('is-open');
});

lightBtn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode-variables');
  lightBtn.querySelector('span').classList.add('active');
  darkBtn.querySelector('span').classList.remove('active');
});

darkBtn.addEventListener('click', () => {
  document.body.classList.add('dark-mode-variables');
  darkBtn.querySelector('span').classList.add('active');
  lightBtn.querySelector('span').classList.remove('active');
});
