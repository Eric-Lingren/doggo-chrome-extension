chrome.runtime.onMessage.addListener(request => {
    currentLocation = window.location.href
    if (request.type === 'renderDoggo') {
        const modal = document.createElement('dialog');
        modal.setAttribute("style", "height:90%;width:90%");
        modal.innerHTML =
            `<iframe id="renderDoggo" style="height:100%;width:100%"></iframe>
                <div style="position:absolute; top:0px; right:5px;">  
                    <button>x</button>
                </div>`;
        document.body.appendChild(modal);
        const dialog = document.querySelector("dialog");
        dialog.showModal();

        const iframe = document.getElementById("renderDoggo");  
        iframe.src = chrome.extension.getURL("index.html");
        iframe.frameBorder = 0;

        dialog.querySelector("button").addEventListener("click", () => {
            dialog.close();
        });
    }
});