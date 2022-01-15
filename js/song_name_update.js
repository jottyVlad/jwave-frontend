const xsltProcessor = new XSLTProcessor();

// Load the xsl file using synchronous (third param is set to false) XMLHttpRequest
const myXMLHTTPRequest = new XMLHttpRequest();

let current_song = "";

const set_song_name = () => {
    myXMLHTTPRequest.open("GET", "https://ice.jwave-radio.cf/status.xsl", false);
    myXMLHTTPRequest.send(null);

    const xslRef = myXMLHTTPRequest.responseXML;

    // Finally import the .xsl
    xsltProcessor.importStylesheet(xslRef);

    const new_song = xslRef.getElementsByClassName("streamstats")[5].textContent;

    if(current_song !== new_song) {
        document.getElementById("now-playing").textContent =
            xslRef.getElementsByClassName("streamstats")[5].textContent;
        current_song = new_song;
    }
}

set_song_name()

setInterval(set_song_name, 30000)
