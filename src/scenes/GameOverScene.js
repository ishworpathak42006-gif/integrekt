export class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    preload() {
        // Load background assets (same as GameScene)
        this.load.image('sky', 'assets/Game_Over/Adjusted/1.png');
        this.load.image('clouds', 'assets/Game_Over/Adjusted/2.png');
        this.load.image('clouds_2', 'assets/Game_Over/Adjusted/3.png');
        this.load.font('JesusHeals', 'assets/Fonts/Jesus_Heals_W00_Regular.ttf');
        this.load.font('PressStart2P', 'assets/Fonts/PressStart2P-Regular.ttf');
        this.load.audio('vs_select', 'assets/Sounds/Select.wav');
        this.load.audio('defeat_sound', 'assets/Sounds/game_over_scene.wav');

    }

    create() {
        this.defeatSound = this.sound.add('defeat_sound', {volume: 0 });
        this.defeatSound.play();

        // Fade in the music smoothly
        this.tweens.add({
            targets: this.defeatSound,
            volume: 0.85, // final volume
            duration: 1000, // 2 sec fade in
            ease: 'Linear'
        });
        // Fade in scene from black over 500 ms
        this.cameras.main.fadeIn(500, 0, 0, 0);
        // --- Background ---
        this.bgSky = this.add.tileSprite(640, 360, 1280, 720, 'sky').setDepth(0);
        this.bgClouds = this.add.tileSprite(640, 360, 1280, 720, 'clouds').setDepth(1);
        this.fgClouds = this.add.tileSprite(640, 360, 1280, 720, 'clouds_2').setDepth(2);

        

        // --- Game Over Text ---
        const gameOverText = this.add.text(640, 300, " GAME OVER!", {
            fontFamily: 'PressStart2P',
            fontSize: '108px',
            color: '#FF4E50',
            stroke: '#A10000',
            strokeThickness: 6,
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 0,
                fill: true
            }
        }).setOrigin(0.5).setDepth(4);

        // Text animation: bounce + fade in
        this.tweens.add({
            targets: gameOverText,
            y: 320,
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        const btnWidth = 170;
        const btnHeight = 70;
        const btnRadius = 16;

        // Create rounded rectangle background, centered at 0,0 in container
        const btnBg = this.add.graphics()
            .fillStyle(0xFF4E50, 1) // Dark blue fill
            .fillRoundedRect(-btnWidth/2, -btnHeight/2, btnWidth, btnHeight, btnRadius)
            .setDepth(5);

        // Create text (already centered at 0,0)
        const btnText = this.add.text(0, 0, "RETRY", {
            fontFamily: 'JesusHeals',
            fontSize: '48px',
            color: '#FF4E50',
            stroke: '#3C0000',
            strokeThickness: 3
        }).setOrigin(0.5).setDepth(6);

        // Container to hold both
        const btn = this.add.container(640, 500, [btnBg, btnText])
            .setSize(btnWidth + 10, btnHeight + 10) // make it a bit bigger
            .setInteractive({ useHandCursor: true })
            .setDepth(5);


        // Hover effect
        btn.on('pointerover', () => {
            btnBg.clear();
            btnBg.fillStyle(0x3C0000, 1); // default dark blue
            btnBg.fillRoundedRect(-btnWidth/2, -btnHeight/2, btnWidth, btnHeight, btnRadius);
            btnText.setColor('#3C0000');
            btnText.setStroke('#FF4E50'); // default white
        });
        btn.on('pointerout', () => {
            btnBg.clear();
            btnBg.fillStyle(0xFF4E50, 1); // gold background on hover
            btnBg.fillRoundedRect(-btnWidth/2, -btnHeight/2, btnWidth, btnHeight, btnRadius);
            btnText.setColor('#FF4E50'); // dark text
            btnText.setStroke('#3C0000');
        });




                // --- Click to restart ---
        btn.on('pointerdown', () => {
            this.sound.play('vs_select', {
                volume: 0.5,
                rate: 1.0,
                delay: 0
            });

            // ✅ Prevent multiple clicks
            btn.disableInteractive();

            // Stop any sounds
            this.sound.stopAll();

            // Fade out screen for smooth transition
            this.cameras.main.fadeOut(150, 0, 0, 0);

            this.time.delayedCall(150, () => {
                this.scene.start('GameScene');
            });
        });
    }
    update() {
        this.bgSky.tilePositionX      += 0.03;
        this.bgClouds.tilePositionX   += 0.07;
        this.fgClouds.tilePositionX += 0.12;
        // this.fgClouds.tilePositionX +=0.15;


        }
}
