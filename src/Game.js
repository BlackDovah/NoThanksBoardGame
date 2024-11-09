import { TurnOrder } from 'boardgame.io/core';

function initializeDeck() {
    const deck = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    // Shuffle the array
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }

    // Return the first `size` elements
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
    // Step 1: Sort the array in ascending order
    const sortedCards = cards.slice().sort((a, b) => a - b);

    const sequences = [];  // Array to store all consecutive sequences
    let currentSequence = [sortedCards[0]]; // Start with the first card

    // Step 2: Find consecutive sequences
    for (let i = 1; i < sortedCards.length; i++) {
        if (sortedCards[i] === sortedCards[i - 1] + 1) {
            // If the current card is consecutive, add it to the current sequence
            currentSequence.push(sortedCards[i]);
        } else {
            // If not consecutive, store the current sequence and start a new one
            sequences.push(currentSequence);
            currentSequence = [sortedCards[i]];
        }
    }
    // Don't forget to push the last sequence found
    sequences.push(currentSequence);

    // Step 3: Return the smallest number from each sequence
    const smallestInEachSequence = sequences.map(sequence => sequence[0]);

    return smallestInEachSequence;
};

// // Initialize the deck with 23 cards and shuffle them.
const initialDeck = initializeDeck();

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
        deck: initialDeck,
        hand: createHands(4),
        ground: {
            groundTokens: Number(0),
            currentCard: initialDeck[0]
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
