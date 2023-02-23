const form = document.querySelector('form');
const messageList = document.querySelector('#message-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nameInput = document.querySelector('#name');
  const messageInput = document.querySelector('#message');
  
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name === '' || message === '') {
    return;
  }
  
  const messageItem = document.createElement('div');
  messageItem.classList.add('message');
  messageItem.innerHTML = `
    <h2>${name}</h2>
    <p>${message}</p>
    <button class="delete-btn">削除</button>
  `;
  
  messageList.appendChild(messageItem);
  
  nameInput.value = '';
  messageInput.value = '';
});

messageList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('.message').remove();
  }
});
