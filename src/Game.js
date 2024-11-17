// const { TurnOrder } = require('boardgame.io/core');
import { TurnOrder } from 'boardgame.io/dist/cjs/core.js';

const initializeDeck =() =>{
    const deck = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; 
    }

    return deck.slice(0, 24);
};

const placeTokenAndPass = ({ G, playerID }) => {
    if (G.hand[playerID].tokens > 0) {
        G.hand[playerID].tokens--;
        G.ground.groundTokens++;
    } else { takeCardAndTokens({ G, playerID }) }
};
const takeCardAndTokens = ({ G, playerID }) => {
    G.hand[playerID].tokens += G.ground.groundTokens;
    G.hand[playerID].cards.push(G.ground.currentCard);
    G.deck = G.deck.slice(1);
    G.ground.currentCard = G.deck[0]
    G.ground.groundTokens = 0;
};

function findSmallestInSequences(cards) {
    const sortedCards = cards.slice().sort((a, b) => a - b);

    const sequences = [];  
    let currentSequence = [sortedCards[0]]; 

    for (let i = 1; i < sortedCards.length; i++) {
        if (sortedCards[i] === sortedCards[i - 1] + 1) {
            currentSequence.push(sortedCards[i]);
        } else {
            sequences.push(currentSequence);
            currentSequence = [sortedCards[i]];
        }
    }
    sequences.push(currentSequence);

    const smallestInEachSequence = sequences.map(sequence => sequence[0]);

    return smallestInEachSequence;
};

// Initialize the deck with 24 cards and shuffle them.
const endGameCalculations = ({ G, ctx }) => {
    const playerScore = [];
    if (G.deck.length === 0) {
        for (let i = 0; i < ctx.numPlayers; i++) {
            const playerID = i.toString();
            let smallestCardInStack = findSmallestInSequences(G.hand[playerID].cards);
            let totalScore = smallestCardInStack.reduce((sum, card) => sum + card, 0);
            playerScore.push({ [playerID]: totalScore - G.hand[playerID].tokens });
        };

        const scores = playerScore.map(score => Object.values(score)[0]);
        const minScore = Math.min(...scores);
        const winner = playerScore.filter(player => Object.values(player)[0] === minScore).map(player => Object.keys(player)[0]);
        return {playerScore: playerScore, winner: winner, minScore: minScore, message: `The winner is player: ${winner}, with a score of: ${minScore}.` };
    };
};

function createHands(numPlayers) {
    // Ensure numPlayers is between 3 and 7
    if (numPlayers < 3 || numPlayers > 7) {
        throw new Error("Number of players must be between 3 and 7.");
    }

    // Determine the number of tokens based on player count
    let tokens;
    if (numPlayers <= 5) {
        tokens = 11;
    } else if (numPlayers === 6) {
        tokens = 9;
    } else if (numPlayers === 7) {
        tokens = 7;
    }

    // Create the hand object with the appropriate number of players and tokens
    const hand = {};
    for (let i = 0; i < numPlayers; i++) {
        hand[i.toString()] = { tokens: tokens, cards: [] };
    }

    return hand;
};


export const NoThanks = {
    setup: () => ({
        deck: initializeDeck(),
        hand: createHands(4),
        ground: {
            groundTokens: Number(0),
            currentCard: initializeDeck()[0]

        }
    }),

    turn: {
        order: TurnOrder.CONTINUE,
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        placeTokenAndPass,
        takeCardAndTokens
    },


    endIf: endGameCalculations,
};

// module.exports = { NoThanks };