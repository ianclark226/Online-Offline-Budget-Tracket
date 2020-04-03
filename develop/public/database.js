let db = request.result;

const request = window.indexedDB.open("budget", 1);
request.onupgradeneeded = (event) => {

    const budgetItem = db.createObjectStore("pending");

};

request.onsuccess = (event) => {
    const db = target.result;

    if(navigator.online) {
        checkDb();
    }
};

request.onerror = (event) => {

};

function saveItem(record) {
    const transaction = db.transaction(["pending"], "readwrite");

    const pendingItem = transaction.objectStore("pending")
}

function checkDb() {

    getAll.onsuccess = function() {
        if(getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text, */*",
                }
            })
            .then(response => response.json())
            .then(() => {
        });
    };
};
};

window.addEventListener("online", checkDb);