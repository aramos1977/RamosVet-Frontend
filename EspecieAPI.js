class EspecieAPI{

    //Método guardarespecie()

    async guardarEspecie(){

        //Paso 1
        //TO DO: validar datos
        
        
        const nombre= document.getElementById("nombre").value;
        const clasificacion= document.getElementById("clasificacion").value;
        const esperanza_vida= parseInt(document.getElementById("esperanza_vida").value);
        const peso_promedio= parseFloat(document.getElementById("peso_promedio").value)
    
        //Crear el objeto json para paasar al backend
        const datos={
            nombre:nombre,
            clasificacion:clasificacion,
            esperanza_vida:esperanza_vida,
            peso_promedio:peso_promedio
        };

        await fetch(
            this.url = "http://localhost:3001/crearEspecie",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers: {
                    "Content-Type ":" application/json"
                }
            
             }
        );
        console.log("El registro se guardó correctamente");
            }

    async listarEspecies(){
        const especies = await fetch ("http://localhost:3001/listarEspecie");
        especies = await especies.json();
        //Paso 1.
        //TO DO: La API no debería estar sin protección
        const miTabla=document.getElementById("tabla_especies");

        //Paso 2:
        especies.forEach(
            (especie)=>{
                //Paso 2.1
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=especie.id_especie;
                fila.insertCell().innerText=especie.nombre;
                fila.insertCell().innerText=especie.clasificacion;
                fila.insertCell().innerText=especie.esperanza_vida;
                fila.insertCell().innerText=especie.peso_promedio;
            }
        );
    }
}

//Convertir esta clase en un módulo
export default EspecieAPI;
