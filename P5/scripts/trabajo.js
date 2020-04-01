let data = {
  "dni": "444444444",
  "nacimiento": [12, 3, 1989],
  "ingreso": 2015,
  "prod": 15,
  "anti": 5,
  "sueldo": 2000
}

function edad(nacimiento) {
  let year = new Date();
  let edad = year.getFullYear() - nacimiento[2];

  if (year.getMonth() < nacimiento[2])
    edad--;

  if (year.getMonth() == nacimiento[2] && year.getDate() <= nacimiento[0])
    edad--;

  console.log(`La edad es ${edad}.`);
}

function sueldo(prod, anti, base) {
let sueldo = base + (base*prod)/100 + Math.floor(anti/3) * 0.1 * base;
console.log(`El sueldo bruto es ${sueldo}.`)
}

edad(data["nacimiento"])
sueldo(data["prod"], data["anti"], data["sueldo"])