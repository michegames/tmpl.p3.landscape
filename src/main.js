import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import {
  initGameLandScape,
  calcOther,
  isMobile,
  getSceneID,
  __HEIHT__,
} from "./utils/helpers";

const config = {
  type: Phaser.AUTO,
  width: calcOther(__HEIHT__),
  height: __HEIHT__,
  parent: "game-container",
  backgroundColor: "#ffffff",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Boot, Preloader, MainMenu, Game, GameOver],
};

let game = null;
let lastSceneID = null;

// start game only if is landscape
if (window.innerWidth > innerHeight) {
  game = initGameLandScape(config);
}

function resizeLandScape() {
  if (lastSceneID === null && game !== null) {
    const scene = game.scene.getScenes(true);
    const sceneID = getSceneID(scene);
    if (sceneID !== null) lastSceneID = sceneID;
  }
  // landscape, init game if not previus start
  if (window.innerWidth > innerHeight) {
    if (game === null) {
      game = initGameLandScape(config);
    } else {
      if (isMobile()) {
        game.scene.resume(lastSceneID);
      } else {
        game.scene.stop(lastSceneID);
        game.scale.resize(calcOther(__HEIHT__), __HEIHT__);
        game.scene.start(lastSceneID);
      }
    }
  } else {
    if (game === null) return;
    const scene = game.scene.getScenes(true);
    const sceneID = getSceneID(scene);
    if (sceneID !== null) lastSceneID = sceneID;
    game.scene.pause(lastSceneID);
  }
}

window.addEventListener("resize", resizeLandScape, false);

export default game;
