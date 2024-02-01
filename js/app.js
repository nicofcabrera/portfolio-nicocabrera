const btnDark = document.querySelector(".btn-dark_mode"),
  body = document.querySelector("body"),
  navegacion = document.querySelector("nav"),
  proyectos = document.querySelector(".container_proyectos"),
  contacto = document.querySelector(".container_contacto"),
  boton = document.querySelectorAll(".boton"),
  imagen = document.querySelectorAll(".experiencia .bg-dark")

btnDark.addEventListener("click", () => {
  btnDark.firstElementChild.classList.toggle("d-none")
  btnDark.lastElementChild.classList.toggle("d-none")
  
  body.classList.toggle("bg-dark")
  body.classList.toggle("text-white")

  navegacion.querySelectorAll("a").forEach(e => {
    e.classList.toggle("bg-secondary")
    e.classList.toggle("bg-gradient")
    e.classList.toggle("shadow-none")
    e.classList.toggle("border")
    e.classList.toggle("border-dark")
    e.classList.toggle("border-top-0")
  });

  proyectos.querySelectorAll(".card").forEach(e => {
    e.classList.toggle("bg-secondary")
  })

  proyectos.querySelectorAll(".btn-outline-dark").forEach(e => {
    e.classList.toggle("bg-dark")
    e.classList.toggle("text-white")

  })

  boton.forEach(e => {
    e.classList.toggle("btn-dark")
    e.classList.toggle("btn-light")
  })

  imagen.forEach(e => {
    e.classList.toggle("bg-dark")
    e.classList.toggle("bg-secondary")
  })

  contacto.classList.toggle("bg-secondary")
})
