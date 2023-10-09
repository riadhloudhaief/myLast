var data1 =
{
    id: 1,
    name: "raptor 700 cc",
    src: "raptor.png",
    price: "price: 9000$",
    model: "year: 2017"
}
var data2 =
{
    id: 2,
    name: "ninja ",
    src: "ninja.png",
    price: "price: 8000$",
    model: "year: 2018"
}

var data3 =
{
    id: 3,
    name: "hornet 600 cc",
    src: "hornet.png",
    price: "price: 5000$",
    model: "year: 2019"
}
var data4 =
{
    id: 4,
    name: "ktm duke 90 999cc",
    src: "ktm duke 90.png",
    price: "price: 12000$",
    model: "year: 2020"
}

var data5 =
{
    id: 5,
    name: "t-max 560 cc",
    src: "titi.jpg",
    price: "price: 6000$",
    model: "year: 2020"
}

var data6 =
{
    id: 6,
    name: "Z1000",
    src: "z1000.png",
    price: "price: 14000$",
    model: "year: 2021"
}

var data7 =
{
    id: 7,
    name: "africatwin 1200cc",
    src: "afriva.webp",
    price: "price: 15000$",
    model: "year: 2022"
}
var data8 =
{
    id: 8,
    name: "X-ADV 750 cc",
    src: "X-ADV 750.jpg",
    price: "price: 11000$",
    model: "year: 2019"
}

function add(data) {


    document.getElementById("img1").src = data.src
    document.getElementById("img1").style.width = "270px"
    document.getElementById("img1").style.height = "170px"
    document.getElementById("name").innerHTML = data.name
    document.getElementById("price").innerHTML = data.price
    document.getElementById("model").innerHTML = data.model
    document.getElementById("content").style.backgroundColor = " white";
    document.getElementById("button").innerHTML = '<button onclick="add(data' + (data.id + 4) + ')">next</button> '
}

function contact() {
    document.getElementById("email").innerHTML = "riadh18071992@gmail.com"
    document.getElementById("tel").innerHTML = "+21623369643"
    document.getElementById("adr").innerHTML = "metline bizerte tunis"

}

