import { GAME, ASSETS, DATA } from '../properties.js';
import { projectiles, players } from '../constants.js';
import { removeWorldOutBounds } from '../mechanics.js';
import { messageCreate } from '../util/floatingMessage.js';

class Projectiles {
  constructor(data) {
    this.prop = data.prop;
    this.sprite = data.sprite;
    this.player = data.player;
    this.elapsed = 0;
    this.pos = { x: this.player.pos.x + this.player.dim.w / 4, y: this.player.pos.y - this.player.dim.h / 4 };
    this.vel = { x: 3, y: 3 };
    this.dim = { w: this.prop.frameWidth, h: this.prop.frameHeight / 2 };
    this.angle = data.angle;
  }

  draw(ctx, deltaTime) {
    this.elapsed += deltaTime * 0.01;

    const position = Math.floor(this.elapsed) % this.prop.animations['projectile'].loc.length;
    const frameX = this.prop.animations['projectile'].loc[position].x;
    const frameY = this.prop.animations['projectile'].loc[position].y;

    ctx.setTransform(1, 0, 0, 1, this.pos.x + this.dim.w / 2, this.pos.y + this.dim.h / 2);
    ctx.rotate(this.angle - Math.PI / 2);
    ctx.drawImage(this.sprite, frameX, frameY, this.prop.frameWidth, this.prop.frameHeight, -this.dim.w / 2, -this.dim.h / 2, this.prop.frameWidth, this.prop.frameHeight);
    ctx.resetTransform();

    if (GAME.DEBUG) {
      ctx.strokeStyle = 'red';
      ctx.strokeRect(this.pos.x, this.pos.y, this.dim.w, this.dim.h);
    }
  }

  update() {
    this.pos.x -= this.vel.x * Math.cos(this.angle);
    this.pos.y -= this.vel.y * Math.sin(this.angle);
  }
}

function create(mouseX, mouseY) {
  const data = {
    prop: DATA.projectile,
    sprite: ASSETS.images.projectile,
    player: players[0],
    angle: Math.atan2(players[0].pos.y - mouseY, players[0].pos.x - mouseX)
  };
  projectiles.push(new Projectiles(data));
};

function projectileFire(e) {
  if (GAME.MOUSE.pressed && players[0].stats.mana >= 20) {
    if (players[0].state.canShoot) {
      players[0].state.canShoot = false;
      players[0].stats.fireRateReg = 0;
      players[0].stats.mana -= 20;
      players[0].animation.state = 'attack';

      create(e.offsetX, e.offsetY);
      ASSETS.audio.projectile.play();
    }
  } else {
    messageCreate('Out of Mana. Cant cast that spell', 10, 18, 'blue');
  }
}

function projectilesAnimation(ctx, deltaTime) {
  projectiles.forEach(p => {
    p.draw(ctx, deltaTime);
    p.update();
  });

  removeWorldOutBounds(projectiles);
}

export {
  projectileFire,
  projectilesAnimation
};
