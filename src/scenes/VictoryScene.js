export class VictoryScene extends Phaser.Scene {
    constructor() {
        super("VictoryScene");
    }

    preload() {
        // Load background assets (same as GameScene)
        this.load.image('sky', 'assets/Victory/Adjusted/1.png');
        this.load.image('clouds', 'assets/Victory/Adjusted/2.png');
        this.load.image('clouds_2', 'assets/Victory/Adjusted/3.png');
        this.load.image('clouds_3', 'assets/Victory/Adjusted/4.png');
        this.load.font('JesusHeals', 'assets/Fonts/Jesus_Heals_W00_Regular.ttf');
        this.load.font('PressStart2P', 'assets/Fonts/PressStart2P-Regular.ttf');
        this.load.audio('vs_select', 'assets/Sounds/Select.wav');
        this.load.audio('victory_sound', 'assets/Sounds/victory_scene.wav');

    }

    create() {
        this.victorySound = this.sound.add('victory_sound', {volume: 0 });
        this.victorySound.play();

        // Fade in the music smoothly
        this.tweens.add({
            targets: this.victorySound,
            volume: 0.6, // final volume
            duration: 1000, // 2 sec fade in
            ease: 'Linear'
        });
        // Fade in scene from black over 500 ms
        this.cameras.main.fadeIn(500, 0, 0, 0);
        // --- Background ---
        this.bgSky = this.add.tileSprite(640, 360, 1280, 720, 'sky').setDepth(0);
        this.bgClouds = this.add.tileSprite(640, 360, 1280, 720, 'clouds').setDepth(1);
        this.mgClouds = this.add.tileSprite(640, 360, 1280, 720, 'clouds_2').setDepth(2);
        this.fgClouds = this.add.tileSprite(640, 360, 1280, 720, 'clouds_3').setDepth(3);

        

        // --- Victory Text ---
        const victoryText = this.add.text(640, 300, "VICTORY!", {
            fontFamily: 'PressStart2P',
            fontSize: '108px',
            color: '#FFD93D',
            stroke: '#FFB700',
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
            targets: victoryText,
            y: 320,
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        const btnWidth = 200;
        const btnHeight = 70;
        const btnRadius = 16;

        // Create rounded rectangle background, centered at 0,0 in container
        const btnBg = this.add.graphics()
            .fillStyle(0x1E2A78, 1) // Dark blue fill
            .fillRoundedRect(-btnWidth/2, -btnHeight/2, btnWidth, btnHeight, btnRadius)
            .setDepth(5);

        // Create text (already centered at 0,0)
        const btnText = this.add.text(0, 0, "RESTART", {
            fontFamily: 'JesusHeals',
            fontSize: '48px',
            color: '#1E2A78',
            stroke: '#FFD93D',
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
            btnBg.fillStyle(0xFFD93D, 1); // gold background on hover
            btnBg.fillRoundedRect(-btnWidth/2, -btnHeight/2, btnWidth, btnHeight, btnRadius);
            btnText.setColor('#FFD93D'); // dark text
            btnText.setStroke('#1E2A78');
        });
        btn.on('pointerout', () => {
            btnBg.clear();
            btnBg.fillStyle(0x1E2A78, 1); // default dark blue
            btnBg.fillRoundedRect(-btnWidth/2, -btnHeight/2, btnWidth, btnHeight, btnRadius);
            btnText.setColor('#1E2A78');
            btnText.setStroke('#FFD93D'); // default white
        });




        // --- Click to restart ---
        btn.on('pointerdown', () => {
            this.sound.play('vs_select', {
                volume: 0.5,
                rate: 1.0,
                delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
            });


            // ✅ Prevent multiple clicks
            this.playButton.disableInteractive();
            //Stop any sounds
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
        this.mgClouds.tilePositionX += 0.12;
        this.fgClouds.tilePositionX +=0.15;


        }
}
