
/*function loadPage(pageId) {
    const template = document.getElementById(pageId);
    // yung div mo ito//
    const app = document.getElementById("page");
    app.innerHTML = "";
    app.appendChild(template.content.cloneNode(true));
}
//yung id nang template ito//
loadPage("student");*/

function loadPage(pageId) {
    const page = document.getElementById("page");
    const template = document.getElementById(pageId);

    if (!template) {
        console.error("Template not found:", pageId);
        return;
    }

    page.innerHTML = "";
    page.appendChild(template.content.cloneNode(true));

    // ✅ ONLY load rooms when admin settings is opened
    if (pageId === "admin_settings") {
        setTimeout(loadRoomList, 300);
    }
}
loadPage("student");
