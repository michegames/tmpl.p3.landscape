import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    this.center = { x: width / 2, y: height / 2 };

    this.add.image(this.center.x, this.center.y, "background");

    this.add.image(this.center.x, 300, "logo");

    this.add
      .text(this.center.x, 460, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
