document.getElementById("toggleProjects").addEventListener("click", function () {
    let projects = document.getElementById("projects");

    if (projects.style.display === "none") {
        projects.style.display = "block";
        this.innerText = "Hide Projects";
    } else {
        projects.style.display = "none";
        this.innerText = "Show Projects";
    }
});
