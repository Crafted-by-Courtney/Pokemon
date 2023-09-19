let titleEl = document.getElementById('title');
console.log(titleEl);
titleEl.style.color = "purple";
titleEl.style.backgroundColor = "yellow";
titleEl.style.textAlign = "center";
console.log(titleEl.id);

let pe1 = document.querySelector(".cool");
pe1.style.color = "green";
pe1.setAttribute("class", "example");

let a = document.querySelector("a");
a.setAttribute("href", "www.google.com");

console.log(pe1);

pe1.innerHTML = 'Comments for <strong>Today</strong><div><i>Type here</i></div>';