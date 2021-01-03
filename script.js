const insert = document.getElementById('insert');
const message = document.getElementById('message');

const keyInfos = ['key', 'key-code', 'code'];

window.addEventListener('keydown', e => {
  message.style.display = 'none';
  insert.innerHTML = `
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>
    <div class="key" >
      ${e.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key" >
      ${e.code}
      <small all>event.code</small>
    </div>
  `;
});
