function tema(){
  let data = new Date()
  let hora = data.getHours()
  let isSun = hora > 6 && hora < 18

  if (!isSun){
    document.querySelector("body").classList.add("dark") // .classList.remove("") para remover
  }
}

addEventListener("load", tema())