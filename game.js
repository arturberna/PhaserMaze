var player;
var coin;
var score;
function preload() {
    this.load.image('player', 'assets/hog_rider.png');
    this.load.image('coin', 'assets/coin.png');
    
}
function create() {
    // cria o sprite do jogador
    player = this.physics.add.sprite(100, 100, 'player');
    // cria o sprite da moeda
    coin = this.physics.add.sprite(10, 10, 'coin');
    score = 0;
    let style = { font: '50px Arial', fill: '#F102A1' };
    scoreText = this.add.text(20,20,'score: '+score,style);
    arrow = this.input.keyboard.createCursorKeys();
  }
  function hit() {
    
    coin.x = Phaser.Math.Between(100, 500);
    coin.y = Phaser.Math.Between(100, 500);
    score += 1;
    scoreText.setText('pontuação: ' + score);
  }
  function update() {
//    se houver colisão...
      if (this.physics.overlap(player, coin)) {
        // verifca se tocou na moeda
          hit();
      }
    // Movimentação horizontal
      if (arrow.right.isDown) {
          player.x += 3;
      } else if (arrow.left.isDown) {
          player.x -= 3;
      } 
      // Movimentação na vertical
      if (arrow.down.isDown) {
          player.y += 3;
      } else if (arrow.up.isDown) {
          player.y -= 3;
      } 
  }  
var game = new Phaser.Game({
    width: window.innerWidth*0.9, // largura da tela do jogo em  pixels
    height: window.innerHeight*0.9, // altura da tela do jogo em pixels
    backgroundColor: '#c4e3c3', // Cor do fundo (verde)
    scene: {
        preload: preload,
        create: create,
        update: update
      },
    physics: { default: 'arcade' }, // física usada pela engine
    parent: 'game', // Cria o jogo dentro de <div id="game"> 
  });