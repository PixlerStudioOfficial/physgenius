const PROJECT_VERSION = "v0.9.0-alpha";

function updateVersion() {
    const versionElement = document.getElementById('project-version');
    if (versionElement) {
        versionElement.textContent = `Версия: ${PROJECT_VERSION}`;
    }
}

window.addEventListener('load', function() {
    updateVersion();
});

setTimeout(function() {
    updateVersion();
}, 100);