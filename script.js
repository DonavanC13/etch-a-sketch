const container = document.querySelector('#container');
const resizeButton = document.getElementById('resizeButton');

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);

        grid.addEventListener('mouseover', function(){ 
            grid.style.backgroundColor = '#4CAF50';
        });
    }    
    const br = document.createElement('br');
    container.appendChild(br);
}

resizeButton.addEventListener('click', () => {
    gridSize = prompt("Enter new grid size:");
    container.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            container.appendChild(grid);

            grid.addEventListener('mouseover', function() {
                grid.style.backgroundColor = '#4CAF50';
              });
            }
            const br = document.createElement('br');
    container.appendChild(br);
  }
});