class Cliente{
    constructor(producto, precioProducto, cantidadDeProductos, cuotaProducto,){
        this.producto = producto;
        this.precioProducto = precioProducto;
        this.cantidadDeProductos = cantidadDeProductos;
        this.cuotaProducto = cuotaProducto;
        
    }
}



let listaCliente = [];
for(let i = 0 ; i < 2 ; i++){
let producto = prompt("Ingrese el tipo de producto");
let precioProducto = parseInt(prompt("ingrese el costo de " + producto));
let cantidadDeProductos = parseInt(prompt("Indique la cantidad que desea compra en unidades"));
let cuotaProducto = parseInt(prompt("Indique la cantidad de cuotas, 6-12-18-24"));


let nuevoCliente = new Cliente(producto , precioProducto , cantidadDeProductos , cuotaProducto);
listaCliente.push(nuevoCliente);



function precioTotal(precioProducto, cantidadDeProductos){
   let costo = precioProducto * cantidadDeProductos;
   
   return costo;
}
let agregadoDeIva =  (precioTotal(precioProducto, cantidadDeProductos) * 21)  / 100;

function precioEnCuotas(){
   if (cuotaProducto == 6){
       let interesesEn6Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 5) / 100;
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn6Cuotas;
      alert("El precio final iva e intereces incluidos es de " + producto + " es de $" + precioFinal + " que disfrute su compra");
      return("Su cuota mensual de " + producto + " es de $ " + (precioFinal / cuotaProducto));
   }
   else if (cuotaProducto == 12){
       let interesesEn12Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 10 ) / 100; 
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn12Cuotas;
       alert("El precio final iva e intereces incluidos de " + producto + " es de $" + precioFinal + " que disfrute su compra");
       return("Su cuota mensual de " + producto + " es de $ " + (precioFinal / cuotaProducto));

   }
   else if (cuotaProducto == 18){
       
       let interesesEn18Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 15) / 100;  
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn18Cuotas;
       alert("El precio final iva e intereces incluidos de " + producto + " es de $" + precioFinal + " que disfrute su compra");
       return("Su cuota mensual de " + producto + " es de $ "+ (precioFinal / cuotaProducto));
   }
   else if (cuotaProducto == 24 ){ 
       let interesesEn24Cuotas = (precioTotal(precioProducto, cantidadDeProductos) * 20) / 100;
       let precioFinal = precioTotal(precioProducto, cantidadDeProductos) + agregadoDeIva + interesesEn24Cuotas;
       alert("El precio final iva e intereces incluidos de " + producto + " es de $" + precioFinal + " que disfrute su compra");
       return("Su cuota mensual de " + producto + " es de $ " + (precioFinal / cuotaProducto));

   }
   else{
       alert("El texto/numero ingresado es invalido, vuelva a intentarlo")
       console.log("El texto/numero ingresado es invalido, vuelva a intentarlo");
   }
   
}
console.log(precioEnCuotas());
alert(precioEnCuotas());
}
for(let cliente of listaCliente){
    console.log("<--------->")
    console.log("Producto " , cliente.producto);
    console.log("Precio " , cliente.precioProducto);
    console.log("Cantidad " , cliente.cantidadDeProductos);
    console.log("Cuotas " , cliente.cuotaProducto);
    // console.log("el precio de la cuota es: " cliente.precioEnCuotas);
}



console.log(listaCliente);