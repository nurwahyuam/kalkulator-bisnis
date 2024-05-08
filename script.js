function kalkulator() {
  let pisgor = parseInt(document.getElementById('pisgor').value);
  let donat = parseInt(document.getElementById('donat').value);
  let piscok = parseInt(document.getElementById('piscok').value);
  let lumpia = parseInt(document.getElementById('lumpia').value);
  let ote2 = parseInt(document.getElementById('ote2').value);
  let taisi = parseInt(document.getElementById('taisi').value);
  
  const calculators = (pisgor * 1000) + (donat * 2000) + (piscok * 2000) + (lumpia * 2500) + (ote2 * 1000) + (taisi * 1000);
  alert(calculators);
}