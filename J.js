
let img = document.getElementById('im');
function change(id, src) {
    document.body.style.backgroundImage =` linear-gradient(to bottom,${id} ,transparent)`;

       img.src =src;
}
