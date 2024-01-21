import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    this.center = { x: width / 2, y: height / 2 };

    this.cameras.main.setBackgroundColor(0x00ff00);

    this.add.image(this.center.x, this.center.y, "background").setAlpha(0.5);

    this.add
      .text(
        this.center.x,
        384,
        "Make something fun!\nand share it with us:\nsupport@phaser.io",
        {
          fontFamily: "Arial Black",
          fontSize: 38,
          color: "#ffffff",
          stroke: "#000000",
          strokeThickness: 8,
          align: "center",
        },
      )
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });

    this.add
      .rectangle(
        this.center.x,
        this.center.y,
        this.game.config.info.area.w,
        this.game.config.info.area.h,
        0xffffff,
        0.7,
      )
      .setOrigin(0.5);
  }
}
