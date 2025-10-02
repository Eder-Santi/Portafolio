import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Import the functions you need from the SDKs you need
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBNElPFyglDgSdkEv1g2MnGx5d_U1ew3ws",
        authDomain: "formu-portafolio.firebaseapp.com",
        projectId: "formu-portafolio",
        storageBucket: "formu-portafolio.firebasestorage.app",
        messagingSenderId: "730096760837",
        appId: "1:730096760837:web:5e4f124004ee7b34ff446c",
        measurementId: "G-TMM059TBZD"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    //const analytics = getAnalytics(app);//
    const form = document.getElementById("contacto-form");

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;
        const fecha = new Date();

        try {
            await addDoc(collection(db, "Clientes"), {
                nombre: nombre,
                email: email,
                asunto: asunto,
                mensaje: mensaje,
                fecha: fecha,
            });
            console.log("Datos enviados");
            alert("Solicitud eviada");
            form.reset();
        } catch(error){
            console.log("Error al enviar datos");
            alert("Hubo un error al enviar datos");
        }
    });