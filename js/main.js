const links = [
    {
        label: "Week1",
        url: "week1/index.html",
    },
    {
        label: "Week2",
        url: "week2/index.html"
    },
    {
        label: "Week3",
        url: "week3/index.html"
    },
    {
        label: "Week4",
        url: "week4/index.html",
    },
    {
        label: "Week5",
        url: "week5/index.html",
    },
    {
        label: "Week7",
        url: "week7/index.html",
    },
    {
        label: "Week8",
        url: "week8/index.html",
    },
    {
        label: "ToDo Project",
        url: "todoProject/index.html"
    },
    {
        label: "Country Project",
        url: "countryProject/index.html"
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