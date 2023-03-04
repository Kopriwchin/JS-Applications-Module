function getInfo() {
    let inputField = document.getElementById('stopId');

    const baseUrl = `http://localhost:3030/jsonstore/bus/businfo/${inputField.value}`;

    let stopNameEl = document.getElementById('stopName');
    let busesUlEl = document.getElementById('buses');

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            let busId = inputField.value;         
            inputField.value = '';

            stopNameEl.textContent = data['name'];
            
            Object.keys(data['buses']).forEach(busId => {
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data['buses'][busId]} minutes`;
                busesUlEl.appendChild(liElement);
            })
        })
        .catch(err => {
            stopNameEl.textContent = 'Error';
        })
}