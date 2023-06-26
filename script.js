function trocarConteudo() {
    var conteudo = document.getElementById("conteudo");
    var conteudo2 = document.getElementById("conteudo2");
    var btnPortfolio = document.getElementById("btnPortfolio");
    var btnSkills = document.getElementById("btnSkills");

    if (conteudo.style.display === "none") {
        conteudo.style.display = "grid";
        conteudo2.style.display = "none";
        btnPortfolio.classList.add("active");
        btnSkills.classList.remove("active");
    } else {
        conteudo.style.display = "none";
        conteudo2.style.display = "grid";
        btnPortfolio.classList.remove("active");
        btnSkills.classList.add("active");
    }
};