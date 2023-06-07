

const form = document.querySelector("#myForm")
const message = document.querySelector("#greeting")

form.addEventListener("submit", (e)=> {
   e.preventDefault();
   let input = e.target[0].value

   //const user = document.querySelector("#name")
   message.innerHTML = `Welcome ${input}`
})

