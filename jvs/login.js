
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


const errorMsg = document.createElement('div');
errorMsg.style.backgroundColor = '#ddd9d9ff';
errorMsg.style.color = '#721c24';
errorMsg.style.padding = '10px';
errorMsg.style.borderRadius = '6px';
errorMsg.style.marginBottom = '15px';
errorMsg.style.fontWeight = '600';
errorMsg.style.display = 'none'; 
form.insertBefore(errorMsg, form.children[2]); 


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();


    if (username === "" || password === "") {
        errorMsg.textContent = "يرجى ملء جميع الحقول!";
        errorMsg.style.display = 'block';

        
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 2000);
        return;
    }

    
    window.location.href = "Home.html";
});