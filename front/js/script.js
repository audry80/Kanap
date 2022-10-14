function item() {
    fetch("https://audry80.github.io/P5-Dev-Web-Kanap/")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            document
                .getElementById("items")
        })
        .catch(function (err) {
            //une erreurest surevenue
        })
}