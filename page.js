function changePage(page) {
    var content = document.getElementById("main-content");
    content.innerHTML = `<object type="text/html" data="${page}.html"></object>`;
}