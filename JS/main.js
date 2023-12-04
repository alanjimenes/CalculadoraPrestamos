const btnCalcular = document.getElementById ('btnCalcular');
let cuotaResultado = document.getElementById ('cuota');
let interes = document.getElementById('interes');
let capital = document.getElementById('capital');
let plazo = document.getElementById('plazo');
let total = document.getElementById('total');

const f = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
minimumFractionDigits: 2
});
document.querySelector('.cuota').style.display = 'none';
function calcular() {
   if (interes.value == '' || capital.value == '' || plazo.value == '') {
        Swal.fire({
         icon: 'error',
         title: 'Oops!',
         text: 'Todos los valores son obligatorios!',
         button:false,
         timer:3000,
        });
        document.querySelector('.cuota').style.display = 'none';
        return;
}
   if  (interes.value < 0 || capital.value < 0 || plazo.value < 0) {
             Swal.fire({
              icon: 'error',
              title: 'Oops!',
              text: 'Los valores no pueden ser negativos!',
              button:false,
              timer:3000,
             });
             document.querySelector('.cuota').style.display = 'none';
             return;
}
   if (interes.value != '' || capital.value != '' || plazo.value != '') {
    let i = parseFloat(interes.value) / 100 / 12; // Tasa de interés mensual
    let c = parseFloat(capital.value); // Capital
    let p = parseFloat(plazo.value); // Plazo en meses
    let cuota = (i * c) / (1 - Math.pow(1 + i, -p));
    cuotaResultado.textContent = 'La cuota mensual es: RD' + f.format(cuota);
    total.textContent = 'El pago de interes total es: RD' + f.format(((cuota * p)-c));
    document.querySelector('.cuota').style.display = 'block'; // Mostrar el resultado
  
}

}
btnCalcular.addEventListener("click", calcular);