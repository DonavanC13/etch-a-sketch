const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
    
    const br = document.createElement('br');
    container.appendChild(br);


grid.addEventListener('mouseover', function(event){
    if 
    (event.target.classList.contains('grid'))
    grid.style.backgroundColor = '#4CAF50';
})
    }
}