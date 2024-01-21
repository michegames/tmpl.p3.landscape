const DESIDERED = {
  landscape: {
    w: 1031,
    h: 580,
  },
  portrait: {
    w: 580,
    h: 1031,
  },
};

const __MAX__ = 1300;
const __HEIHT__ = 580;
const __WIDTH__ = 580;

function initGameLandScape(config) {
  let tmp = Object.assign({}, config);
  const width = calcOther(__HEIHT__);
  tmp.width = width;
  const game = new Phaser.Game(tmp);
  game.config.info = {
    area: {
      w: DESIDERED.landscape.w,
      h: DESIDERED.landscape.h,
    },
    res: {
      w: width,
      h: __HEIHT__,
    },
    mode: "landscape",
  };
  return game;
}

function initGameportrait(config) {
  let tmp = Object.assign({}, config);
  const height = calcOther(__WIDTH__);
  tmp.height = height;
  const game = new Phaser.Game(tmp);
  game.config.info = {
    area: {
      w: DESIDERED.portrait.w,
      h: DESIDERED.portrait.h,
    },
    res: {
      w: __WIDTH__,
      h: height,
    },
    mode: "portrait",
  };
  return game;
}

function calcOther(__size__) {
  if (window.innerWidth > window.innerHeight) {
    const ratio = window.innerWidth / window.innerHeight;
    const _width = Math.min(__MAX__, Math.round(__size__ * ratio));
    const width = Math.max(_width, (__size__ * 16) / 9.0);
    return width;
  }
  if (window.innerHeight > window.innerWidth) {
    const ratio = window.innerHeight / window.innerWidth;
    const _height = Math.min(__MAX__, Math.round(__size__ * ratio));
    const height = Math.max(_height, (__size__ * 16) / 9.0);
    return height;
  }
  return __size__;
}

function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function getSceneID(scene) {
  if ("length" in scene && scene.length > 0 && "scene" in scene[0]) {
    return scene[0].scene.key;
  }
  return null;
}

export {
  initGameLandScape,
  initGameportrait,
  calcOther,
  isMobile,
  __HEIHT__,
  __WIDTH__,
  getSceneID,
};
