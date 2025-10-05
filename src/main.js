import { Start } from './scenes/Start.js';
import { GameScene } from './scenes/GameScene.js';
import { GameOverScene } from './scenes/GameOverScene.js';   
import { VictoryScene } from './scenes/VictoryScene.js';     

const config = {
    type: Phaser.AUTO,
    title: 'Integrekt',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        Start,
        GameScene,
        GameOverScene,
        VictoryScene    // 👈 Add this
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
