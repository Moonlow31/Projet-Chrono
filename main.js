document.addEventListener("DOMContentLoaded", function () {
    const prehistoireBtn = document.getElementById("prehistoire");
    const bronzeBtn = document.getElementById("bronze");
    const ferBtn = document.getElementById("fer");
    const antiqueBtn = document.getElementById("antique");
    const moyenAgeBtn = document.getElementById("moyenAge");
    const moderneBtn = document.getElementById("moderne");
    const contemporainBtn = document.getElementById("contemporain");

    prehistoireBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Préhistoire'");
    });

    bronzeBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Âge du bronze'");
    });

    ferBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Âge du fer'");
    });

    antiqueBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Antiquité'");
    });

    moyenAgeBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Moyen âge'");
    });

    moderneBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Époque moderne'");
    });

    contemporainBtn.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton 'Époque contemporaine'");
    });
});