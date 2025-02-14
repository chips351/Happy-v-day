window.onload = function() {
    let index = 1;
    const array = [
        "Pentru iubita mea frumoasa, Alexandra 😍", 
        "Aici ne-am cunoscut noi pentru prima oara 😁",
        "Aici suntem noi la inceputul relatiei noastre (uite ce bine ne sta impreuna! 🥰)",
        "Deja stiam ca mi-am gasit jumatatea 😌",
        "(uneori imi place sa ma uit la tine cum dormi 😴)", 
        "Iti multumesc ca mi-ai fost aproape chiar si in clipele dificile 🥹",
        "Acum urmeaza o intrebare foarte importanta... 🤗"
    ];
    const colors = ["lightblue", "lightgreen", "yellow", "lightpink", "lightblue", "purple", "pink"];
    const body = document.body;
    const container = document.getElementsByClassName('container')[0];
    const descriere = document.createElement('div');
    const imagine = document.createElement('img');
    const btn = document.createElement('button');
    
    imagine.id = "imagine";
    imagine.src = `images/poza${index}.jpeg`;
    descriere.textContent = array[index-1];
    btn.textContent = "NEXT";

    container.append(imagine, descriere, btn);
    
    btn.addEventListener('click', function() {
        if (index == 7) {
            window.location.href = 'intrebare.html';
        } else {
            index++;
            descriere.textContent = array[index - 1];
            body.style.backgroundColor = colors[index - 1];

            if (index == 2) {
                const video = document.createElement('video');
                video.src = `images/gif.mp4`;
                video.id = "imagine";
                video.loop = true;
                video.autoplay = true;
                container.replaceChild(video, imagine);
            } else {
                imagine.src = `images/poza${index}.jpeg`;
                if (index == 3) {
                    container.replaceChild(imagine, container.querySelector('video'));
                }
            }
        }
    });
};
