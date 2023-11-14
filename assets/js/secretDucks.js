document.querySelector('.pi').addEventListener('click', (event) => {
    if (event.ctrlKey && event.shiftKey) {
        alert("Some stuff will happen here");
    }
})