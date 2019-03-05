// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const containerArticle = document.querySelector("#messages")

const section1 = document.createElement("section")
section1.className = "message"
section1.textContent = "Dolor anim laborum sit ipsum elit."
containerArticle.appendChild(section1)

const section2 = document.createElement("section")
section2.className = "message"
section2.textContent = "Nisi laboris laborum quis pariatur laboris nisi anim non amet ea ad."
containerArticle.appendChild(section2)

const section3 = document.createElement("section")
section3.className = "message"
section3.textContent = "Veniam aute ut aliquip sit consectetur aliqua consectetur culpa ea qui.."
containerArticle.appendChild(section3)

const section4 = document.createElement("section")
section4.className = "message"
section4.textContent = "Sint sint duis non dolore excepteur."
containerArticle.appendChild(section4)

const section5 = document.createElement("section")
section5.className = "message"
section5.textContent = "Amet non et non deserunt eiusmod ut."
containerArticle.appendChild(section5)
