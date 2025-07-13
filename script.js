const materias = [
  { nombre: "Química General", id: "QG", correlativas: [] },
  { nombre: "Química Orgánica", id: "QO", correlativas: ["QG"] },
  { nombre: "Biología", id: "BIO", correlativas: [] },
  { nombre: "Genética", id: "GEN", correlativas: ["BIO"] }
];

const malla = document.getElementById("malla");

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerText = m.nombre;
  div.dataset.id = m.id;

  // Restaurar estado del localStorage
  if (localStorage.getItem(m.id) === "aprobada") {
    div.classList.add("aprobada");
  }

  div.onclick = () => {
    div.classList.toggle("aprobada");
    localStorage.setItem(m.id, div.classList.contains("aprobada") ? "aprobada" : "pendiente");
  };

  malla.appendChild(div);
});
