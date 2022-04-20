const maxInvite = document.querySelector('#max-invite');
const output = document.querySelector('.invite-output');

function setDefaultState() {
    output.value = maxInvite.value;
}
  
maxInvite.addEventListener('input', function() {
    output.value = this.value;
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    setDefaultState();
  });



