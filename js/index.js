const informacionPacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M"
    },
    diasIngresado: 5,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M"
    },
    diasIngresado: 1,
    dieta: "Sin sal"
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H"
    },
    diasIngresado: 2,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M"
    },
    diasIngresado: 6,
    dieta: "Sin sal"
  }
];

const nuevoObjeto = (elementos) => {
  const numeroPacientes = elementos.length;
  const mayoresEdad = elementos.filter((elemento) => elemento.paciente.edad > 17).length;
  const hombresDietaDiabetes = elementos.filter((elemento) => elemento.paciente.sexo === "H"
    && elemento.dieta.toLowerCase() === "diabetes").length;
  const totalDiasIngresados = elementos.map((elemento => elemento.diasIngresado))
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  const listaMujeres = elementos.filter((elemento) => elemento.paciente.sexo.toUpperCase() === "M");
  const mediaEdadListaMujeres = Math.round(listaMujeres.map((elemento) => elemento.paciente.edad)
    // eslint-disable-next-line no-mixed-operators
    .reduce((acumulador, valorActual) => acumulador + valorActual) / listaMujeres.length * 100) / 100;

  const objeto = {
    nPacientes: numeroPacientes,
    nMayoresEdad: mayoresEdad,
    nHombresDiabeticos: hombresDietaDiabetes,
    totalDiasIngreso: totalDiasIngresados,
    mediaEdadMujeres: mediaEdadListaMujeres
  };
  return objeto;
};

console.log(nuevoObjeto(informacionPacientes));
