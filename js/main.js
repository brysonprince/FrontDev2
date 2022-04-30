const links = [
    {
        label: "Week1",
        url: "week1/index.html",
    },
    {
        label: "Week2",
        url: "week2/index.html"
    }
];

const ol = document.getElementsByTagName('ol')[0];

function createLinks(){
    for (let i = 0; i < links.length; i++){
        var li = document.createElement("li");
        var a = document.createElement("a")

        a.appendChild(document.createTextNode(links[i].label))
        a.setAttribute("href", links[i].url)

        li.appendChild(a);
        ol.appendChild(li);
    }
}

createLinks()