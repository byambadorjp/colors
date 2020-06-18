let c = 0;
const clickedg = () => {
    if(c%2==0){
        const a = document.getElementById('g');
        a.innerHTML = '';
        const d = document.createElement('img');
        d.src = 'https://media.giphy.com/media/5NPhdqmyRxn8I/giphy.gif';
        a.appendChild(d);
        d.style.width = 100 + '%';
        d.style.height = 100 + '%';
        c++;
    }
    else if(c%3==0){
        window.location.href = 'lol.html';
        c++;
    }
    else{
        const a = document.getElementById('g');
        a.innerHTML = 'G';
        c++;
    }
}