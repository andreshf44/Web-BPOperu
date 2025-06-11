// splash.js
import * as rive from '@rive-app/canvas';

export const initRive = (canvasElement) => {
  let r;

  // Función para ajustar el tamaño del canvas al redimensionar la ventana o cambiar de resolución
  function computeSize() {
    if (r) {
      r.resizeDrawingSurfaceToCanvas();
    }
  }

  // Ajusta el canvas cuando se cambia el tamaño de la ventana
  window.addEventListener("resize", computeSize);

  // Ajusta el canvas si cambia la densidad de píxeles (por ejemplo, si cambias de monitor)
  window
    .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
    .addEventListener("change", computeSize);

  // Inicializa la animación Rive
  r = new rive.Rive({
    src: "./bpo_signature.riv",
    stateMachines: "Animation 3:00", // nombre de la máquina de estados definida en Rive
    canvas: canvasElement,
    layout: new rive.Layout({
      fit: rive.Fit.Contain, // ← CAMBIO: fit debe ser 'Contain', 'Cover', 'Fill', etc. No 'Layout'
      layoutScaleFactor: 2,
    }),
    autoplay: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas(); // ajusta el canvas una vez cargado
    },
  });

  return r;
};
