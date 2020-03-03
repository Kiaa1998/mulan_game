var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var cinese = false;
var checkpointX = 40;
var checkpointY = 800;
var already = false;
var again = false;
var gotyao = false;
var gotlin = false;
var gotpo = false;
var shot;
var text0 = false;
var text1 = false;
var text2 = false;
var text3 = false;
var text4 = false;
var text5 = false;
var text6 = false;
var textM = false;
var textshot = false;
var textwin = false;
var text0cinese = false;
var text1cinese = false;
var text2cinese = false;
var text3cinese = false;
var text4cinese = false;
var text5cinese = false;
var text6cinese = false;
var textMcinese = false;
var textshotcinese = false;
var textwincinese = false;
var blur = false;
var blurcinese = false;

function preload() {
}

var menuState = {
  preload: function() {
    game.load.image('start', 'assets/startscreen.png');
    game.load.image('inizia', 'assets/Inizia.png');
    game.load.image('spada', 'assets/spada.png');
    game.load.image('spadas', 'assets/spadas.png');
    game.load.image('creds', 'assets/Credits.png');
    game.load.image('autori', 'assets/autori.png');
    game.load.image('cina', 'assets/cina.png');
    game.load.audio('home', 'assets/audio/Home.mp3');
    game.load.audio('narr', 'assets/audio/Narr.mp3');
    game.load.audio('music1', 'assets/audio/Lv1.mp3');
    game.load.audio('music2', 'assets/audio/Lv2.mp3');
    game.load.audio('gong', 'assets/audio/gong.mp3');
    game.load.audio('gongmorte', 'assets/audio/gongmorte.mp3');

},
  create: function() {
    console.log(cinese);

    home = game.add.audio('home');
    home.loopFull();

    gong = game.add.audio('gong');
    gongmorte = game.add.audio('gongmorte');

    start = game.add.sprite(0,0, 'start');

    inizio2 = game.add.sprite(280,415, 'spada');
    inizio2.alpha = 0

    inizio = game.add.sprite(409,413, 'inizia');
    inizio.inputEnabled = true;
    inizio.events.onInputOver.add(this.show, this);
    inizio.events.onInputOut.add(this.hide, this);
    inizio.events.onInputDown.add(this.startClick, this);

    credits2 = game.add.sprite(349,536, 'spadas');
    credits2.alpha = 0;

    credits = game.add.sprite(447,531, 'creds');
    credits.inputEnabled = true;
    credits.events.onInputOver.add(this.show2, this);
    credits.events.onInputOut.add(this.hide2, this);
    credits.events.onInputDown.add(this.creditsClick, this);

    autori2 = game.add.sprite(349,595, 'spadas');
    autori2.alpha = 0;

    autori = game.add.sprite(446,590, 'autori');
    autori.inputEnabled = true;
    autori.events.onInputOver.add(this.show3, this);
    autori.events.onInputOut.add(this.hide3, this);
    autori.events.onInputDown.add(this.authorsClick, this);

    cinese = game.add.sprite(32,28, 'cina');
    cinese.inputEnabled = true;
    cinese.events.onInputDown.add(this.setcina, this);
},
  startClick: function(pointer) {
      this.game.state.start('story');
      home.destroy();
      gong.play();
  },
  creditsClick: function(pointer) {
    this.game.state.start('Credits');
  },
  authorsClick: function(pointer) {
    this.game.state.start('Authors');
  },
  show: function() {
    inizio2.alpha = 1;
  },
  hide: function() {
    inizio2.alpha = 0;
  },
  show2: function() {
      credits2.alpha = 1;
    },
  hide2: function() {
      credits2.alpha = 0;
  },
  show3: function() {
      autori2.alpha = 1;
    },
  hide3: function() {
      autori2.alpha = 0;
  },
  setcina: function() {
    cinese = true;
    home.destroy();
    this.game.state.start('menucina');
  },
}
game.state.add('menu', menuState);

var menucinaState = {
  preload: function() {
    game.load.image('startcina', 'assets/cinese/startscreencina.png');
    game.load.image('Iniziacina', 'assets/cinese/Iniziacina.png');
    game.load.image('spada', 'assets/spada.png');
    game.load.image('spadas', 'assets/spadas.png');
    game.load.image('credscina', 'assets/cinese/Creditscina.png');
    game.load.image('autoricina', 'assets/cinese/autoricina.png');
    game.load.image('italia', 'assets/italia.png');
    game.load.audio('home', 'assets/audio/Home.mp3');
    game.load.audio('narr', 'assets/audio/Narr.mp3');
    game.load.audio('music1', 'assets/audio/Lv1.mp3');
    game.load.audio('music2', 'assets/audio/Lv2.mp3');
    game.load.audio('gong', 'assets/audio/gong.mp3');
    game.load.audio('gongmorte', 'assets/audio/gongmorte.mp3');

},
  create: function() {
    console.log(cinese);

    home = game.add.audio('home');
    home.loopFull();

    gong = game.add.audio('gong');
    gongmorte = game.add.audio('gongmorte');

    startcina = game.add.sprite(0,0, 'startcina');

    iniziocina2 = game.add.sprite(280,415, 'spada');
    iniziocina2.alpha = 0

    iniziocina = game.add.sprite(411,390, 'Iniziacina');
    iniziocina.inputEnabled = true;
    iniziocina.events.onInputOver.add(this.show, this);
    iniziocina.events.onInputOut.add(this.hide, this);
    iniziocina.events.onInputDown.add(this.startcinaClick, this);

    creditscina2 = game.add.sprite(349,533, 'spadas');
    creditscina2.alpha = 0;

    credscina = game.add.sprite(466,526, 'credscina');
    credscina.inputEnabled = true;
    credscina.events.onInputOver.add(this.show2, this);
    credscina.events.onInputOut.add(this.hide2, this);
    credscina.events.onInputDown.add(this.creditscinaClick, this);

    autoricina2 = game.add.sprite(349,594, 'spadas');
    autoricina2.alpha = 0;

    autoricina = game.add.sprite(440,588, 'autoricina');
    autoricina.inputEnabled = true;
    autoricina.events.onInputOver.add(this.show3, this);
    autoricina.events.onInputOut.add(this.hide3, this);
    autoricina.events.onInputDown.add(this.authorscinaClick, this);

    italia = game.add.sprite(32,28, 'italia');
    italia.inputEnabled = true;
    italia.events.onInputDown.add(this.setita, this);

},
  startcinaClick: function(pointer) {
      this.game.state.start('storyCinese');
      home.destroy();
      gong.play();
  },
  creditscinaClick: function(pointer) {
    this.game.state.start('CreditsCinese');
  },
  authorscinaClick: function(pointer) {
    this.game.state.start('AuthorsCinese');
  },
  show: function() {
    iniziocina2.alpha = 1;
  },
  hide: function() {
    iniziocina2.alpha = 0;
  },
  show2: function() {
      creditscina2.alpha = 1;
    },
  hide2: function() {
      creditscina2.alpha = 0;
  },
  show3: function() {
      autoricina2.alpha = 1;
    },
  hide3: function() {
      autoricina2.alpha = 0;
  },
  setita:function() {
    cinese = false;
    home.destroy();
    this.game.state.start('menu');
  },
}
game.state.add('menucina', menucinaState);

var creditsState = {
  preload: function() {
    game.load.spritesheet('back', 'assets/back.png');
    game.load.spritesheet('gamecreds', 'assets/gamecreds.png');
  },
  create: function() {
    gamecreds = game.add.image(0, 0, 'gamecreds');

    back = game.add.image(85, 50, 'back');
    back.inputEnabled = true;
    back.events.onInputDown.add(this.back, this);
  },
  back: function() {
    home.destroy();
    game.state.start('menu');
    },
  }
game.state.add('Credits', creditsState);

var authorsState = {
  preload: function() {
    game.load.spritesheet('back', 'assets/back.png');
    game.load.spritesheet('authors', 'assets/authors.png');
  },
  create: function() {
    authors = game.add.image(0, 0, 'authors');

    back = game.add.image(85, 50, 'back');
    back.inputEnabled = true;
    back.events.onInputDown.add(this.back, this);
  },
  back: function() {
    home.destroy();
    game.state.start('menu');
    },
  }
game.state.add('Authors', authorsState);

var creditscineseState = {
  preload: function() {
    game.load.spritesheet('back', 'assets/back.png');
    game.load.spritesheet('gamecredscina', 'assets/cinese/gamecredscina.png');
  },
  create: function() {
    gamecredscina = game.add.image(0, 0, 'gamecredscina');

    back = game.add.image(85, 50, 'back');
    back.inputEnabled = true;
    back.events.onInputDown.add(this.back, this);
  },
  back: function() {
    home.destroy();
    game.state.start('menucina');
    },
  }
game.state.add('CreditsCinese', creditscineseState);

var authorscineseState = {
  preload: function() {
    game.load.spritesheet('back', 'assets/back.png');
    game.load.spritesheet('authorscina', 'assets/cinese/authorscina.png');
  },
  create: function() {
    authorscina = game.add.image(0, 0, 'authorscina');

    back = game.add.image(85, 50, 'back');
    back.inputEnabled = true;
    back.events.onInputDown.add(this.back, this);
  },
  back: function() {
    home.destroy();
    game.state.start('menucina');
    },
  }
game.state.add('AuthorsCinese', authorscineseState);

var storyState = {
  preload: function() {
    game.load.spritesheet("0", "scenes/Black.png");
    game.load.spritesheet("1", "scenes/Neve.png");
    game.load.spritesheet("2", "scenes/Tetto.png");
    game.load.spritesheet("3", "scenes/Consigliere Licenziato.png");
    game.load.spritesheet("4", "scenes/Giardino.png");
    game.load.spritesheet("5", "scenes/ImpRapito.png");
    game.load.spritesheet("6", "scenes/Campo.png");
    game.load.spritesheet("text0", "scenes/Once.png");
    game.load.spritesheet("text1", "scenes/Nevetxt.png");
    game.load.spritesheet("text2", "scenes/Tettotxt.png");
    game.load.spritesheet("text3", "scenes/Consigliere Licenziatotxt.png");
    game.load.spritesheet("text4", "scenes/Giardinotxt.png");
    game.load.spritesheet("10", "scenes/10.png", 1024, 768);
    game.load.spritesheet("text5", "scenes/ImpRapitotxt.png");
    game.load.spritesheet("text6", "scenes/Campotxt.png");
  },

  create: function() {

    narr = game.add.audio('narr');
    narr.loopFull();

    zero = game.add.sprite(0,0, '0');
    zero.inputEnabled = true;
    zero.events.onInputDown.add(this.next, this);

    text0 = game.add.sprite(0,0, 'text0');
    text0 = true;
  },

  next: function() {
    if(text0 == true) {
      one = game.add.sprite(0,0, '1');
      one.inputEnabled = true;
      one.events.onInputDown.add(this.next0, this);
    }
  },

  next0: function() {
    if(text1 == true) {
      two = game.add.sprite(0,0, '2');
      two.inputEnabled = true;
      two.events.onInputDown.add(this.next1, this);
    }
    else {
      text1 = game.add.sprite(0,0, 'text1');
      text1 = true;}
  },
  next1: function() {
    if(text2 == true) {
      three = game.add.sprite(0,0, '3');
      three.inputEnabled = true;
      three.events.onInputDown.add(this.next2, this);
    }
    else {
      text2 = game.add.sprite(0,0, 'text2');
      text2 = true;}
  },
  next2: function() {
    if(text3 == true) {
      four = game.add.sprite(0,0, '4');
      four.inputEnabled = true;
      four.events.onInputDown.add(this.next3, this);
    }
  else {
    text3 = game.add.sprite(0,0, 'text3');
    text3 = true;
    }
  },
  next3: function() {
    if(text4 == true) {
      ten = game.add.sprite(0,0, '10');
      ten.inputEnabled = true;
      ten.animations.add('blur10', [0, 0, 1, 2, 3, 4, 5], 6, false);
      ten.animations.play('blur10');
      ten.events.onInputDown.add(this.next4, this);
    }
    else {
      text4 = game.add.sprite(0,0, 'text4');
      text4 = true;}
  },
  next4: function() {
    {
        five = game.add.sprite(0,0, '5');
        five.inputEnabled = true;
        five.events.onInputDown.add(this.next5, this);
    }
  },
  next5: function() {
    if(text5 == true) {
      six = game.add.sprite(0,0, '6');
      six.inputEnabled = true;
      six.events.onInputDown.add(this.next6, this);
    }
    else {
      text5 = game.add.sprite(0,0, 'text5');
      text5 = true;
     }
    },
  next6: function() {
    if(text6 == true) {
      game.state.start('LV01');
      narr.destroy();
    }
    else {
      text6 = game.add.sprite(0,0, 'text6');
      text6 = true;
    }
  },
}
game.state.add('story', storyState);

var storyCineseState = {
  preload: function() {
    game.load.spritesheet("0", "scenes/Black.png");
    game.load.spritesheet("1", "scenes/Neve.png");
    game.load.spritesheet("2", "scenes/Tetto.png");
    game.load.spritesheet("3", "scenes/Consigliere Licenziato.png");
    game.load.spritesheet("4", "scenes/Giardino.png");
    game.load.spritesheet("5", "scenes/ImpRapito.png");
    game.load.spritesheet("6", "scenes/Campo.png");
    game.load.spritesheet("text0cinese", "scenes/cinese/Once.png");
    game.load.spritesheet("text1cinese", "scenes/cinese/Nevetxt.png");
    game.load.spritesheet("text2cinese", "scenes/cinese/Tettotxt.png");
    game.load.spritesheet("text3cinese", "scenes/cinese/Consigliere Licenziatotxt.png");
    game.load.spritesheet("text4cinese", "scenes/cinese/Giardinotxt.png");
    game.load.spritesheet("10cinese", "scenes/cinese/10.png", 1024, 768);
    game.load.spritesheet("text5cinese", "scenes/cinese/ImpRapitotxt.png");
    game.load.spritesheet("text6cinese", "scenes/cinese/Campotxt.png");
  },
  create: function() {

    narr = game.add.audio('narr');
    narr.loopFull();

    zero = game.add.sprite(0,0, '0');
    zero.inputEnabled = true;
    zero.events.onInputDown.add(this.nextcinese, this);

    text0cinese = game.add.sprite(0,0, 'text0cinese');
    text0cinese = true;
  },
  nextcinese: function() {
    if(text0cinese == true) {
      one = game.add.sprite(0,0, '1');
      one.inputEnabled = true;
      one.events.onInputDown.add(this.next0cinese, this);
    }
  },
  next0cinese: function() {
    if(text1cinese == true) {
      two = game.add.sprite(0,0, '2');
      two.inputEnabled = true;
      two.events.onInputDown.add(this.next1cinese, this);
    }
    else {
      text1cinese = game.add.sprite(0,0, 'text1cinese');
      text1cinese = true;}
  },
  next1cinese: function() {
    if(text2cinese == true) {
      three = game.add.sprite(0,0, '3');
      three.inputEnabled = true;
      three.events.onInputDown.add(this.next2cinese, this);
    }
    else {
      text2cinese = game.add.sprite(0,0, 'text2cinese');
      text2cinese = true;}
  },
  next2cinese: function() {
    if(text3cinese == true) {
      four = game.add.sprite(0,0, '4');
      four.inputEnabled = true;
      four.events.onInputDown.add(this.next3cinese, this);
    }
  else {
    text3cinese = game.add.sprite(0,0, 'text3cinese');
    text3cinese = true;
    }
  },
  next3cinese: function() {
    if(text4cinese == true) {
      tencinese = game.add.sprite(0,0, '10cinese');
      tencinese.inputEnabled = true;
      tencinese.animations.add('blur10cinese', [0, 0, 1, 2, 3, 4, 5], 6, false);
      tencinese.animations.play('blur10cinese');
      tencinese.events.onInputDown.add(this.next4cinese, this);
    }
    else {
      text4cinese = game.add.sprite(0,0, 'text4cinese');
      text4cinese = true;}
  },
  next4cinese: function() {
    {
        five = game.add.sprite(0,0, '5');
        five.inputEnabled = true;
        five.events.onInputDown.add(this.next5cinese, this);
    }
  },
  next5cinese: function() {
    if(text5cinese == true) {
      six = game.add.sprite(0,0, '6');
      six.inputEnabled = true;
      six.events.onInputDown.add(this.next6cinese, this);
    }
    else {
      text5cinese = game.add.sprite(0,0, 'text5cinese');
      text5cinese = true;
     }
    },
  next6cinese: function() {
    if(text6cinese == true) {
      game.state.start('LV01');
      narr.destroy();
    }
    else {
      text6cinese = game.add.sprite(0,0, 'text6cinese');
      text6cinese = true;
    }
  },
}
game.state.add('storyCinese', storyCineseState);

var lv01State = {

  preload: function() {
    game.load.spritesheet('player', 'assets/sprites/Mulan.png', 92, 153);
    game.load.spritesheet('yao', 'assets/sprites/yao.png', 92,153 );
    game.load.spritesheet('ling', 'assets/sprites/ling.png', 92,153);
    game.load.spritesheet('po', 'assets/sprites/po.png', 92,153 );
    game.load.spritesheet('platform', 'assets/sprites/platform.png');
    game.load.spritesheet('arrowtotem', 'assets/sprites/Spara Frecce.png');
    game.load.spritesheet('endtotem', 'assets/sprites/Fine Frecce.png');
    game.load.spritesheet('arrow', 'assets/sprites/Freccia.png');
    game.load.image('topbar1', 'assets/topbar1.png');
    game.load.image('topbar1cinese', 'assets/topbar1cinese.png');
    game.load.image('yaoface', 'assets/sprites/MedYao.png');
    game.load.image('lingface', 'assets/sprites/MedLing.png');
    game.load.image('poface', 'assets/sprites/MedPo.png');
    game.load.spritesheet('paralax1','assets/sfondo1layer1.png')
    game.load.spritesheet('paralax2','assets/sfondo1layer2.png')
    game.load.spritesheet('paralax3','assets/sfondo1layer3.png')
    game.load.tilemap('map', 'map/mappa.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'map/tilelargan.png',32,32);
    game.load.spritesheet('tutorial1', 'assets/tutorial1.png',);

},
  create: function() {
    game.world.setBounds(0,0,12472,1000);

    music1 = game.add.audio('music1');
    music1.loopFull();

    paralax1 = game.add.sprite(-120,-40, 'paralax1');
    paralax2 = game.add.sprite(-70,-40, 'paralax2');
    paralax3 = game.add.sprite(-0,-0, 'paralax3');

    map = game.add.tilemap('map');
    map.addTilesetImage('tilelargan', 'tiles');

    layer = map.createLayer('livello1');
    map.setCollisionBetween(2, 100);

    arrows = game.add.physicsGroup();

    arrowtotem = game.add.sprite(640,800, 'arrowtotem');
    endtotem = game.add.sprite(3145,640, 'endtotem');

    if (cinese == true) {
      topbar1cinese = game.add.image(0,0,'topbar1cinese');
      topbar1cinese.fixedToCamera = true;
    }
    else {
      topbar1 = game.add.image(0,0,'topbar1');
      topbar1.fixedToCamera = true;
    }

    yaoface = game.add.image(40,28, 'yaoface');
    yaoface.alpha = 0;
    yaoface.fixedToCamera = true;

    lingface = game.add.image(120,29, 'lingface');
    lingface.alpha = 0;
    lingface.fixedToCamera = true;

    poface = game.add.image(204,27, 'poface');
    poface.alpha = 0;
    poface.fixedToCamera = true;

    if(already == false) {
      tutorial1 = game.add.sprite(200,850,'tutorial1')
      game.physics.arcade.enable(tutorial1);
    }

    player = game.add.sprite(checkpointX, checkpointY, 'player');
    game.physics.arcade.enable(player);
    player.body.gravity.y = 500;
    game.camera.follow(player);
    player.animations.add('left', [3, 2, 1, 2], 9, true);
    player.animations.add('right', [5, 6, 7], 9, true);

  if (gotyao == false) {
      yao = game.add.sprite(3400, 500, 'yao');
      this.game.physics.arcade.enable(yao);
      yao.body.gravity.y = 500;
      yao.frame = 4;
      yao.animations.add('jumpy', [0,4,0], 9, false);
      yao.animations.add('leavey', [3,2,1,2], 9, true);
    }

    if (gotlin == false) {
      ling = game.add.sprite(8125, 340, 'ling');
      game.physics.arcade.enable(ling);
      ling.body.gravity.y = 500;
      ling.frame = 4;
      ling.animations.add('jumpl', [0,4,0], 9, false);
      ling.animations.add('leavel', [3,2,1,2], 9, true);
    }

    po = game.add.sprite(12145, 0, 'po');
    game.physics.arcade.enable(po);
    po.body.gravity.y = 500;
    po.frame = 4;
    po.animations.add('jumpp', [0,4,0], 9, true);

    platform = game.add.physicsGroup();

    p1=platform.create(4475, 800, 'platform');
    p1=platform.create(4775, 800, 'platform');
    p1=platform.create(5033, 701, 'platform');
    p1=platform.create(5263, 660, 'platform');
    p1=platform.create(5501, 610, 'platform');
    p1=platform.create(5875, 700, 'platform');
    p1=platform.create(6275, 800, 'platform');
    p1=platform.create(6575, 670, 'platform');
    p1=platform.create(6775, 610, 'platform');
    p1=platform.create(7115, 700, 'platform');
    p1=platform.create(7515, 700, 'platform');
    p1=platform.create(7715, 610, 'platform');
    platform.setAll('body.immovable', true);

    p2 = game.add.sprite(8010, 600, 'platform');
    p3 = game.add.sprite(8160, 600, 'platform');
    p4 = game.add.sprite(8300, 800, 'platform');
    game.physics.arcade.enable(p2);
    game.physics.arcade.enable(p3);
    game.physics.arcade.enable(p4);
    p2.body.immovable = true;
    p3.body.immovable = true;
    p4.body.immovable = true;

    cursors = game.input.keyboard.createCursorKeys();
    attack = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    shot = false;
},

  update: function() {

    this.game.physics.arcade.collide(player, layer);
    this.game.physics.arcade.collide(yao, layer);
    this.game.physics.arcade.collide(ling, layer);
    this.game.physics.arcade.collide(po, layer);
    var hitP2 = game.physics.arcade.collide(player, platform);
    this.game.physics.arcade.collide(player, p2);
    this.game.physics.arcade.collide(player, p3);
    this.game.physics.arcade.collide(player, p4);
    this.game.physics.arcade.collide(ling, p2);

    player.body.velocity.x = 0;

    this.game.physics.arcade.overlap(player, yao, this.collecty, null, this);
    this.game.physics.arcade.overlap(player, ling, this.collectl, null, this);
    this.game.physics.arcade.overlap(player, po, this.collectp, null, this);
    this.game.physics.arcade.overlap(player, arrows, this.youdie, null, this);
    this.game.physics.arcade.overlap(player, tutorial1, this.tutorial1ded, null, this);

    paralax2.x= game.camera.x*0.6;
    paralax2.y= game.camera.y*0.6;
    paralax1.x= game.camera.x*0.9;
    paralax1.y= game.camera.y*0.9;

    this.youwin();

    if (player.body.position.y>1000)
    {
      checkpointX = 100;
      checkpointY = 700;
      shot = false;

      if (gotlin == true) {
          checkpointX = 8200;
          checkpointY = 340;
        }

      else if (gotyao == true) {
              checkpointX = 3450;
              checkpointY = 500;
            }

      this.game.time.events.add(250,this.loadkill);
      this.game.time.events.add(250, function() {music1.destroy()});
      gongmorte.play()
   };

    if(cursors.left.isDown)
    {
        player.body.velocity.x = -250;
        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
        player.animations.play('right');
    }
    else
    {
        player.animations.stop();
        player.frame = 4;
    }
    if (cursors.up.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
    }

    if (hitP2 === true && player.body.touching.down){
        platform.forEach(function (p) {
          if(p.body.touching.up) {
            var touchedPlatform = p;
           touchedPlatform.body.immovable = false;
            touchedPlatform.body.velocity.y = 80;
        }
      })
    }

    if (shot == false && player.body.position.x > 750 && player.body.position.x < 2800)
    {
      this.shootarrow();
      shot = true;
      game.time.events.add(9000, this.reset_shot);
    }

    if (player.body.position.x > 2800){
        shot = false;
        game.time.events.add(1250, this.arrows_kill);
    }
    if (gotyao) {
      yaoface.alpha = 1;
    }
    if (gotlin) {
      lingface.alpha = 1;
    }
    if (gotpo) {
      poface.alpha = 1;
    }
},

  render: function() {},

  tutorial1ded: function() {
    tutorial1.kill();
    already = true;
  },
  reset_shot: function() {
    shot = false;
  },
  shootarrow: function() {
    arrows.create(3500,750, 'arrow');
    arrows.create(4000,560, 'arrow');
    arrows.create(4500,800, 'arrow');
    arrows.create(5300,670, 'arrow');
    arrows.create(6000,700, 'arrow');
    arrows.create(7250,850, 'arrow');

    arrows.setAll('body.gravity.y', 0);
    arrows.setAll('body.velocity.x', -600);
    arrows.setAll('body.collideWorldBounds', false);
  },
  arrows_kill: function() {
    arrows.kill()
  },

  collecty: function(player, yao) {
      yao.animations.play('jumpy');
      gotyao = true;
      this.game.time.events.add(2000, this.yao_esce)
    },
  collectl: function(player, ling) {
      ling.animations.play('jumpl');
      gotlin = true;
      game.time.events.add(2000, this.ling_esce);
  },
  collectp: function(player, po) {
      po.animations.play('jumpp');
      gotpo = true;
  },

  yao_esce: function() {
    yao.animations.play('leavey');
    yao.body.velocity.x = -250;
    game.time.events.add(4000, function() {this.yao.kill()});
    },
  ling_esce: function() {
      ling.body.velocity.x = -250;
      this.game.time.events.add(4000, function() {this.ling.kill()});
      ling.animations.play('leavel')
    },

  youdie: function() {
    player.kill();
    this.game.time.events.add(250,this.loadkill);
    this.game.time.events.add(250, function() {music1.destroy()});
    gongmorte.play()
  },
  loadkill: function() {
    if (cinese == true) {
      game.state.start('Dead1cinese')
      }
    else {
      game.state.start('Dead1');
      }
    },
  youwin: function() {
    if(gotyao && gotlin && gotpo)
    {
      game.time.events.add(2000, this.startmiddle);
      game.time.events.add(2000, function(){
              music1.destroy()});
      }
  },
  startmiddle: function() {
    if (cinese == true) {
      game.state.start('MiddleCinese')
    }
    else {
      game.state.start('Middle')}
    },

}
game.state.add('LV01', lv01State);

var middleState = {
  preload: function() {
    game.load.spritesheet('cortile','scenes/Cortile.png')
    game.load.spritesheet('textM','scenes/Cortiletxt.png')
  },
  create: function() {
    console.log(cinese);

    narr = game.add.audio('narr');
    narr.loopFull();

    cortile = game.add.sprite(0,0,'cortile');
    cortile.inputEnabled = true;
    cortile.events.onInputDown.add(this.go, this);
  },

  go: function() {

    if(textM == true) {
      game.state.start('LV02')
      narr.destroy()
    }
    else {
      textM = game.add.sprite(0,0, 'textM');
      textM = true;
    }
  },
}
game.state.add('Middle', middleState)

var middlecineseState = {
  preload: function() {
    game.load.spritesheet('cortile','scenes/Cortile.png')
    game.load.spritesheet('textMcinese','scenes/cinese/Cortiletxt.png')
  },
  create: function() {
    console.log(cinese);

    narr = game.add.audio('narr');
    narr.loopFull();

    cortile = game.add.sprite(0,0,'cortile');
    cortile.inputEnabled = true;
    cortile.events.onInputDown.add(this.gocinese, this);
  },

  gocinese: function() {

    if(textMcinese == true) {
      game.state.start('LV02')
      narr.destroy()
    }
    else {
      textMcinese = game.add.sprite(0,0, 'textMcinese');
      textMcinese = true;
    }
  },
}
game.state.add('MiddleCinese', middlecineseState)

var lv02State = {

  preload: function() {
    game.load.spritesheet("back", "assets/sfondo2.png");
    game.load.spritesheet("tenda1", "assets/tenda1.png");
    game.load.spritesheet("tenda2", "assets/tenda2.png");
    game.load.spritesheet('player', 'assets/sprites/Mulan2.png', 92, 153);
    game.load.spritesheet('enemy', 'assets/sprites/Scagnozzo.png', 92, 153);
    game.load.image('bullet', 'assets/sprites/Firework.png');
    game.load.image('bulletB', 'assets/sprites/FireworkB.png');
    game.load.spritesheet('key1', 'assets/sprites/chiave1.png');
    game.load.spritesheet('key2', 'assets/sprites/chiave2.png');
    game.load.spritesheet('door', 'assets/sprites/door.png',244, 313);
    game.load.image('topbar2', 'assets/topbar2.png');
    game.load.image('topbar2cinese', 'assets/topbar2cinese.png');
    game.load.tilemap('map2', 'map/mappa2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles3', 'map/interno.png',32,32);
    game.load.spritesheet('tutorial2', 'assets/tutorial2.png');


  },
  create: function() {
    this.game.world.setBounds(0,0,2624,1631);

    back = game.add.sprite(0,128, 'back');

    music2 = game.add.audio('music2');
    music2.loopFull();

    door = game.add.sprite(115,1306, 'door');
    game.physics.arcade.enable(door);
    door.animations.add('closed', [0], 2, true);
    door.animations.add('open', [1], 2, true);

    player = game.add.sprite(260, 1300, 'player');
    game.physics.arcade.enable(player);
    player.body.gravity.y = 500;
    game.camera.follow(player);
    player.animations.add('left', [3, 2, 1], 8, true);
    player.animations.add('right', [5, 6, 7], 8, true);

    tenda1 = game.add.sprite(-2,119, 'tenda1');
    tenda2 = game.add.sprite(945,128, 'tenda2');

    map = game.add.tilemap('map2');
    map.addTilesetImage('Interno', 'tiles3');
    layer1 = map.createLayer('livello1');
    map.setCollisionBetween(1, 1000);

    if(again == false) {
      tutorial2 = game.add.sprite(370,1410,'tutorial2')
      game.physics.arcade.enable(tutorial2);
    }

    key1 = game.add.sprite(2260,262, 'key1');
    game.physics.arcade.enable(key1);
    key1.collected = false;

    key2 = game.add.sprite(1690,422, 'key2');
    game.physics.arcade.enable(key2);
    key2.collected = false;

    enemy1 = game.add.sprite(1080,308, 'enemy');
    game.physics.arcade.enable(enemy1);
    enemy1.body.gravity.y = 500;
    enemy1.animations.add('left1', [2, 3, 2, 1], 9, true);
    enemy1.animations.add('right1', [6, 5, 6, 7], 9, true);

    enemy2 = game.add.sprite(920, 650, 'enemy');
    game.physics.arcade.enable(enemy2);
    enemy2.body.gravity.y = 500;
    enemy2.animations.add('left2', [2, 3, 2, 1], 9, true);
    enemy2.animations.add('right2', [6, 5, 6, 7], 9, true);

    enemy3 = game.add.sprite(997,1076, 'enemy');
    game.physics.arcade.enable(enemy3);
    enemy3.body.gravity.y = 500;
    enemy3.animations.add('left3', [2, 3, 2, 1], 9, true);
    enemy3.animations.add('right3', [6, 5, 6, 7], 9, true);

    enemy4 = game.add.sprite(1000,1460, 'enemy');
    game.physics.arcade.enable(enemy4);
    enemy4.body.gravity.y = 500;
    enemy4.animations.add('left4', [2, 3, 2, 1], 9, true);
    enemy4.animations.add('right4', [6, 5, 6, 7], 9, true);

    enemy5 = game.add.sprite(2224,1076, 'enemy');
    game.physics.arcade.enable(enemy5);
    enemy5.body.gravity.y = 500;
    enemy5.animations.add('left5', [2, 3, 2, 1], 9, true);
    enemy5.animations.add('right5', [6, 5, 6, 7], 9, true);

    weapon = game.add.weapon(1, 'bullet');
    weapon2 = game.add.weapon(1, 'bulletB');
    weapon.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
    weapon2.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
    weapon.trackSprite(player, 50, 60, true);
    weapon2.trackSprite(player, 50, 60, true);

    if (cinese == true) {
      topbar2cinese = game.add.image(0,0,'topbar2cinese');
      topbar2cinese.fixedToCamera = true;
    }
    else {
      topbar2 = game.add.image(0,0,'topbar2');
      topbar2.fixedToCamera = true;
    }

    gotkey1 = game.add.image(192,59, 'key1');
    gotkey1.alpha = 0;
    gotkey1.fixedToCamera = true;

    gotkey2 = game.add.image(88,59, 'key2');
    gotkey2.alpha = 0;
    gotkey2.fixedToCamera = true;

    cursors = game.input.keyboard.createCursorKeys();
    attack = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  update: function() {

    this.game.physics.arcade.collide(player, layer1);
    this.game.physics.arcade.collide(enemy1, layer1);
    this.game.physics.arcade.collide(enemy2, layer1);
    this.game.physics.arcade.collide(enemy3, layer1);
    this.game.physics.arcade.collide(enemy4, layer1);
    this.game.physics.arcade.collide(enemy5, layer1);
    this.game.physics.arcade.collide(weapon.bullets, layer1, this.KillBullet);
    this.game.physics.arcade.collide(weapon2.bullets, layer1, this.KillBullet);

    player.body.velocity.x = 0

    this.patrolling1(enemy1);
    this.patrolling2(enemy2);
    this.patrolling3(enemy3);
    this.patrolling4(enemy4);
    this.patrolling5(enemy5);

    this.game.physics.arcade.overlap(player, tutorial2, this.tutorial2ded, null, this);
    this.game.physics.arcade.overlap(player, enemy1, this.enattk, null, this);
    this.game.physics.arcade.overlap(player, enemy2, this.enattk, null, this);
    this.game.physics.arcade.overlap(player, enemy3, this.enattk, null, this);
    this.game.physics.arcade.overlap(player, enemy4, this.enattk, null, this);
    this.game.physics.arcade.overlap(player, enemy5, this.enattk, null, this);

    this.game.physics.arcade.overlap(weapon.bullets, enemy1, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon.bullets, enemy2, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon.bullets, enemy3, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon.bullets, enemy4, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon.bullets, enemy5, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon2.bullets, enemy1, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon2.bullets, enemy2, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon2.bullets, enemy3, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon2.bullets, enemy4, this.killenemy, null, this);
    this.game.physics.arcade.overlap(weapon2.bullets, enemy5, this.killenemy, null, this);
    this.game.physics.arcade.overlap(player, key1, this.getkey1, null, this);
    this.game.physics.arcade.overlap(player, key2, this.getkey2, null, this);

    door.animations.play('closed');

    if(cursors.left.isDown)
    {
        player.body.velocity.x = -250;
        player.animations.play('left');
        weapon2.bulletSpeed = -800;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
        player.animations.play('right');
        weapon.bulletSpeed = 800;
    }
    else
    {
        player.animations.stop();
        player.frame = 4;
        weapon.bulletSpeed = 800;
    }
    if (cursors.up.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
        weapon.bulletSpeed = 800;
    }
    if (attack.isDown && cursors.left.isDown)
    {
     weapon2.fire();
    }
    else if (attack.isDown) {
      weapon.fire();
    }

    if (key1.collected && key2.collected && this.game.physics.arcade.overlap(player, door) ) {
      this.opendoor();
      door.open = true;
   }
    if (door.open == true) {
     door.animations.play('open');
     this.game.time.events.add(1000, function() {this.player.kill()});
     this.loadend();
   }
    if (key1.collected) {
     gotkey1.alpha = 1;
    }
    if (key2.collected) {
     gotkey2.alpha = 1;
    }
  },
  render: function() {
  },

  tutorial2ded: function() {
    tutorial2.kill();
    again = true;
  },

  patrolling1: function(enemy1) {
    if (enemy1.body.position.x < 1100) {
       enemy1.body.velocity.x = 100;
       enemy1.animations.play('right1');
       }
   if (enemy1.body.position.x > 1600) {
        enemy1.body.velocity.x = -100;
        enemy1.animations.play('left1');
      }
    },
  patrolling2: function(enemy2) {
    if (enemy2.body.position.x < 950) {
           enemy2.body.velocity.x = 100;
           enemy2.animations.play('right2');
           }
    if (enemy2.body.position.x > 1335) {
            enemy2.body.velocity.x = -100;
            enemy2.animations.play('left2');
          }
    },
  patrolling3: function(enemy3) {
      if (enemy3.body.position.x < 998 ) {
             enemy3.body.velocity.x = 100;
             enemy3.animations.play('right3');
             }
      if (enemy3.body.position.x > 1396) {
              enemy3.body.velocity.x = -100;
              enemy3.animations.play('left3');
            }
      },
  patrolling4: function(enemy4) {
        if (enemy4.body.position.x < 1080 ) {
               enemy4.body.velocity.x = 100;
               enemy4.animations.play('right4');
               }
        if (enemy4.body.position.x > 1540) {
                enemy4.body.velocity.x = -100;
                enemy4.animations.play('left4');
              }
        },
  patrolling5: function(enemy5) {
          if (enemy5.body.position.x < 2225 ) {
                 enemy5.body.velocity.x = 100;
                 enemy5.animations.play('right5');
                 }
          if (enemy5.body.position.x > 2342) {
                  enemy5.body.velocity.x = -100;
                  enemy5.animations.play('left5');
                }
              },
  KillBullet: function(bullets, layer1) {
    bullets.kill();
  },

  enattk: function() {
    player.kill();
    gongmorte.play();
    this.game.time.events.add(250, this.loaddead);
    this.game.time.events.add(250, function() {music2.destroy()});
  },

  loaddead: function() {
      if (cinese == true) {
        game.state.start('Dead2cinese')
        }
      else {
        game.state.start('Dead2');
        }
      },
  getkey1: function() {
    key1.kill();
    key1.collected = true;
  },
  getkey2: function() {
    key2.kill();
    key2.collected = true;
  },
  killenemy: function(enemy, bullets) {
    enemy.kill();
    bullets.kill();
  },
  opendoor: function() {
    door.animations.play('open');
  },
  loadend: function() {
    this.game.time.events.add(1500, this.bigwin);
    this.game.time.events.add(1500, function(){
            music2.destroy()});
  },
  bigwin: function() {
    if (cinese == true) {
      game.state.start('VictoryCinese')
    }
    else {
      game.state.start('Victory');
    }
  },
}
game.state.add('LV02', lv02State);

var deadState1 = {
  preload: function() {
    game.load.spritesheet('retry', 'assets/retry.png');

  },
  create: function() {

    retry = game.add.image(0, 0, 'retry');
    retry.inputEnabled = true;
    retry.events.onInputDown.add(this.retry, this);

  },
  retry: function() {
    game.state.start('LV01')
    }
  }
game.state.add('Dead1', deadState1);

var deadState2 = {
  preload: function() {
    game.load.spritesheet('retry', 'assets/retry.png');

  },
  create: function() {
    retry = game.add.image(0, 0, 'retry');
    retry.inputEnabled = true;
    retry.events.onInputDown.add(this.retry, this);

  },
  retry: function() {
    game.state.start('LV02');
    }
  }
game.state.add('Dead2', deadState2);

var deadState1cinese = {
  preload: function() {
    game.load.spritesheet('retrycinese', 'assets/cinese/retry.png');

  },
  create: function() {

    retrycinese = game.add.image(0, 0, 'retrycinese');
    retrycinese.inputEnabled = true;
    retrycinese.events.onInputDown.add(this.retrycinese, this);

  },
  retrycinese: function() {
    game.state.start('LV01')
    }
  }
game.state.add('Dead1cinese', deadState1cinese);

var deadState2cinese = {
  preload: function() {
    game.load.spritesheet('retrycinese', 'assets/cinese/retry.png');
  },
  create: function() {
    retrycinese = game.add.image(0, 0, 'retrycinese');
    retrycinese.inputEnabled = true;
    retrycinese.events.onInputDown.add(this.retrycinese, this);

  },
  retrycinese: function() {
    game.state.start('LV02');
    }
  }
game.state.add('Dead2cinese', deadState2cinese);

var victoryState = {
  preload: function() {
    game.load.spritesheet("shoot", "scenes/Sparo.png");
    game.load.spritesheet("win", "scenes/Consigliere Morto.png");
    game.load.spritesheet("fin", "scenes/Fin.png", 1024, 768, 11);
    game.load.spritesheet("shoottxt", "scenes/Sparotxt.png");
    game.load.spritesheet("wintxt", "scenes/Consigliere Mortotxt.png");
    },
  create: function() {
    narr = game.add.audio('narr');
    narr.loopFull();

    shoot = game.add.sprite(0,0, 'shoot');
    shoot.inputEnabled = true;
    shoot.events.onInputDown.add(this.go1, this);
    },
    go1: function() {
      if(textshot == true) {
        win = game.add.sprite(0,0, 'win');
        win.inputEnabled = true;
        win.events.onInputDown.add(this.go2, this);
      }
      else {
        textshot = game.add.sprite(0,0, 'shoottxt');
        textshot = true;
      }
    },
    go2: function() {
      if(textwin == true) {
        fin = game.add.sprite(0,0, 'fin');
        fin.inputEnabled = true;
        fin.animations.add('blur', [0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1, 2, 3, 4,5,6,7,8,9,10], 11, false);
        fin.animations.play('blur');
        game.time.events.add(700, this.blur);
        fin.events.onInputDown.add(this.end, this);
      }
      else {
        textwin = game.add.sprite(0,0, 'wintxt');
        textwin = true;
      }
    },
    blur: function() {
      blur = true
    },

    end: function() {
      if(blur == true) {
        window.location.reload();
      }
    }
  }
game.state.add('Victory', victoryState);

var victorycineseState = {
  preload: function() {
    game.load.spritesheet("shoot", "scenes/Sparo.png");
    game.load.spritesheet("win", "scenes/Consigliere Morto.png");
    game.load.spritesheet("fincinese", "scenes/cinese/Fin.png", 1024, 768, 11);
    game.load.spritesheet("shoottxtcinese", "scenes/cinese/Sparotxt.png");
    game.load.spritesheet("wintxtcinese", "scenes/cinese/Consigliere Mortotxt.png");
    },
  create: function() {
    narr = game.add.audio('narr');
    narr.loopFull();

    shoot = game.add.sprite(0,0, 'shoot');
    shoot.inputEnabled = true;
    shoot.events.onInputDown.add(this.go1cinese, this);
    },
    go1cinese: function() {
      if(textshotcinese == true) {
        win = game.add.sprite(0,0, 'win');
        win.inputEnabled = true;
        win.events.onInputDown.add(this.go2cinese, this);
      }
      else {
        textshocineset = game.add.sprite(0,0, 'shoottxtcinese');
        textshotcinese = true;
      }
    },
    go2cinese: function() {
      if(textwincinese == true) {
        fincinese = game.add.sprite(0,0, 'fincinese');
        fincinese.inputEnabled = true;
        fincinese.animations.add('blurcinese', [0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1, 2, 3, 4,5,6,7,8,9,10], 11, false);
        fincinese.animations.play('blurcinese');
        game.time.events.add(700, this.blurcinese);
        fincinese.events.onInputDown.add(this.endcinese, this);
      }
      else {
        textwincinese = game.add.sprite(0,0, 'wintxtcinese');
        textwincinese = true;
      }
    },
    blurcinese: function() {
      blurcinese = true
    },

    endcinese: function() {
      if(blurcinese == true) {
        window.location.reload();
      }
    }
  }
game.state.add('VictoryCinese', victorycineseState);

function create() {}
function update() {}
function render() {}

game.state.start('menu');
