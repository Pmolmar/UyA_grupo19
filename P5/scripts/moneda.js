function money(moneda, opcion, orden = true) {
  //el orden dice si de X a Y(true) o de Y a X(false)
  // opcion 0 euros dollar
  // opcion 1 euros libra
  // opcion 2 dolar a libra
  let x = ["euros", "libra"]
  let y = ["dollar", "dollar"]
  let ratios = [0.91, 1.24]

  if (orden) {
    let change = moneda / ratios[opcion];
    console.log(`${moneda} ${x[opcion]} son: ${change} ${y[opcion]}`);
  }
  else {
    let change = moneda * ratios[opcion];
    console.log(`${moneda} ${y[opcion]} son: ${change} ${x[opcion]}`);
  }
}

money(2, 0)