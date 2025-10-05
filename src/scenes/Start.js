export class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    preload() {
        // --- Load assets ---
        this.load.image('sky', 'assets/summer_2/Scaled/1.png');
        this.load.image('land', 'assets/summer_2/Scaled/2.png');
        this.load.image('grass', 'assets/summer_2/Scaled/3.png');
        this.load.image('clouds', 'assets/summer_2/Scaled/4.png');
        this.load.image('logo', 'assets/Title_v2.png');
        this.load.image('play', 'assets/Play_button_v2.png');
        this.load.audio('main_menu_audio', 'assets/Sounds/main_menu.wav');
        this.load.audio('start_select', 'assets/Sounds/Select.wav');
    }

    create() {
        // --- Main Menu Music ---
        this.themeMusic = this.sound.add('main_menu_audio', { loop: true, volume: 0 });
        this.themeMusic.play();

        // Fade in the music smoothly
        this.tweens.add({
            targets: this.themeMusic,
            volume: 0.5, // final volume
            duration: 1000, // 2 sec fade in
            ease: 'Linear'
        });

        // --- Create Background Layers ---
        this.bgSky = this.add.tileSprite(640, 360, 1280, 720, 'sky');
        this.bgClouds = this.add.tileSprite(640, 360, 1280, 720, 'clouds');
        this.bgLand = this.add.tileSprite(640, 360, 1280, 720, 'land');
        this.bgGrass = this.add.tileSprite(640, 360, 1280, 720, 'grass');
        
        // --- UI Elements ---
        this.logo = this.add.image(640, 200, 'logo');
        this.playButton = this.add.image(640, 590, 'play');
        // Disable interaction initially
        this.playButton.disableInteractive();

        // Enable after 1000ms delay (once scene has loaded)
        this.time.delayedCall(1000, () => {
            this.playButton.setInteractive({ useHandCursor: true });
        });

        // --- Play Button Click ---
        this.playButton.on('pointerdown', () => {
            
            this.sound.play('start_select', {
                volume: 1.0,
                rate: 1.0,
                delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
            });


            // ✅ Prevent multiple clicks
            this.playButton.disableInteractive();
            // Fade out music before switching scene
            this.tweens.add({
                targets: this.themeMusic,
                volume: 0,
                duration: 150,
                ease: 'Linear',
                onComplete: () => this.themeMusic.stop()
            });

            // Fade out screen for smooth transition
            this.cameras.main.fadeOut(150, 0, 0, 0);

            this.time.delayedCall(150, () => {
                this.scene.start('GameScene');
            });
        });

        // --- Depth Order ---
        this.bgSky.setDepth(0);
        this.bgClouds.setDepth(1);
        this.bgLand.setDepth(2);
        this.bgGrass.setDepth(3);
        this.logo.setDepth(4);
        this.playButton.setDepth(5);

        // --- Animations ---
        this.tweens.add({
            targets: this.logo,
            y: 310,
            duration: 1250,
            ease: 'Sine.inOut',
            yoyo: true,
            loop: -1
        });

        this.tweens.add({
            targets: this.playButton,
            scale: { from: 1, to: 1.05 },
            angle: { from: -0.5, to: 0.5 },
            duration: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.inOut'
        });
    }

    update() {
        // --- Parallax Scrolling ---
        this.bgClouds.tilePositionX += 0.1; // farthest
        this.bgSky.tilePositionX += 0.3;    // middle
        this.bgLand.tilePositionX += 0.7;   // faster
        this.bgGrass.tilePositionX += 1.0;  // closest
    }
}
