function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('advice-id').textContent = data.slip.id;
            document.getElementById('advice').textContent = data.slip.advice;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}