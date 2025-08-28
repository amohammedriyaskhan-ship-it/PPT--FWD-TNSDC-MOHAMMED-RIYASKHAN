// Typing Effect for Name
const text = "Mohammed Riyaskhan";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
}

typing();