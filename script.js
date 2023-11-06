
const form = document.querySelector("#msg-form");
const message = document.querySelector('#message');
const feedback = document.querySelector('.feedback');
const msgContent = document.querySelector('.msg-content');
  
     function result(e) {
      e.preventDefault();
  
      if (message.value === '') {
        feedback.classList.add('show');
        setTimeout(() => {
          feedback.classList.remove('show');
        }, 2000);
      } else {
        msgContent.textContent = message.value;
        message.value = '';
      }
    //   console.log(result);
    };
form.addEventListener('submit', result)
  