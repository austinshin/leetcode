/* Instructions from your teacher:
Design a blackjack game using Object-Oriented principles.

If you're feeling a little rusty, here's a high-level refresher:

A = 1 or 11
2-9 = exactly what you'd expect
J, Q, K = 10

The aim of the game is to have cards totaling as close to 21 as possible (without going over). The dealer issues each player 2 cards (which becomes their 'Hand').

Players must then choose to either 'Stand' (take no more cards) or 'Hit' (take one more card). Players can continue taking additional cards ('Hit') or stop receiving cards ('Stand') until they exceed 21, in which case they are out.

At the end of the round, all players' hands are compared and whoever has the highest value (<= 21) wins.
*/

const readline = require('readline');

class Blackjack {
  constructor(players) {
    this.players = [];
    this.deck = null;
    this.standing = [];
  }

  createDeck() {
    const newDeck = [];
    const init = [
      'A',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ];
    init.forEach(item => {
      newDeck.push(item);
      newDeck.push(item);
      newDeck.push(item);
      newDeck.push(item);
    });
    this.deck = newDeck;
  }

  addPlayer(player) {
    this.players.push(player);
    console.log(`${player.name} has joined the game!`);
  }

  removePlayer(player) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i] === player) {
        this.players.splice(i, 0);
      }
    }
  }

  startGame() {
    this.createDeck();
    this.addPlayers();
  }

  deal(player) {
    const toDeal = Math.floor(Math.random() * (this.deck.length + 1));
    player.addCard(this.deck[toDeal]);
    console.log(`\ncard dealt: ${this.deck[toDeal]}`);
    this.deck.splice(toDeal, 0);
  }

  addPlayers() {
    console.log('\nWelcome to blackjack!\n');
    console.log('Please add players!\n');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const question = (prompt, handler) => {
      rl.question(prompt, input => {
        if (handler(input) !== false) {
          question(prompt, handler);
        } else {
          rl.close();
          this.players.forEach(player => {
            player.ready();
            player.hit();
            player.hit();
          });
          this.proceed();
        }
      });
    };

    question(
      '\nInput a player. Type "start" when you want to play.\n',
      input => {
        if (input === 'start') {
          return false;
        }
        const newPlayer = new Player(input);
        newPlayer.joinGame(this);
      },
    );
  }

  proceed() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let i = 0;

    const question = (prompt, handler) => {
      console.log(
        `\n${this.players[i].name}'s turn:\n ${JSON.stringify(
          this.players[i].cards,
        )}\ncurrent total: ${this.players[i].total}\nhit or stand?`,
      );
      rl.question(prompt, input => {
        if (handler(input) !== false) {
          question(prompt, handler);
        } else {
          rl.close();
        }
      });
    };

    question(`-------------------------------\n>`, input => {
      switch (input) {
        case 'hit':
          console.log(`\ndealing for ${this.players[i].name}...`);
          const stillAlive = this.players[i].hit();
          if (stillAlive) {
            console.log('still alive!');
          } else {
            console.log('bust!');
            i += 1;
            if (i === this.players.length) {
              this.calculate();
              return false;
            }
          }
          // check if bust or not
          // this.players[i].listCards();
          break;
        case 'stand':
          this.standing.push([this.players[i], this.players[i].total]);
          i += 1;
          if (i === this.players.length) {
            this.calculate();
            return false;
          }
          console.log('standing\n-------------------------------');
          break;
        case 'exit':
          console.log('Bye!');
          return false;
      }
    });
  }

  calculate() {
    // naive comparison. need to compare lengths as well eventually
    this.standing.sort((a, b) => b[1] - a[1]);
    console.log(
      `\n-------------------------------\nWinner is: ${
        this.standing[0][0].name
      }`,
    );
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.currGame = null;
    this.stand = false;
    this.total = 0;
  }

  ready() {
    this.cards = [];
    this.stand = false;
    this.total = 0;
  }

  joinGame(blackjackgame) {
    blackjackgame.addPlayer(this);
    this.currGame = blackjackgame;
  }

  addCard(card) {
    this.cards.push(card);
  }

  hit() {
    this.currGame.deal(this);
    const total = this.calculate();
    this.total = total;
    return total <= 21;
  }

  stand() {
    this.stand = true;
  }

  listCards() {
    for (let i = 0; i < this.cards.length; i++) {
      console.log(this.cards[i]);
    }
  }

  calculate() {
    let total = 0;
    for (let i = 0; i < this.cards.length; i++) {
      const cards = this.cards;
      if (cards[i] === 'A') {
        if (total + 11 > 21) {
          total += 1;
        } else {
          total += 11;
        }
      } else if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
        total += 10;
      } else {
        total += parseInt(cards[i]);
      }
    }
    console.log('current total is: ', total);
    return total;
  }
}

const blackjackGame = new Blackjack();
blackjackGame.startGame();
