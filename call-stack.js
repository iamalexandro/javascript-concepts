const cortar = (ingrediente) => {
  console.log("Cortar " + ingrediente);
  // tambien lo puedes hacer asi 
  console.log(`Cortar ${ingrediente}`)
};

const mezclarIngredientes = (n) => {
  if (n <= 0) return;

  console.log("Mezclar #" + n);
  mezclarIngredientes(n - 1);
};

const comer = () => {
  console.log("Comer");
};

const hacerEnsaladaMixta = () => {
  cortar("tomate");
  cortar("lechuga");
  cortar("cebolla");
  mezclarIngredientes(5);
  comer();
};

hacerEnsaladaMixta();
