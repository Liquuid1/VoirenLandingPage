// Datos de los paquetes con sus subniveles
const packagesData = {
  automation: {
    title: "Automatización de procesos",
    description: "Optimiza y automatiza tus flujos de trabajo para ahorrar tiempo y reducir errores.",
    levels: [
      {
        name: "Básica",
        description: "Automatización de tareas simples y repetitivas",
        features: ["Flujos simples", "Bajo volumen de datos", "Configuración rápida"]
      },
      {
        name: "Intermedia",
        description: "Automatización con integraciones y lógica condicional",
        features: ["Integraciones múltiples", "Lógica condicional avanzada", "Manejo de errores"]
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
        features: ["Funcionalidades esenciales", "Despliegue rápido", "Costo optimizado"]
      },
      {
        name: "Escalable",
        description: "Sistema preparado para crecer con tu negocio",
        features: ["Arquitectura modular", "Base de datos optimizada", "Multi-usuario"]
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
        features: ["Reportes automáticos", "Exportación múltiple", "Horarios flexibles"]
      },
      {
        name: "Dashboards interactivos",
        description: "Visualización dinámica de tus datos en tiempo real",
        features: ["Gráficos interactivos", "Filtros personalizados", "Actualización en tiempo real"]
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
  const modalOverlay = document.getElementById('packagesOverlay');
  const modal = document.getElementById('packagesModal');
  const closeButton = document.getElementById('packagesModalClose');

  // Abrir modal al hacer click en los botones
  packageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const packageId = this.dataset.packageBtn;
      openPackageModal(packageId);
    });
  });

  // Cerrar modal
  closeButton?.addEventListener('click', closePackageModal);
  modalOverlay?.addEventListener('click', closePackageModal);

  // Evitar cerrar modal al hacer click en el contenido
  modal?.addEventListener('click', function(e) {
    if (e.target === modal) {
      closePackageModal();
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closePackageModal();
    }
  });
});

// Función para abrir la pseudo-pestaña (modal flotante)
function openPackageModal(packageId) {
  const packageData = packagesData[packageId];
  if (!packageData) return;

  const modal = document.getElementById('packagesModal');
  const overlay = document.getElementById('packagesOverlay');
  const titleEl = document.getElementById('packageModalTitle');
  const descriptionEl = document.getElementById('packageModalDescription');
  const levelsContainer = document.getElementById('packageModalLevels');

  // Actualizar contenido del modal
  if (titleEl) titleEl.textContent = packageData.title;
  if (descriptionEl) descriptionEl.textContent = packageData.description;

  // Limpiar y rellenar los niveles
  if (levelsContainer) {
    levelsContainer.innerHTML = '';
    packageData.levels.forEach((level, index) => {
      const levelCard = createLevelCard(level, index);
      levelsContainer.appendChild(levelCard);
    });
  }

  // Mostrar modal con animación
  overlay?.classList.add('active');
  modal?.classList.add('active');

  // Prevenir scroll en el body
  document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closePackageModal() {
  const modal = document.getElementById('packagesModal');
  const overlay = document.getElementById('packagesOverlay');

  overlay?.classList.remove('active');
  modal?.classList.remove('active');

  // Restaurar scroll en el body
  document.body.style.overflow = 'auto';
}

// Función para crear una card de nivel
function createLevelCard(level, index) {
  const card = document.createElement('div');
  card.className = 'package-level';
  card.innerHTML = `
    <h3 class="package-level__name">${level.name}</h3>
    <p class="package-level__description">${level.description}</p>
    <ul class="package-level__features">
      ${level.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
  `;
  return card;
}
