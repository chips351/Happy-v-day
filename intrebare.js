window.onload = function() {
    let contor = 0;
    const yes = document.querySelector('.yes');
    const no = document.querySelector('.no');
    const descriere = document.querySelector('.descriere');
    const container = document.querySelector('.container');
    const body = document.body;
    
    yes.addEventListener('click', function() {
        body.style.backgroundImage = "url('images/background-hearts.png')";
        yes.style.display = 'none';
        no.style.display = 'none';
        dontLove.style.display = 'none';
        descriere.textContent = "YEY!!! STIAM EU CA VREI!!! TE IUBESC FOARTE MULT BBY!!! <333";
    });
    
    no.addEventListener('mouseover', function() {
        no.style.position = 'absolute';
        no.style.left = `${Math.random() * (window.innerWidth - no.offsetWidth)}px`;
        no.style.top = `${Math.random() * (window.innerHeight - no.offsetHeight)}px`;
        contor++;
        if (contor == 5 && !document.getElementById('dontLove')) {
            const dontLove = document.createElement('div');
            dontLove.id = 'dontLove';
            dontLove.textContent = 'CHIAR NU MA IUBESTI????? :(((('; 
            dontLove.style.color = 'red';
            dontLove.style.fontSize = '3vh';
            container.appendChild(dontLove);
        }
    });
};