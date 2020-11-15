document.querySelector('.img-btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s-signup')
});

var arrClientes = [
    ["jean", "jeanpaullmm1@gmail.com", "asdfgh", 71049095, "2002-25-12", 958261152, 10000]
];

function registroCliente() {
    var contDigDNI = 0;
    var contDigTELF = 0;
    var nombre = document.getElementById("nombreRegistro").value;
    var email = document.getElementById("emailRegistro").value;
    var contraseña = document.getElementById("contraseñaRegistro").value;
    var dni = parseInt(document.getElementById("dni").value);
    var edad = document.getElementById("fechaNacimiento").value;
    var telefono = parseInt(document.getElementById("telefono").value);
    var saldo = 0;

    while (dni >= 1) {
        dni = dni / 10;
        contDigDNI++;
    }
    while (telefono >= 1) {
        telefono = telefono / 10;
        contDigTELF++;
    }

    if (contDigDNI == 8 && nombre != "" && contraseña != "" && email != "" && contDigTELF == 9) {
        datos = [nombre, email, contraseña, dni, telefono, edad, saldo];
        arrClientes.push(datos);
        alert("Bievenido " + nombre);
    } else {
        alert("Algún dato es incorrecto, intentelo nuevamente");
    }
}

var contErrores = 1;

function inicioSesion() {
    var encontrado = false;
    var usuario = document.getElementById("emailInicio").value;
    var contraseña = document.getElementById("contraseñaInicio").value;
    for (i = 0; i < arrClientes.length; i++) {
        if (arrClientes[i][1] == usuario && arrClientes[i][2] == contraseña) {
            alert("Bienvenido " + arrClientes[i][0]);
            encontrado = true;
            location.href = "menu.html";
            break;
        }

        if (contErrores == 3) {
            let timerInterval
            Swal.fire({
                title: 'Has fallado demasiadas veces',
                html: 'La pagina se cerrara en <b></b> milisegundos.',
                footer: 'Piensa mejor tus datos con este temón hasta la proxima esperamos verte pronto, no nos guarde rencor, es por su bien',
                timer: 5000,
                timerProgressBar: true,
                willOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.location.replace('https://www.youtube.com/watch?v=vnII48b0r7U');
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                    window.location.replace('https://www.youtube.com/watch?v=vnII48b0r7U');
                }
            })

        }
    }
    if (encontrado == false) {
        alert("Intentalo nuevamente pero, recuerda no fallar en demasiadas ocaciones");
        contErrores++;
    }
}