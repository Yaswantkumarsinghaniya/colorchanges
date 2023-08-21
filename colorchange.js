const getColor=()=>{
const randomNumber=Math.floor(Math.random()*16677215)
const randomCode="#"+randomNumber.toString(16)
document.getElementById('connect').innerText=randomCode
document.body.style.backgroundColor=randomCode
navigator.clipboard.writeText(randomCode)
}

document.getElementById('btn').addEventListener(
  "click",getColor
   )
 getColor()
   

  