function toggleMode() {
  const html = document.documentElement

  /* Outra maneira de fazer 
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */
  html.classList.toggle(
    "light"
  ) /*essa funcao toggle ja existe dentro do js e substitui a necessidade de fazer o codigo acima*/

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png" , alt ="Gustavo e Sabrina." )
  
  } else {
    // se tiver sem light mode, manter img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
