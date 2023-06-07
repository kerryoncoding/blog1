
const btnZero = document.querySelector("#changeZero")
const btnOne = document.querySelector("#changeOne")
const btnTwo = document.querySelector("#changeTwo")

btnZero.addEventListener("click", ()=> {
   console.log("layer Zero:")
   let changeZero = document.querySelector("#layer-zero") 
   console.log(changeZero.innerText)
   console.log(changeZero.textContent)
   console.log(changeZero.innerHTML)
})

btnOne.addEventListener("click", ()=> {
   console.log("layer One:")
   let changeOne = document.querySelector("#layer-one") 
   console.log(changeOne.innerText)
   console.log(changeOne.textContent)
   console.log(changeOne.innerHTML)
})

btnTwo.addEventListener("click", ()=> {
   console.log("layer Two:")
   let changeTwo = document.querySelector("#layer-two") 
   console.log(changeTwo.innerText)
   console.log(changeTwo.textContent)
   console.log(changeTwo.innerHTML)
})

