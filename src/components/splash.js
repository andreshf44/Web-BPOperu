// splash.js
import * as rive from '@rive-app/canvas';

export const initRive = (canvasElement) => {
  function computeSize() {
    r.resizeDrawingSurfaceToCanvas();
  }

  window.onresize = computeSize;

  window
      .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
      .addEventListener("change", computeSize);

  const r = new rive.Rive({
    src: "./bpo_signature.riv",
    stateMachines: "Animation 3:00",
    canvas: canvasElement,
    layout: new rive.Layout({
      fit: rive.Fit.Layout,
      layoutScaleFactor: 2,
    }),
    autoplay: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });

  return r;
};