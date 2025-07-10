const API_URL = 'https://soma-backend-7y1p.onrender.com';

async function sendMessage() {
  const input = document.getElementById('input');
  const message = input.value.trim();
  if (!message) return;

  appendMessage('🧍 Vos:', message);
  input.value = '';

  try {
    const res = await fetch(API_URL + '/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    appendMessage('🤖 SOMA:', data.reply);
  } catch (err) {
    appendMessage('❌ Error:', 'No se pudo conectar con SOMA.');
  }
}

function appendMessage(sender, text) {
  const messages = document.getElementById('messages');
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}</strong> ${text}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
