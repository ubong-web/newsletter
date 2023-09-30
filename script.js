const submit = document.querySelector(".button");
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector(".modal__dismiss");
const modal = document.querySelector('.modal');
const inputEl = document.querySelector('#email-input');


/////// MODAL ////////

const openModal = function(e){
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

};
const closeModal = function(e){
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}



btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });


  //////// EMAIL VALIDATION /////////
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function isValidEmail(email) {
    return emailPattern.test(email);
  }

  //// Email Validation
  
 const emailValidation = function(){
    
  if(isValidEmail(event.target.value)){
    submit.addEventListener('click', openModal);
    
   } else{
    closeModal;
    }
};

  inputEl.addEventListener('input', emailValidation);

  
  

  