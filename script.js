const malla = {
  "1er Año": {
    "1er Cuatrimestre": [
      "Biología General",
      "Química General",
      "Matemática 1"
    ],
    "2do Cuatrimestre": [
      "Química Orgánica",
      "Física General",
      "Taxonomía",
      "Matemática 2",
      "Bioestadística"
    ]
  },
  "2do Año": {
    "Anual": [
      "Genética General 1",
      "Biología Celular y Molecular",
      "Biología Animal"
    ],
    "1er Cuatrimestre": [
      "Biofísica",
      "Histología General"
    ],
    "2do Cuatrimestre": [
      "Biología Vegetal",
      "Química Biológica"
    ]
  },
  "3er Año": {
    "Anual": [
      "Genética General 2",
      "Ecología General y Evolutiva",
      "Anatomofisiología General"
    ],
    "1er Cuatrimestre": [
      "Microbiología General"
    ],
    "2do Cuatrimestre": [
      "Fisiología Vegetal",
      "Inglés Técnico"
    ]
  },
  "4to Año": {
    "1er Cuatrimestre": [
      "Embriología General",
      "Evolución",
      "Bioética y Legislación",
      "Bioinformática"
    ],
    "2do Cuatrimestre": [
      "Genética Molecular",
      "Genética de Poblaciones y Cuantitativa",
      "Genética de Microorganismos",
      "Citogenética General",
      "Inmunogenética"
    ]
  },
  "5to Año": {
    "Anual": [
      "Tesis de Grado"
    ],
    "1er Cuatrimestre": [
      "Genética de la Producción",
      "Genética Evolutiva",
      "Genómica",
      "Genética del Desarrollo",
      "Genética Aplicada"
    ]
  }
};

const container = document.getElementById("malla");

for (const [año, cuatris] of Object.entries(malla)) {
  const divAño = document.createElement("div");
  divAño.className = "año";

  const h2 = document.createElement("h2");
  h2.className = "titulo-año";
  h2.textContent = año;
  divAño.appendChild(h2);

  for (const [cuatri, materias] of Object.entries(cuatris)) {
    const divCuatri = document.createElement("div");
    divCuatri.className = "cuatri";

    const h3 = document.createElement("h3");
    h3.textContent = cuatri;
    divCuatri.appendChild(h3);

    const divMaterias = document.createElement("div");
    divMaterias.className = "materias";

    materias.forEach(materia => {
      const div = document.createElement("div");
      div.className = "materia";
      div.textContent = materia;

      // estado guardado
      if (localStorage.getItem(materia) === "aprobada") {
        div.classList.add("aprobada");
      }

      div.onclick = () => {
        div.classList.toggle("aprobada");
        const estado = div.classList.contains("aprobada") ? "aprobada" : "pendiente";
        localStorage.setItem(materia, estado);
      };

      divMaterias.appendChild(div);
    });

    divCuatri.appendChild(divMaterias);
    divAño.appendChild(divCuatri);
  }

  container.appendChild(divAño);
}

