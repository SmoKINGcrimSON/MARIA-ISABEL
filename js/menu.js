document.addEventListener('DOMContentLoaded', () => {
    const userButton = document.querySelector('.user-button');
    const dropdownMenu = userButton.querySelector('.dropdown-menu');

    // Mostrar/ocultar el menú desplegable del usuario
    userButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Cerrar el menú desplegable cuando se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.user-button')) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Función para cargar contenido dinámico
    const loadContent = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('main-content').innerHTML = html;
                loadScripts();
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    };

    // Función para cargar scripts dinámicamente
    const loadScripts = () => {
        const scriptSources = [
            "vendor/jquery/jquery.min.js",
            "vendor/bootstrap/js/bootstrap.bundle.min.js",
            "vendor/jquery-easing/jquery.easing.min.js",
            "js/sb-admin-2.min.js",
            "vendor/chart.js/Chart.min.js",
            "js/demo/chart-area-demo.js",
            "js/demo/chart-pie-demo.js",
            "js/demo/chart-bar-demo.js"
        ];
        scriptSources.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.body.appendChild(script);
        });
    };

    // Agregar eventos de clic a los enlaces del sidebar
    document.getElementById('inventario-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('inventario.html');
    });

    document.getElementById('ventas-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('ventas.html');
    });

    document.getElementById('proveedores-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('proveedores.html');
    });

    document.getElementById('dashboard-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('dashboard.html');
    });
});

///
// Obtener el elemento :root (normalmente el documento entero)
const root = document.documentElement;

// Función para cambiar los colores
function cambiarColoresParaDaltonicos() {
    root.style.setProperty('--sidebar-background', '#6bbaff');
    root.style.setProperty('--letter-color', '#444');
    root.style.setProperty('--color-in-white-background', 'rgba(0, 0, 0, 0.8)');
}

function coloresNormales(){
    root.style.setProperty('--sidebar-background', '#007bff');
    root.style.setProperty('--letter-color', '#f8f9fa');
    root.style.setProperty('--color-in-white-background', '#00000077');
}

const switchInput = document.querySelector('#flexSwitchCheckDefault');

// Agregar evento para el cambio de estado (checked o unchecked)
switchInput.addEventListener('change', function() {
    if (this.checked) {
        cambiarColoresParaDaltonicos()
    } else {
        coloresNormales()
    }
});