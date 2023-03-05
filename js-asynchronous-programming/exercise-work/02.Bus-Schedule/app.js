function solve() {
    let spanInfoEl = document.getElementsByClassName('info')[0];

    const baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;
    const departButtonEl = document.getElementById('depart');
    const arriveButtonEl = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    }

    function depart() {
        departButtonEl.disabled = true;
        arriveButtonEl.disabled = true;
        
        const departStopUrl = baseUrl + '/' + stop.next;
        
        fetch(departStopUrl)
            .then(res => res.json())
            .then(data => {
                stop = data;
                spanInfoEl.textContent = `Next stop ${stop.name}`;
            })
            .catch(() => {
                departButtonEl.disabled = true;
                arriveButtonEl.disabled = true;
            });

        departButtonEl.disabled = true;
        arriveButtonEl.disabled = false;
    }

    function arrive() {
        departButtonEl.disabled = true;
        arriveButtonEl.disabled = true;
        
        spanInfoEl.textContent = `Arriving at ${stop.name}`;

        departButtonEl.disabled = false;
        arriveButtonEl.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();