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
        images: ["https://i.ibb.co/D1qjS67/of.png"],
        title: "asciichan",
        text: "getting into a “conversation” with new forms of “content”. my onlyfans account fits two beautiful traditions at once: ancient claypot pornography as well as the very faxable ASCII art.<a href='https://onlyfans.com/asciichan'>https://onlyfans.com/asciichan</a>"
    },
    {
        images: [ "https://i.ibb.co/dm3pRc4/IMG-0190-copy-Konrad-Krawczyk.jpg"],
        title: "iLiveInPublic",
        text: "As a zoomer, I love being watched. Complicating the idea of the alleged “digital panopticon” we are currently subjecting ourselves / being subjected to, I decided to become a juvenile lab rat for the public view. The result is an 8-hour performance experiment during which every way I interacted with the web was recorded and transformed into a piece of algorithm-feeding data, just like when browsing the Internet."
    }
];

(async function() {
    for (let i = 0; i < 60; i++) {
        var resp = await deepai.callStandardApi("text-generator", {
            text: "cope",
        });
        document.getElementById("bg").innerHTML += '<span class="ai">' + resp.output + '</span>';

        if (projects[i]) {
            projects[i].images.forEach(element => {
                document.getElementById("bg").innerHTML += '<img src="' + element + '"/>';
            });
            document.getElementById("bg").innerHTML += '<span class="title">' + projects[i].title + '</span>';
            document.getElementById("bg").innerHTML += '<span class="content">' + projects[i].text + '</span>';
        }

    }

})()
