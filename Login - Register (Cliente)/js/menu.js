//bucle infinito de las cartas
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});



//terminos y condiciones
(async() => {
    const ok = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        // terminos y 
    const { value: accept } = await Swal.fire({
        title: 'Primero acepta nuestro terminos y condiciones por favor',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder: 'Estoy de acuerdo con los términos y condiciones',
        confirmButtonText: 'Continuar',
        allowOutsideClick: false,
        inputValidator: (result) => {
            return !result && 'Nesesitas aceptar nuestras condiciones para acceder'
        }
    })
    if (accept) {
        ok.fire({
            icon: 'success',
            title: 'Gracias por aceptar nuestros términos y condiciones'
        })
    }
})()

function transaccion() {
    const { value: numCuenta } = Swal.fire({
        title: '¿Qué transacciones harás?',
        text: 'Coloque el numero de cuenta a transferir',
        icon: 'question',
        confirmButtonText: "¡Vamos allá!",
        input: 'text',
        inputPlaceholder: 'Número de cuenta'
    })
}

function depositar() {
    var numCuentaDepositar = document.getElementById("").value;
    var saldo = document.getElementById("").value;
    var depositarDinero = document.getElementById("").value;
    if (depositarDinero < saldo) {
        saldo -= depositarDinero;
    } else {
        alert("Saldo insuficiente para realizar deposito");
    }
}

function retirar() {
    var numCuenta = document.getElementById("").value;
    var saldo = document.getElementById("").value;
    var retirar = document.getElementById("").value;
    if (saldo != 0) {
        saldo -= retirar;
    } else {
        alert("Saldo insuficiente para retirar dinero");
    }

}