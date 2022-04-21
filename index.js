// SIDE BAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGES
const messagesNotification = document.querySelector
('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('messages');
const messageSearch = document.querySelector('message-search');

// ================ SIDE BAR ================


//remove active class from all menu item
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('notifications-popup').style.display = 'none';
        }else{
            document.querySelector('notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ================ MESSAGES ================
//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();

    })
}

//search chat 
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none'
    }, 2000);
})