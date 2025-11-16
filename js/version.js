const PROJECT_VERSION = "v0.3.2-alpha";

function updateVersion() {
    const versionElement = document.getElementById('project-version');
    if (versionElement) {
        versionElement.textContent = `Версия: ${PROJECT_VERSION}`;
    }
}

document.addEventListener('DOMContentLoaded', updateVersion);