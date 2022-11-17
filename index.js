const exampleDiv = document.getElementById('example-div');


document.addEventListener('mousemove', (event) => {
    const { x } = event;
    console.log(x);
    exampleDiv.style.width = `${x}px`;
});