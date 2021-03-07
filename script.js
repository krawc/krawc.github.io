deepai.setApiKey('23c03471-cc36-4642-aae8-f8b6e5b3f979');

const projects = [
    {
        images: ["https://i.ibb.co/D1qjS67/of.png"],
        title: "asciichan",
        text: "getting into a “conversation” with new forms of “content”. my onlyfans account fits two beautiful traditions at once: ancient claypot pornography as well as the very faxable ASCII art.<a href='https://onlyfans.com/asciichan'>https://onlyfans.com/asciichan</a>"
    },
    {
        images: [ "https://i.ibb.co/dm3pRc4/IMG-0190-copy-Konrad-Krawczyk.jpg"],
        title: "iLiveInPublic",
        text: "As a zoomer, I love being watched. Complicating the idea of the alleged “digital panopticon” we are currently subjecting ourselves / being subjected to, I decided to become a juvenile lab rat for the public view. The result is an 8-hour performance experiment during which every way I interacted with the web was recorded and transformed into a piece of algorithm-feeding data, just like when browsing the Internet."
    },
    {
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iU47et12gzs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: "how not to be seen: a game",
        text: "building off of Hito Steyerl's short film on surveillance, resolution and visibility."
    },
];

(async function() {
    for (let i = 0; i < 60; i++) {
        var resp = await deepai.callStandardApi("text-generator", {
            text: "cope",
        });
        // document.getElementById("bg").innerHTML += '<div class="item">';
        document.getElementById("bg").insertAdjacentHTML( 'beforeend', '<span class="ai">' + resp.output + '</span>' );

        if (projects[i]) {
            projects[i].images && projects[i].images.forEach(element => {
                let rand = Math.floor(400 + (Math.random() * 300));
                document.getElementById("bg").insertAdjacentHTML( 'beforeend', '<img width="' + rand + '" src="' + element + '"/>');
            });
            if (projects[i].embed) {
                // document.getElementById("bg").innerHTML += '<div>' + projects[i].embed + '</div>';
                document.getElementById("bg").insertAdjacentHTML( 'beforeend', '<div>' + projects[i].embed + '</div>');

            }
            document.getElementById("bg").insertAdjacentHTML( 'beforeend', '<span class="title">' + projects[i].title + '</span>');
            document.getElementById("bg").insertAdjacentHTML( 'beforeend', '<span class="content">' + projects[i].text + '</span>');

            // document.getElementById("bg").innerHTML += '<span class="title">' + projects[i].title + '</span>';
            // document.getElementById("bg").innerHTML += '<span class="content">' + projects[i].text + '</span>';
        }
        // document.getElementById("bg").innerHTML += '</div>';

    }

})()

function expandAbout(e) {
    e.preventDefault();
    let display = document.getElementById("about").style.display;
    if (display == 'none') {
        document.getElementById("about").style.display = "inline-block";
    } else {
        document.getElementById("about").style.display = "none";
    }

}

document.getElementById("about-expander").addEventListener("click", expandAbout);