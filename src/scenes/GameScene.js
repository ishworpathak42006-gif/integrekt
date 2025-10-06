export class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.font('JesusHeals', 'assets/Fonts/Jesus_Heals_W00_Regular.ttf');
        // --- Background ---
        this.load.image('sky', 'assets/summer_8/Adjusted/1.png');
        this.load.image('clouds', 'assets/summer_8/Adjusted/2.png');
        this.load.image('clouds_2', 'assets/summer_8/Adjusted/3.png');
        this.load.image('ground', 'assets/summer_8/Adjusted/4.png');
        this.load.image('table_bcg', 'assets/summer_8/Adjusted/5.png');
        this.load.image('table_border', 'assets/summer_8/Adjusted/6.png');

        // --- Q&A images ---
        for (let i = 1; i <= 20; i++) {
            this.load.image(`qe${i}`, `assets/Questions_and_Answers/qe${i}.png`);
            this.load.image(`qe${i}a1`, `assets/Questions_and_Answers/qe${i}a1.png`);
            this.load.image(`qe${i}a2`, `assets/Questions_and_Answers/qe${i}a2.png`);
            this.load.image(`qe${i}a3`, `assets/Questions_and_Answers/qe${i}a3.png`);
            this.load.image(`qe${i}a4`, `assets/Questions_and_Answers/qe${i}a4.png`);
        }
        for (let i = 1; i <= 11; i++) {
            this.load.image(`qh${i}`, `assets/Questions_and_Answers/qh${i}.png`);
            this.load.image(`qh${i}a1`, `assets/Questions_and_Answers/qh${i}a1.png`);
            this.load.image(`qh${i}a2`, `assets/Questions_and_Answers/qh${i}a2.png`);
            this.load.image(`qh${i}a3`, `assets/Questions_and_Answers/qh${i}a3.png`);
            this.load.image(`qh${i}a4`, `assets/Questions_and_Answers/qh${i}a4.png`);
        }

        // --- Hourglass ---
        this.load.spritesheet('hourglass', 'assets/hourglass_2.png', {
            frameWidth: 42,
            frameHeight: 42
        });

        
        // --- Hero Spritesheets ---
        this.load.spritesheet('hero_one_hand_attack', 'assets/Character_Animations/1_hand_attack.png', {
            frameWidth: 256, //12 frames
            frameHeight: 256
        });
        this.load.spritesheet('hero_two_hand_attack', 'assets/Character_Animations/2_hand_attack.png', {
            frameWidth: 256, //13 frames
            frameHeight: 256
        });
        this.load.spritesheet('hero_death', 'assets/Character_Animations/Death.png', {
            frameWidth: 256, //14 frames
            frameHeight: 256
        });
        this.load.spritesheet('hero_heavy_impact', 'assets/Character_Animations/Heavy_Impact.png', {
            frameWidth: 256, //11 frames
            frameHeight: 256
        });
        this.load.spritesheet('hero_idle', 'assets/Character_Animations/Idle.png', {
            frameWidth: 256, //7 frames
            frameHeight: 256
        });
        this.load.spritesheet('hero_impact', 'assets/Character_Animations/Impact.png', {
            frameWidth: 256, //11 frames
            frameHeight: 256
        });

        // --- Enemy Spritesheets ---
        this.load.spritesheet('enemy_one_hand_attack', 'assets/Character_Animations/Mirrored/1_hand_attack.png', {
            frameWidth: 256, //12 frames
            frameHeight: 256
        });
        this.load.spritesheet('enemy_two_hand_attack', 'assets/Character_Animations/Mirrored/2_hand_attack.png', {
            frameWidth: 256, //13 frames
            frameHeight: 256
        });
        this.load.spritesheet('enemy_death', 'assets/Character_Animations/Mirrored/Death.png', {
            frameWidth: 256, //14 frames
            frameHeight: 256
        });
                this.load.spritesheet('enemy_heavy_impact', 'assets/Character_Animations/Mirrored/Heavy_Impact.png', {
            frameWidth: 256, //11 frames
            frameHeight: 256
        });
        this.load.spritesheet('enemy_idle', 'assets/Character_Animations/Mirrored/Idle.png', {
            frameWidth: 256, //7 frames
            frameHeight: 256
        });
        this.load.spritesheet('enemy_impact', 'assets/Character_Animations/Mirrored/Impact.png', {
            frameWidth: 256, //11 frames
            frameHeight: 256
        });

        //Heath_bars
        this.load.spritesheet('hero_health_bar', 'assets/dragonhpbar_orange.png', {
            frameWidth: 112, //8 frames
            frameHeight: 32
        });
        this.load.spritesheet('enemy_health_bar', 'assets/dragonhpbar_purple_v2.png', {
            frameWidth: 112, //8 frames
            frameHeight: 32
        });

        //Mp_bars
        this.load.spritesheet('hero_mp_bar', 'assets/mp_bar_orange.png', {
            frameWidth: 48, //5 frames
            frameHeight: 16
        });
        this.load.spritesheet('enemy_mp_bar', 'assets/mp_bar_purple_v2.png', {
            frameWidth: 48, //5 frames
            frameHeight: 16
        });

        //Hero_effects
        this.load.spritesheet('hero_normal_fireball', 'assets/orange_fireball_normal.png', {
            frameWidth: 32, //4 frames
            frameHeight: 32
        });
        this.load.spritesheet('hero_special_fireball', 'assets/orange_fireball_special.png', {
            frameWidth: 32, //4 frames
            frameHeight: 32
        });

        //Enemy_effects
        this.load.spritesheet('enemy_normal_fireball', 'assets/purple_fireball_normal.png', {
            frameWidth: 32, //4 frames
            frameHeight: 32
        });
        this.load.spritesheet('enemy_special_fireball', 'assets/purple_fireball_special.png', {
            frameWidth: 32, //4 frames
            frameHeight: 32
        });

        //Spark
        this.load.spritesheet('spark', 'assets/spark.png', {
            frameWidth: 32, //4 frames
            frameHeight: 32
        });

        //Hitbox
        this.load.image('hero_hitbox', 'assets/Hero_hitbox.png');
        this.load.image('enemy_hitbox', 'assets/Enemy_hitbox.png');

        //Sounds
        this.load.audio('clock', 'assets/Sounds/clock.mp3');
        this.load.audio('bcg_music', 'assets/Sounds/game_scene.mp3');
        this.load.audio('explosion', 'assets/Sounds/Explosion.wav');
        this.load.audio('normal_fb_sound', 'assets/Sounds/Arrow.wav');
        this.load.audio('normal_impact_sound', 'assets/Sounds/Normal_Impact_Sound.wav');
        this.load.audio('special_impact_sound', 'assets/Sounds/Special_Impact_Sound.wav');
        this.load.audio('charge_sound', 'assets/Sounds/Charge_Sound.wav');
        this.load.audio('death_sound', 'assets/Sounds/Death_Sound.wav');
        this.load.audio('right_sound', 'assets/Sounds/Select.wav');
        this.load.audio('wrong_sound', 'assets/Sounds/Wrong.wav');

    }

    create() {
        this.sceneTransitioning = false;
        this.enemyHasAttacked = false;
        // --- Initialize variables ---
        this.answerImages = [];      
        // Reset game state
        this.heroDead = false;
        this.enemyDead = false;
        this.inputLocked = false;
        this.heroHP = 0;
        this.enemyHP = 0;
        this.heroMPValue = 0;
        this.enemyMPValue = 0;

        // Reset UI frames
        if (this.heroHealth) this.heroHealth.setFrame(this.heroHP);
        if (this.enemyHealth) this.enemyHealth.setFrame(this.enemyHP);
        if (this.heroMP) this.heroMP.setFrame(this.heroMPValue);
        if (this.enemyMP) this.enemyMP.setFrame(this.enemyMPValue);


        // --- Stop any existing main menu music before creating a new one ---
        const existingMusic = this.sound.get('main_menu_audio');
        if (existingMusic) {
            existingMusic.stop();
            this.sound.remove(existingMusic);
        }
        //loading bcg music
        this.gs_themeMusic = this.sound.add('bcg_music', { loop: true, volume: 0 });
        this.gs_themeMusic.play();

        // Fade in
        this.tweens.add({
            targets: this.gs_themeMusic,
            volume: 0.2, // final volume
            duration: 1000, // 1 sec fade in
            ease: 'Linear'
        });
        this.cameras.main.fadeIn(150, 0, 0, 0); // 0.5 second fade from black
        //--- locking input after clicking---
        this.inputLocked = false;
        // --- Background setup ---
        this.bgSky      = this.add.tileSprite(640, 360, 1280, 720, 'sky');
        this.bgClouds   = this.add.tileSprite(640, 360, 1280, 720, 'clouds');
        this.bgClouds_2 = this.add.tileSprite(640, 360, 1280, 720, 'clouds_2');
        this.bgLand     = this.add.tileSprite(640, 360, 1280, 720, 'ground');
        this.table_bcg  = this.add.tileSprite(640, 360, 1280, 720, 'table_bcg');
        this.table_border = this.add.tileSprite(640, 360, 1280, 720, 'table_border');

        this.bgSky.setDepth(0);
        this.bgClouds.setDepth(1);
        this.bgClouds_2.setDepth(2);
        this.bgLand.setDepth(3);
        this.table_bcg.setDepth(4);
        this.table_border.setDepth(5);

        // --- Animations ---
        // Hourglass
        this.anims.create({
            key: 'hourglass_full',
            frames: this.anims.generateFrameNumbers('hourglass', { start: 0, end: 12 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'hourglass_flip',
            frames: this.anims.generateFrameNumbers('hourglass', { start: 11, end: 12 }),
            frameRate: 8,
            repeat: 0
        });

        // Hero
        this.anims.create({
            key: 'hero_idle',
            frames: this.anims.generateFrameNumbers('hero_idle', { start: 0, end: 6 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'hero_attack',
            frames: this.anims.generateFrameNumbers('hero_one_hand_attack', { start: 0, end: 11 }),
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'hero_attack_two',
            frames: this.anims.generateFrameNumbers('hero_two_hand_attack', { start: 0, end: 12 }), //13 frames
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'hero_impact_one',
            frames: this.anims.generateFrameNumbers('hero_impact', { start: 6, end: 10 }),
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'hero_impact_two',
            frames: this.anims.generateFrameNumbers('hero_heavy_impact', { start: 1, end: 10 }),
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'hero_death',
            frames: this.anims.generateFrameNumbers('hero_death', { start: 1, end: 13 }),
            frameRate: 8,
            repeat: 0
        });
        // --- Enemy Animations ---
        this.anims.create({
            key: 'enemy_idle',
            frames: this.anims.generateFrameNumbers('enemy_idle', { start: 0, end: 6 }), // 7 frames
            frameRate: 8,
            repeat: -1 // loop forever
        });

        this.anims.create({
            key: 'enemy_attack_one',
            frames: this.anims.generateFrameNumbers('enemy_one_hand_attack', { start: 0, end: 11 }),
            frameRate: 8,
            repeat: 0
        });

        this.anims.create({
            key: 'enemy_attack_two',
            frames: this.anims.generateFrameNumbers('enemy_two_hand_attack', { start: 0, end: 12 }),
            frameRate: 8,
            repeat: 0
        });

        this.anims.create({
            key: 'enemy_impact_one',
            frames: this.anims.generateFrameNumbers('enemy_impact', { start: 6, end: 10 }),
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'enemy_impact_two',
            frames: this.anims.generateFrameNumbers('enemy_heavy_impact', { start: 1, end: 10 }),
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'enemy_death',
            frames: this.anims.generateFrameNumbers('enemy_death', { start: 1, end: 13 }),
            frameRate: 8,
            repeat: 0
        });

         // --- Hero Health/MP ---
        this.heroHealth = this.add.sprite(200, 100, 'hero_health_bar', 0).setOrigin(0.5).setDepth(10).setScale(1.5); // full HP
        this.heroHP = 0;
        this.heroMP = this.add.sprite(200, 140, 'hero_mp_bar', 0).setOrigin(0.5).setDepth(10).setScale(2.5); // empty MP
        this.heroMPValue = 0;
        this.heroMPMax = 4; // 5 frames total (0-4)

        // --- Enemy Health/MP ---
        this.enemyHealth = this.add.sprite(1080, 100, 'enemy_health_bar', 0).setOrigin(0.5).setDepth(10).setScale(1.5);// full HP
        this.enemyHP = 0; 
        this.enemyMP = this.add.sprite(1080, 140, 'enemy_mp_bar', 0).setOrigin(0.5).setDepth(10).setScale(2.5); // empty MP
        this.enemyMPValue = 0;
        this.enemyMPMax = 4; // 5 frames total (0-4)

        // --- Hourglass sprite ---
        const newx=1150+75;
        const newy=500-150;
        this.hourglass = this.add.sprite(newx,newy, 'hourglass')
            .setOrigin(0.5)
            .setDepth(7)
            .setScale(2)
            .setTint(0x62733D)
            .setAlpha(0.6)
            .setFrame(0); // start at frame 0

        // --- Hero sprite ---
        this.hero = this.add.sprite(200, 250, 'hero_idle')
            .setOrigin(0.5)
            .setScale(1.5)
            .setDepth(8)
            .setTint(0xd8c2b8);

            
        
         // --- Default Animation ---
        this.hero.play('hero_idle');

        //--- Enemy sprite ---
        this.enemy = this.add.sprite(1280-200, 250, 'enemy_idle') // x,y position
            .setScale(1.5)  // make it bigger
            .setDepth(10)
            .setTint(0xb880c7);

        // --- Default Animation ---
        this.enemy.play('enemy_idle');


        // --- Enemy Attack Timer ---
        this.time.addEvent({
            delay: Phaser.Math.Between(15000, 18000), // 5–15 seconds
            loop: true,
            callback: () => {
                if (!this.enemyHasAttacked) {
                    this.enemyAttack();
                    this.enemyHasAttacked = true; // mark that it attacked automatically
                }
            },
            callbackScope: this
        });


                // --- Q&A system setup ---
        // full pools (unchanging)
        this.fullEasyPool = Array.from({ length: 20 }, (_, i) => i + 1);
        this.fullHardPool = Array.from({ length: 11 }, (_, i) => i + 1);

        // working available queues (we will consume from these)
        this.availableEasy = this.fullEasyPool.slice();
        this.availableHard = this.fullHardPool.slice();

        // randomize available queues once to start
        this.shuffleArray(this.availableEasy);
        this.shuffleArray(this.availableHard);

        // last shown question index (to avoid immediate repeats)
        this.lastQuestion = null;


        // Delay first question
        this.time.delayedCall(50, () => {
            this.showQuestion('easy');
        });

        // Fireball flicker animation
        this.anims.create({
            key: 'fireball_flicker',
            frames: this.anims.generateFrameNumbers('hero_normal_fireball', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1 // loop continuously
        });

        //Special fireball flicker animation
        this.anims.create({
            key: 'special_fireball_flicker',
            frames: this.anims.generateFrameNumbers('hero_special_fireball', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1 // loop continuously
        });

        //Enemy fireball flicker animation
        this.anims.create({
            key: 'enemy_fireball_flicker',
            frames: this.anims.generateFrameNumbers('enemy_normal_fireball', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1 // loop continuously
        });

        //Enemy Special fireball flicker animation
        this.anims.create({
            key: 'enemy_special_fireball_flicker',
            frames: this.anims.generateFrameNumbers('enemy_special_fireball', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1 // loop continuously
        });

        //Spark
        this.anims.create({
             key: 'spark_flash',
            frames: this.anims.generateFrameNumbers('spark', { start: 0, end: 3 }),
            frameRate: 20, // quick spark
            repeat: 0
        });


         // Groups
        this.heroFireballs = this.physics.add.group();
        this.enemyFireballs = this.physics.add.group();

        //Special Fireballs Groups
        this.specialheroFireballs = this.physics.add.group();
        this.specialenemyFireballs = this.physics.add.group();

        //Adding Hitboxes
        this.heroHitbox= this.physics.add.group(); //200, 250
        this.enemyHitbox= this.physics.add.group(); //1280-200, 250

       

                

        // --- Collisions ---
        // Fireball vs Fireball
        this.physics.add.overlap(this.heroFireballs, this.enemyFireballs, (heroFb, enemyFb) => {
                // Calculate midpoint
            const x = (heroFb.x + enemyFb.x) / 2;
             const y = (heroFb.y + enemyFb.y) / 2;

            //Destroy both fireballs
                heroFb.destroy();
                enemyFb.destroy();
            // Add and play spark animation
                const spark = this.add.sprite(x, y, 'spark')
                    .setScale(1.125)
                    .setDepth(20)
                    .play('spark_flash');

                // 💥 Play explosion sound
                this.sound.play('explosion', {
                    volume: 0.5, // adjust as needed
                    rate: 1.2,
                    delay: 0.2  // delay in seconds (e.g., 0.2s = 200ms)
                });

                // Auto-destroy after animation
                spark.on('animationcomplete', () => {
                    spark.destroy();
                });   
            });     

    // Hero fireball hits enemy
        this.physics.add.overlap(this.heroFireballs, this.enemyHitbox, (fireball, hitbox) => {
            fireball.destroy();
            hitbox.destroy();
            //Update enemy HP
            this.enemyHP = Math.min(this.enemyHP + 1, 7); // normal attack: +1
            this.enemyHealth.setFrame(this.enemyHP);
            // Play animation based on HP
            if (this.enemyHP < 7) {
                this.enemy.play('enemy_impact_one');
                this.sound.play('normal_impact_sound', {
                    volume: 0.3,
                    rate: 1.1,
                    delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                });
                this.enemy.once('animationcomplete-enemy_impact_one', () => {
                    this.enemy.play('enemy_idle');
                });
            } else if (this.enemyHP === 7) {
                // Check for game over
                this.checkGameStatus();
            }
                // **Add floating text here**
                const damageText = this.add.text(
                    this.enemy.x, this.enemy.y - 80, // slightly above enemy
                    'HIT!', 
                    {

                        fontFamily: 'JesusHeals',
                        fontSize: '24px',
                        color: '#FFD700',
                        stroke: '#B8860B',
                        strokeThickness: 6,
                        shadow: {
                            offsetX: 2,
                            offsetY: 2,
                            color: '#000000',
                            blur: 0,
                            fill: true
                        }
                    }
                ).setOrigin(0.5).setDepth(30);

                // **Optional: make text float and fade**
                this.tweens.add({
                    targets: damageText,
                    y: damageText.y - 30,
                    alpha: 0,
                    duration: 2000,
                    ease: 'Cubic.easeOut',
                    onComplete: () => {
                        damageText.destroy();
                    }
                });
            
              });

        // Enemy fireball hits hero
        this.physics.add.overlap(this.enemyFireballs, this.heroHitbox, (fireball, hitbox) => {
            fireball.destroy();
            hitbox.destroy();            
            //Update hero HP
            this.heroHP = Math.min(this.heroHP + 1, 7); // normal attack: +1
            this.heroHealth.setFrame(this.heroHP);
            // add your HP/animation logic here
           // Hero hit
            if (this.heroHP < 7) {
                this.hero.play('hero_impact_one');
                this.sound.play('normal_impact_sound', {
                    volume: 0.3,
                    rate: 1.1,
                    delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                });
                this.hero.once('animationcomplete-hero_impact_one', () => {
                    this.hero.play('hero_idle');
                });
            } else if (this.heroHP === 7) {
                // Check for game over
                this.checkGameStatus();
            }
            // **Add floating text here**
                const damageText = this.add.text(
                    this.hero.x, this.hero.y - 80, // slightly above enemy
                    'OUCH!', 
                    {

                        fontFamily: 'JesusHeals',
                        fontSize: '24px',
                        color: '#DA70D6',
                        stroke: '#800080',
                        strokeThickness: 6,
                        shadow: {
                            offsetX: 2,
                            offsetY: 2,
                            color: '#000000',
                            blur: 0,
                            fill: true
                        }
                    }
                ).setOrigin(0.5).setDepth(30);

                // **Optional: make text float and fade**
                this.tweens.add({
                    targets: damageText,
                    y: damageText.y - 30,
                    alpha: 0,
                    duration: 2000,
                    ease: 'Cubic.easeOut',
                    onComplete: () => {
                        damageText.destroy();
                    }
                });
        });

         // --- Collisions ---
        // Speicial Fireball vs Special Fireball
        this.physics.add.overlap(this.specialheroFireballs, this.specialenemyFireballs, (heroFb, enemyFb) => {
                // Calculate midpoint
            const x = (heroFb.x + enemyFb.x) / 2;
             const y = (heroFb.y + enemyFb.y) / 2;

            //Destroy both fireballs
                heroFb.destroy();
                enemyFb.destroy();
            // Add and play spark animation
                const spark = this.add.sprite(x, y, 'spark')
                    .setScale(2)
                    .setDepth(20)
                    .play('spark_flash');

                // 💥 Play explosion sound
                this.sound.play('explosion', {
                    volume: 0.5, // adjust as needed
                    rate: 1.2,
                    delay: 0.2  // delay in seconds (e.g., 0.2s = 200ms)
                });

                // Auto-destroy after animation
                spark.on('animationcomplete', () => {
                    spark.destroy();
                });   
            });     

    // Hero special fireball hits enemy
        this.physics.add.overlap(this.specialheroFireballs, this.enemyHitbox, (fireball, hitbox) => {
            fireball.destroy();
            hitbox.destroy();
            //Update enemy HP
            this.enemyHP = Math.min(this.enemyHP + 2, 7); // normal attack: +1
            this.enemyHealth.setFrame(this.enemyHP);
            // Play animation based on HP
            if (this.enemyHP < 7) {
                                        this.enemy.play('enemy_impact_two');
                                        this.sound.play('special_impact_sound', {
                                            volume: 0.5,
                                            rate: 1.1,
                                            delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                                        });

                                    } else if (this.enemyHP === 7) {
                                        // Check for game over
                                        this.checkGameStatus();
                                    }
                                        // **Add floating text here**
                                        const damageText = this.add.text(
                                            this.enemy.x, this.enemy.y - 80, // slightly above enemy
                                            'CRIT!', 
                                            {

                                                fontFamily: 'JesusHeals',
                                                fontSize: '24px',
                                                color: '#FF4E50',
                                                stroke: '#4A0000',
                                                strokeThickness: 6,
                                                shadow: {
                                                    offsetX: 2,
                                                    offsetY: 2,
                                                    color: '#000000',
                                                    blur: 0,
                                                    fill: true
                                                }
                                            }
                                        ).setOrigin(0.5).setDepth(30);

                                        // **Optional: make text float and fade**
                                        this.tweens.add({
                                            targets: damageText,
                                            y: damageText.y - 30,
                                            alpha: 0,
                                            duration: 2000,
                                            ease: 'Cubic.easeOut',
                                            onComplete: () => {
                                                damageText.destroy();
                                            }
                                        });  
            
              });

        // Enemy special fireball hits hero
        this.physics.add.overlap(this.specialenemyFireballs, this.heroHitbox, (fireball, hitbox) => {
            fireball.destroy();
            hitbox.destroy();            
            //Update hero HP
            this.heroHP = Math.min(this.heroHP + 2, 7); // special attack: +2
            this.heroHealth.setFrame(this.heroHP);
            // add your HP/animation logic here
           // Hero hit
            if (this.heroHP < 7) {
                                this.hero.play('hero_impact_one');
                                this.sound.play('special_impact_sound', {
                                    volume: 0.5,
                                    rate: 1.1,
                                    delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                                });
                            } else if (this.heroHP === 7) {
                                // Check for game over
                                this.checkGameStatus();
                            }
                                        // **Add floating text here**
                            const damageText = this.add.text(
                                this.hero.x, this.hero.y - 80, // slightly above enemy
                                'AHH!', 
                                {

                                    fontFamily: 'JesusHeals',
                                    fontSize: '24px',
                                    color: '#00FFFF',
                                    stroke: '#004C4C',
                                    strokeThickness: 6,
                                    shadow: {
                                        offsetX: 2,
                                        offsetY: 2,
                                        color: '#000000',
                                        blur: 0,
                                        fill: true
                                    }
                                }
                            ).setOrigin(0.5).setDepth(30);

                            // **Optional: make text float and fade**
                            this.tweens.add({
                                targets: damageText,
                                y: damageText.y - 30,
                                alpha: 0,
                                duration: 2000,
                                ease: 'Cubic.easeOut',
                                onComplete: () => {
                                    damageText.destroy();
                                }
                            });
        });

        //Sounds
        this.clock = this.sound.add('clock');
        this.warningTimer = null;

    }

    checkGameStatus() {


        // --- HERO DEATH ---
        if (this.heroHP >= 7) {
            // Stop all timers or repeating events
            if (this.enemyAttackTimer) this.enemyAttackTimer.remove(false);
            if (this.warningTimer) this.warningTimer.remove(false);

            // Prevent further interactions
            this.inputLocked = true;

            // --- Prevent multiple scene transitions ---
            if (this.sceneTransitioning) return;
            this.sceneTransitioning = true;
            this.heroDead = true;
            this.enemyHasAttacked = true; // stop enemy logic too

            // Stop all sounds, play death sound
            this.sound.stopAll();
            this.sound.play('death_sound', { volume: 0.5, rate: 1 });

            // Play animation and transition after it completes
            this.hero.play('hero_death');
            this.hero.once('animationcomplete-hero_death', () => {
                this.fadeOutToScene('GameOverScene');
            });
            return; // stop further checks
        }

        // --- ENEMY DEATH ---
        if (this.enemyHP >= 7) {
            // Stop all timers or repeating events
            if (this.enemyAttackTimer) this.enemyAttackTimer.remove(false);
            if (this.warningTimer) this.warningTimer.remove(false);

            // Prevent further interactions
            this.inputLocked = true;

            // --- Prevent multiple scene transitions ---
            if (this.sceneTransitioning) return;
            this.sceneTransitioning = true;
            this.enemyDead = true;

            this.sound.stopAll();
            this.sound.play('death_sound', { volume: 0.5, rate: 1 });

            this.enemy.play('enemy_death');
            this.enemy.once('animationcomplete-enemy_death', () => {
                this.fadeOutToScene('VictoryScene');
            });
            return;
        }
    }

    fadeOutToScene(targetScene) {
        // Fade out music if playing
        if (this.gs_themeMusic && this.gs_themeMusic.isPlaying) {
            this.tweens.add({
                targets: this.gs_themeMusic,
                volume: 0,
                duration: 150,
                ease: 'Linear',
                onComplete: () => this.gs_themeMusic.stop()
            });
        }

        // Fade out screen for smooth transition
        this.cameras.main.fadeOut(150, 0, 0, 0);

        // Wait a bit, then switch scene
        this.time.delayedCall(150, () => {
            this.scene.start(targetScene);
        });
    }




    spawnHeroFireball(x, y) {
        let fb = this.heroFireballs.create(x, y, 'hero_normal_fireball');
        fb.setDepth(9);
        fb.body.setVelocityX(200); // moves right
        fb.setCircle(fb.width/2); // circular collision
        fb.play('fireball_flicker'); // animation key
        
        // Stationary hitbox as rectangle
        let fbHitbox = this.enemyHitbox.create(1280-200, 250, 'enemy_hitbox');
        fbHitbox.body.setSize(fbHitbox.width, fbHitbox.height); // rectangle matches sprite size
        fbHitbox.body.setImmovable(true); // stay in place

        // --- Cleanup hitbox after 10 seconds ---
        this.time.delayedCall(10000, () => {
            if (fbHitbox && fbHitbox.active) fbHitbox.destroy();
        });

    }

    spawnEnemyFireball(x, y) {
        let fb = this.enemyFireballs.create(x, y, 'enemy_normal_fireball');
        fb.setDepth(9);
        fb.body.setVelocityX(-200); // moves left
        fb.setCircle(fb.width/2);
        fb.play('enemy_fireball_flicker'); // animation key

        // Stationary hitbox as rectangle
        let fbHitbox = this.heroHitbox.create(200, 250, 'enemy_hitbox');
        fbHitbox.body.setSize(fbHitbox.width, fbHitbox.height); // rectangle matches sprite size
        fbHitbox.body.setImmovable(true); // stay in place

        // --- Cleanup hitbox after 10 seconds ---
        this.time.delayedCall(10000, () => {
            if (fbHitbox && fbHitbox.active) fbHitbox.destroy();
        });
        }

    spawnSpecialHeroFireball(x, y) {
        let fb = this.specialheroFireballs.create(x, y, 'hero_special_fireball');
        fb.setScale(2);
        fb.setDepth(10);
        fb.body.setVelocityX(100); // moves right
        fb.setCircle(fb.width/2); // circular collision
        fb.play('special_fireball_flicker'); // animation key
        
        // Stationary hitbox as rectangle
        let fbHitbox = this.enemyHitbox.create(1280-200, 250, 'enemy_hitbox');
        fbHitbox.body.setSize(fbHitbox.width, fbHitbox.height); // rectangle matches sprite size
        fbHitbox.body.setImmovable(true); // stay in place

        // --- Cleanup hitbox after 10 seconds ---
        this.time.delayedCall(10000, () => {
            if (fbHitbox && fbHitbox.active) fbHitbox.destroy();
        });

    }

    spawnSpecialEnemyFireball(x, y) {
        let fb = this.specialenemyFireballs.create(x, y, 'enemy_special_fireball');
        fb.setScale(2);
        fb.setDepth(10);
        fb.body.setVelocityX(-100); // moves left
        fb.setCircle(fb.width/2);
        fb.play('enemy_special_fireball_flicker'); // animation key

        // Stationary hitbox as rectangle
        let fbHitbox = this.heroHitbox.create(200, 250, 'enemy_hitbox');
        fbHitbox.body.setSize(fbHitbox.width, fbHitbox.height); // rectangle matches sprite size
        fbHitbox.body.setImmovable(true); // stay in place

        // --- Cleanup hitbox after 10 seconds ---
        this.time.delayedCall(10000, () => {
            if (fbHitbox && fbHitbox.active) fbHitbox.destroy();
        });
        }


        // Fisher-Yates in-place shuffle — reliably random
    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }


    showQuestion() {
    this.checkGameStatus();
    // --- Reset enemy attack flag for this round ---
    this.enemyHasAttacked = false;

    // --- Cleanup previous question/answers/timers ---
    if (this.currentQuestion) this.currentQuestion.destroy();
    this.answerImages.forEach(img => img.destroy());
    this.answerImages = [];

    if (this.questionTimer) {
        this.questionTimer.remove(false);
        this.questionTimer = null;
    }

    if (this.warningTimer) {
        this.warningTimer.remove(false);
        this.warningTimer = null;
    }

    // --- Stop ongoing sounds ---
    if (this.clock && this.clock.isPlaying) {
        this.clock.stop();
    }

    // --- Stop any existing tweens ---
    if (this.hourglassWarningTween) {
        this.hourglassWarningTween.stop();
        this.hourglassWarningTween.remove();
        this.hourglassWarningTween = null;
    }

    if (this.hourglassTintTween) {
        this.hourglassTintTween.stop();
        this.hourglassTintTween.remove();
        this.hourglassTintTween = null;
    }

    // --- Reset hourglass to default state ---
    this.hourglass
        .setTint(0x62733D) // base green
        .setScale(2)
        .setRotation(0)
        .setFrame(0); // ✅ ensures it starts from first frame


    // --- Hourglass animation handling ---
    if (this.lastQuestion !== null && this.anims.get('hourglass_flip')) {
        this.hourglass.play('hourglass_flip');
        this.hourglass.once('animationcomplete', () => {
            this.hourglass.play('hourglass_full', true);
        });
    } else {
        this.hourglass.play('hourglass_full', true);
                
    }

        // --- Decide difficulty based on MP ---
    let poolArr, prefix, isHard = false;
    if (this.heroMPValue==this.heroMPMax) {
        poolArr = this.availableHard;  // working hard queue (consumable)
        prefix = 'qh';
        isHard = true;
    } else {
        poolArr = this.availableEasy;  // working easy queue (consumable)
        prefix = 'qe';
    }

    // Refill & shuffle if we consumed entire stack
    if (poolArr.length === 0) {
        if (isHard) {
            this.availableHard = this.fullHardPool.slice();
            this.shuffleArray(this.availableHard);
            poolArr = this.availableHard;
        } else {
            this.availableEasy = this.fullEasyPool.slice();
            this.shuffleArray(this.availableEasy);
            poolArr = this.availableEasy;
        }

        // Avoid starting the fresh shuffled queue with the same as lastQuestion if possible
        if (poolArr.length > 1 && poolArr[0] === this.lastQuestion) {
            // swap first and second
            const tmp = poolArr[0];
            poolArr[0] = poolArr[1];
            poolArr[1] = tmp;
        }
    }

    // Pop the next question from the front of the working queue
    let qIndex = poolArr.shift();

    // // Extra-care: if we accidentally still got lastQuestion and there's alternatives, pick one
    // if (qIndex === this.lastQuestion && poolArr.length > 0) {
    //     // find first different one
    //     const idx = poolArr.findIndex(x => x !== this.lastQuestion);
    //     if (idx !== -1) {
    //         const next = poolArr.splice(idx, 1)[0];
    //         // put previous back into the pool to avoid losing it (optional)
    //         poolArr.push(qIndex);
    //         qIndex = next;
    //     }
    // }

    // this.lastQuestion = qIndex;


    // --- Show question image ---
    const questionY = 459, tableX = 640;
    this.currentQuestion = this.add.image(
        tableX, questionY, `${prefix}${qIndex}`
    ).setOrigin(0.5).setDepth(6);

    // --- Answer options ---
    const answers = [
        { key: `${prefix}${qIndex}a1`, correct: true },
        { key: `${prefix}${qIndex}a2`, correct: false },
        { key: `${prefix}${qIndex}a3`, correct: false },
        { key: `${prefix}${qIndex}a4`, correct: false },
    ];
    const shuffled = this.shuffleArray(answers);

    const positions = [
        { x: 248, y: 566 },
        { x: 248, y: 669 },
        { x: 887, y: 566 },
        { x: 887, y: 669 },
    ];

    // --- Render answers & handle click ---
    shuffled.forEach((ans, i) => {
        const pos = positions[i];
        const img = this.add.image(pos.x, pos.y, ans.key)
            .setOrigin(0.5)
            .setDepth(6)
            .setInteractive({ useHandCursor: true });

        img.on('pointerdown', () => {
                
                    // --- STOP hourglass effects ---
                if (this.hourglassWarningTween) {
                    this.hourglassWarningTween.stop();
                    this.hourglassWarningTween = null; // optional: clean up reference
                }
                if (this.hourglassTintTween) {
                    this.hourglassTintTween.stop();
                    this.hourglassTintTween = null;
                }

                // --- STOP tick sound ---
                if (this.clock && this.clock.isPlaying) {
                    this.clock.stop();
                }
            
             // --- Prevent any interaction if game is ending or input is locked ---
            if (this.inputLocked || this.heroDead || this.enemyDead) return;
            this.inputLocked = true; // lock input immediately

            if (this.questionTimer) this.questionTimer.remove(false);

            // Highlight correct/incorrect
            this.answerImages.forEach((aImg, idx) => {
                if (shuffled[idx].correct) aImg.setTint(0x7AA150);
                else if (idx === i) aImg.setTint(0xA03D3D);
            });
            this.table_bcg
                .setTint(ans.correct ? 0x7AA150 : 0xA03D3D)
                .setAlpha(0.5);

            // --- On correct answer ---
            if (ans.correct) {
                //Play Right Sound
                this.sound.play('right_sound', {
                    volume: 1.0,
                    rate: 1.0,
                    delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                });
                // --- Normal attack if MP is not max ---
                if (this.heroMPValue < this.heroMPMax) {
                    this.hero.play('hero_attack');
                    this.sound.play('normal_fb_sound',{
                        volume: 0.2,
                        delay: 0.825
                    });

                    // Fireball effect after short delay

                    this.time.delayedCall(800, () => this.spawnHeroFireball(this.hero.x+90, this.hero.y-33), []);
                    this.hero.once('animationcomplete-hero_attack', () => {
                        if (!this.heroDead && !this.enemyDead) this.hero.play('hero_idle');
                    });

                    // Increase MP
                    this.heroMPValue++;
                    this.heroMP.setFrame(this.heroMPValue);

                }
             
            // --- Special attack if MP is full ---
            else {
                this.hero.play('hero_attack_two');

                // Special Fireball effect after short delay
                this.time.delayedCall(500, () => {
                    if (this.heroDead || this.enemyDead) return; // prevent any effect if game over

                    const sp_fireball = this.add.sprite(this.hero.x + 90, this.hero.y - 20, 'special_fireball')
                        .setScale(2)
                        .setDepth(10)
                        .play('special_fireball_flicker');

                    this.sound.play('charge_sound', {
                        volume: 0.5,
                        rate: 0.75,
                        delay: 0.1
                    });

                    // --- Charge-up: fireball stays in place for 800ms ---
                    this.time.delayedCall(800, () => {
                        if (this.heroDead || this.enemyDead) {
                            sp_fireball.destroy();
                            return;
                        }

                        sp_fireball.destroy(); // remove charge-up flicker

                        // Spawn the actual moving special fireball
                        this.spawnSpecialHeroFireball(this.hero.x + 90, this.hero.y - 33);

                        // When attack animation finishes, return to idle (if still alive)
                        this.hero.once('animationcomplete-hero_attack_two', () => {
                            if (!this.heroDead && !this.enemyDead) {
                                this.hero.play('hero_idle');
                            }
                        });

                        
                    });
                });
                // Reset hero MP after special move
                this.heroMPValue = 0;
                this.heroMP.setFrame(this.heroMPValue);
            }
            }

            // --- On incorrect answer ---
            else {
                    //Play Wrong Sound
                this.sound.play('wrong_sound', {
                    volume: 1.0,
                    rate: 1.0,
                    delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                });
                
                this.enemyHasAttacked = true; 
                this.enemyAttack();
                    this.checkGameStatus();
                }
            

           // Reset & show next question
            this.time.delayedCall(1000, () => {
                if (this.heroDead || this.enemyDead) return; // 💥 Prevent spawning new questions
                this.table_bcg.clearTint().setAlpha(1);
                this.inputLocked = false; // 🔓 unlock for next round
                this.showQuestion();
            });

        });






        this.answerImages.push(img);
    });

    // --- Timer expiry (auto wrong) ---
    this.questionTimer = this.time.delayedCall(20000, () => {
        // --- STOP tick sound ---
                if (this.clock && this.clock.isPlaying) {
                    this.clock.stop();
                }
        //Play Wrong Sound
                this.sound.play('wrong_sound', {
                    volume: 1.0,
                    rate: 1.0,
                    delay: 0   // delay in seconds (e.g., 0.2s = 200ms)
                });

        this.table_bcg.setTint(0xA03D3D).setAlpha(0.5);
        shuffled.forEach((ans, idx) => {
            if (ans.correct) this.answerImages[idx].setTint(0x7AA150);
            else this.answerImages[idx].setTint(0xA03D3D);
        });

        // Also reset MP if timer expired on a hard question
        if (isHard) {
            this.heroMPValue = 0;
            this.heroMP.setFrame(this.heroMPValue);
        }

        this.time.delayedCall(1000, () => {
            this.table_bcg.clearTint().setAlpha(1);
            this.showQuestion();
            this.enemyAttack();
        });
        
        
    });
        // --- Hourglass dynamic warning (after 15s) ---
    this.warningTimer = this.time.delayedCall(15000, () => {
        this.clock.play();
         // Stop the looping flow animation
        this.hourglass.anims.stop();
        // Freeze at 5th frame (index 4)
        this.hourglass.setFrame(4);


        // Shake + scale tween
        this.hourglassWarningTween = this.tweens.add({
            targets: this.hourglass,
            scale: { from: 2, to: 2.3 },
            angle: { from: -10, to: 10 },
            duration: 80,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Tint fade green → red
        this.hourglassTintTween = this.tweens.addCounter({
            from: 0x62733D,
            to: 0x7AA150,
            duration: 10000, // over last 10s
            onUpdate: (tween) => {
                const value = Math.floor(tween.getValue());
                this.hourglass.setTint(value);
            }
        });
    });

}


    update() {
        this.bgSky.tilePositionX      += 0.03;
        this.bgClouds.tilePositionX   += 0.07;
        this.bgClouds_2.tilePositionX += 0.12;
        this.bgLand.tilePositionX       = 0;
        this.table_bcg.tilePositionX    = 0;
        this.table_border.tilePositionX = 0;

        this.hourglass.x = Math.round(this.hourglass.x);
        this.hourglass.y = Math.round(this.hourglass.y);

        }

    enemyAttack() {
        const isSpecial = this.enemyMPValue >= this.enemyMPMax;

        if (!isSpecial) {
            // --- Normal attack ---
            this.enemy.play('enemy_attack_one');
            this.sound.play('normal_fb_sound',{
                        volume: 0.2,
                        delay: 0.825
                    });
            this.time.delayedCall(800, () => this.spawnEnemyFireball(this.enemy.x-90, this.enemy.y-33), []);
            this.enemy.once('animationcomplete-enemy_attack_one', () => {
                    this.enemy.play('enemy_idle');
                });

            // Increase enemy MP
            this.enemyMPValue++;
            this.enemyMP.setFrame(this.enemyMPValue);

        } else {
                this.enemy.play('enemy_attack_two');

                // Special Fireball effect after short delay
                this.time.delayedCall(500, () => {
                    if (this.heroDead || this.enemyDead) return; // prevent any effect if game over

                    const sp_fireball = this.add.sprite(this.enemy.x - 90, this.enemy.y - 20, 'enemy_special_fireball')
                        .setScale(2)
                        .setDepth(10)
                        .play('enemy_special_fireball_flicker');

                    this.sound.play('charge_sound', {
                        volume: 0.5,
                        rate: 0.75,
                        delay: 0.1
                    });

                    // --- Charge-up: fireball stays in place for 800ms ---
                    this.time.delayedCall(800, () => {
                        if (this.heroDead || this.enemyDead) {
                            sp_fireball.destroy();
                            return;
                        }

                        sp_fireball.destroy(); // remove charge-up flicker

                        // Spawn the actual moving special fireball
                        this.spawnSpecialEnemyFireball(this.enemy.x - 90, this.enemy.y - 33);

                        // When attack animation finishes, return to idle (if still alive)
                        this.enemy.once('animationcomplete-enemy_attack_two', () => {
                            if (!this.heroDead && !this.enemyDead) {
                                this.enemy.play('enemy_idle');
                            }
                        });

                    
                    });
                });
                // Reset enemy MP after special move
				this.enemyMPValue = 0;
				this.enemyMP.setFrame(this.enemyMPValue);
            }
            

    }


}
