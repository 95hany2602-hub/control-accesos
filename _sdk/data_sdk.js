window.dataSdk = {
    // Función para conectar con el sistema
    init: async function() {
        console.log("Sistema Via Cumbres Conectado");
        return { isOk: true };
    },
    
    // Función para guardar los datos del guardia
    create: async function(datos) {
        console.log("Datos recibidos para guardar:", datos);
        
        // Simulamos la respuesta del servidor para que la App no se trabe
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ 
                    isOk: true, 
                    data: datos,
                    mensaje: "Guardado correctamente" 
                });
            }, 800); // Pequeña espera para que el guardia vea que el sistema "trabaja"
        });
    }
};

