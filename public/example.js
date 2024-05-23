document // makes it so you can press enter to submit as opposed to just being able to press a button
    .getElementById("urlInput")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    });

document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value; // if no periods are detected in the input, search google instead
    let searchUrl = "https://www.google.com/search?q=";

    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) { // if no http or https is detected, add https automatically
            url = "https://" + url;
        }
    }

    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};

// parse the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const encodedUrl = urlParams.get('s');

if (encodedUrl) {
    // decode the base64 encoded URL
    const decodedUrl = atob(encodedUrl);

    // set the decoded URL to the input field
    const urlInput = document.getElementById("urlInput");
    urlInput.value = decodedUrl;

    // trigger the search button click event
    document.getElementById("searchButton").click();
}
