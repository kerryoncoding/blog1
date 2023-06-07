
const btnText = document.querySelector("#changeText")
const btnContent = document.querySelector("#changeContent")
const btnHtml= document.querySelector("#changeHtml")

btnText.addEventListener("click", ()=> {
   let changeZero = document.querySelector("#layer-zero") 
   console.log(changeZero.innerText)
   console.log(changeZero.textContent)
   console.log(changeZero.innerHTML)
})

btnContent.addEventListener("click", ()=> {
   let changeOne = document.querySelector("#layer-one") 
   console.log(changeOne.innerText)
   console.log(changeOne.textContent)
   console.log(changeOne.innerHTML)
})

btnHtml.addEventListener("click", ()=> {
   let changeTwo = document.querySelector("#layer-two") 
   changeTwo.innerText = "innerText change to layer tww"
   changeTwo.textContent = "textContent change to layer two"
   changeTwo.innerHTML = "innerHTML change to layer two"
})

