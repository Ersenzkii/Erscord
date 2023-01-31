//script.js
//

export const addRandomColors = () => {
	window.addEventListener("load", function() {
        const elements = document.querySelectorAll(".element")
        const pics = document.querySelectorAll(".pic")
        console.log('Logging..')
        for (let i of elements) {
            i.style.backgroundColor = randomColor()
        }
        for (let j of pics) {
            j.style.backgroundColor = randomColor()
        }
	})
	
}

const randomColor = () => {
    var Color = Math.floor(Math.random() * 16777215).toString(16);
    let myColor = "#" + Color
    return myColor
}

export const sendAMessage = () => {
	let chat = document.getElementById("chat")
	let input = document.getElementById("messenger");
	input.addEventListener("keydown", function(e) {
		if (input.value.length >=1) {
			if (e.key == "Enter") {
				chat.innerHTML += '<div class="message"><div class="user-sending"><div class="element mes"></div><div class="user"><p class="username chief">[ZDSK] Ersenzkii</p><p class="username message-sent">'+ input.value + '</p></div></div></div>'
				input.value = ""
			} else if (e.key == "AltGraph") {
				chat.innerHTML += '<div class="message"><div class="user-sending"><div class="element mes"></div><div class="user"><p class="username game">[ZDSK] SpeedRabbit69</p><p class="username message-sent">'+ input.value + '</p></div></div></div>'
				input.value = ""
			} else if (e.key == "Escape") {
				chat.innerHTML += '<div class="message"><div class="user-sending"><div class="element mes"></div><div class="user"><p class="username chief">[ZDSK] ZOmegaZZ</p><p class="username message-sent">'+ input.value + '</p></div></div></div>'
				input.value = ""
				input.value = ""
			}
		}
	})
}