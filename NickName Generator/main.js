//Global Varibles

let nickNameArray;

fetch("textFile.txt")
.then((rawData) => rawData.text())
.then((data) => nickNameArray = data.split("-"))



//Eventlistener
document.getElementById("RN").addEventListener("click", generatenickname)
document.getElementById("AN").addEventListener("click", generateallnicknames)
//Function
function generatenickname() {

    let firstname = document.getElementById("firstnameinput").value
    let lastname = document.getElementById("lastnameinput").value

    let nicknameindex = Math.floor(Math.random()*7)

    console.log(nicknameindex);
    let nickname = nickNameArray[nicknameindex]
    document.getElementById("nicknamelist").innerHTML += firstname + " " + nickname + " " + lastname
}

function generateallnicknames() {
    let firstname = document.getElementById("firstnameinput").value
    let lastname = document.getElementById("lastnameinput").value
    for (let num = 0; num <= 6; num++) {
        let nickname = nickNameArray[num]
        document.getElementById("nicknamelist").innerHTML += firstname + " " + nickname + " " + lastname
    }
}