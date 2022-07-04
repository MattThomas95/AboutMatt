<template>
  <div>
    <canvas
      id="renderCanvas"
      :class="$style.renderCanvas"
      touch-action="none"
    ></canvas>
    <Portfolio />
    <Experience />
  </div>
</template>

<script>
import "babylonjs-loaders";
export default {
  name: "IndexPage",

  mounted() {
    this.$nextTick(() => {
      this.createScene();
    });
  },
  methods: {
    createScene() {
      const canvas = document.getElementById("renderCanvas"); // Get the canvas element
      const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
      BABYLON.SceneLoader.Load(
        "/3d/",
        "FBI_03.babylon",
        engine,
        function (scene) {
          scene.activeCamera.attachControl(canvas);
          scene.activeCamera.lowerRadiusLimit = 69045.466
          scene.activeCamera.upperRadiusLimit = 69045.466
          const camera = scene.activeCamera;
          const standardPipeline = new BABYLON.PostProcessRenderPipeline(
            engine,
            "standardPipeline"
          );
          const blackAndWhite = new BABYLON.BlackAndWhitePostProcess(
            "bw",
            1.0,
            null,
            null,
            engine,
            false
          );
          const horizontalBlur = new BABYLON.BlurPostProcess(
            "hb",
            new BABYLON.Vector2(1.0, 0),
            20,
            1.0,
            null,
            null,
            engine,
            false
          );
          const blackAndWhiteThenBlur = new BABYLON.PostProcessRenderEffect(
            engine,
            "blackAndWhiteThenBlur",
            function () {
              return [blackAndWhite, horizontalBlur];
            }
          );
          standardPipeline.addEffect(blackAndWhiteThenBlur);
          scene.postProcessRenderPipelineManager.addPipeline(standardPipeline);
          scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(
            "standardPipeline",
            camera
          );

          const myParticleSystem = new BABYLON.ParticleSystem(
            "particles",
            2000,
            scene
          );
          // Texture of each particle
          myParticleSystem.particleTexture = new BABYLON.Texture(
            "/images/ufo.png"
          );
          // Particle system settings
          myParticleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // a Vector3
          myParticleSystem.minSize = 5000;
          myParticleSystem.direction1 = new BABYLON.Vector3(
            40000,
            40000,
            40000
          );
          myParticleSystem.direction2 = new BABYLON.Vector3(1000, 1000, 1000);
          myParticleSystem.start();
          function onMouseMove() {
            const y = (scene.pointerY - canvas.height / 2) / 1800;
            const x = (scene.pointerX - canvas.width / 2) / 1800;
            console.log(y);
            camera.alpha = x - 2;
            camera.beta = y + 1;
          }
          canvas.addEventListener("mousemove", onMouseMove);

          // scene.debugLayer.show({
          //   embedMode: true,
          // })
          engine.runRenderLoop(function () {
            scene.render();
          });
        }
      );
    },
  },
};
</script>
<style lang="scss" module>
.main-wrapper {
  width: 100%;
  height: 100%;
  background-color: #7da2a9;
}

.render-canvas {
  width: 80vw;
  height: 50vh;
}
</style>