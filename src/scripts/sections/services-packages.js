// Datos de los paquetes con sus subniveles
const packagesData = {
  automation: {
    title: "Automatización de procesos",
    description: "Optimiza y automatiza tus flujos de trabajo para ahorrar tiempo y reducir errores.",
    levels: [
      {
        name: "Básica",
        description: "Automatización de tareas simples y repetitivas",
        features: ["Flujos simples", "Sin integraciones complejas"]
      },
      {
        name: "Intermedia",
        description: "Automatización con integraciones y lógica condicional",
        features: ["Integraciones múltiples", "Lógica condicional avanzada"]
      },
      {
        name: "Avanzada",
        description: "Automatización completa con análisis e inteligencia",
        features: ["IA y machine learning", "Análisis predictivo", "Monitoreo 24/7"]
      }
    ]
  },
  systems: {
    title: "Sistemas internos a medida",
    description: "Desarrollamos sistemas internos personalizados que se adaptan perfectamente a tus procesos.",
    levels: [
      {
        name: "MVP",
        description: "Versión mínima viable para validar tu concepto",
        features: ["Funcionalidades esenciales", "Despliegue rápido"]
      },
      {
        name: "Escalable",
        description: "Sistema preparado para crecer con tu negocio",
        features: ["Arquitectura modular", "Base de datos optimizada"]
      },
      {
        name: "Enterprise",
        description: "Sistema robusto con todas las características",
        features: ["Alta disponibilidad", "Seguridad avanzada", "Soporte 24/7"]
      }
    ]
  },
  data: {
    title: "Datos y reportes",
    description: "Transforma tus datos en información valiosa con reportes actionables y visualizaciones.",
    levels: [
      {
        name: "Reportes estándar",
        description: "Reportes básicos y periódicos de tus datos",
        features: ["Reportes automáticos", "Exportación múltiple"]
      },
      {
        name: "Dashboards interactivos",
        description: "Visualización dinámica de tus datos en tiempo real",
        features: ["Gráficos interactivos", "Filtros personalizados"]
      },
      {
        name: "Análisis avanzado",
        description: "Análisis profundo con inteligencia de negocios",
        features: ["Predicciones", "Análisis de tendencias", "Insights automáticos"]
      }
    ]
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const packageButtons = document.querySelectorAll('[data-package-btn]');
  
  packageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const packageId = this.dataset.packageBtn;
      openPackageModal(packageId);
    });
  });
});

// Función para abrir la pseudo-pestaña (modal flotante)
function openPackageModal(packageId) {
  const packageData = packagesData[packageId];
  if (!packageData) return;
  
  console.log(`Abriendo modal para: ${packageData.title}`);
  // La funcionalidad del modal se implementará en la siguiente fase
}
