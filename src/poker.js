var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {
      var isRoyalFlush = function(hand){
        if( isStraightFlush(hand) && hand.indexOf('T') && hand.indexOf('A') ){
          return 'Royal flush'
        }
      };
      var isStraightFlush = function(hand){
        if( isFlush(hand) && isStraight(hand) ){
          return isStraight(hand).replace('Straight', 'Straight flush');
        }
      };
      var isFourOfAKind = function(hand){
        var rank1 = hand[0];
        var rank2 = hand[3];
// Four of a kind of 4
      };
      var isFullHouse = function(hand){
// Full house of 3
      };
      var isFlush = function(hand){
        var suit = hand[1];
        if( hand[4]===suit && hand[7]===suit && hand[10]===suit && hand[13]===suit ){
          return 'Flush with high card'+isHighCard(hand).replace(' High','');
        }
// Flush with high card K
      };
      var isStraight = function(hand){
        hand
          .split(' ')
          .map(function(card){return card[0];})
          .sort(function(a,b){return a>b;});

        return true;
// Straight up to 9
      };
      var isThreeOfAKind = function(hand){
// Three of kind of 8
      };
      var isTwoPair = function(hand){
// Two pair of A and 3
      };
      var isPair = function(hand){
// Pair of 2
      };
      var isHighCard = function(hand){
        var highCard = hand[0];
        for(i = 3; i<hand.length-1; i = i+3){
          highCard = hand[i]>highCard ? hand[i] : highCard;
        }
        return highCard+' High'
      };

      return isRoyalFlush(hand);
      // isStraightFlush(hand) ||
      // isFourOfAKind(hand) ||
      // isFullHouse(hand) ||
      // isFlush(hand) ||
      // isStraight(hand) ||
      // isThreeOfAKind(hand) ||
      // isTwoPair(hand) ||
      // isPair(hand) ||
      // isHighCard(hand);
  },

  // Takes an array of hands and returns the index of the winning hand.
  // If two or more hands tie for the win, instead return an array of the winning hands.
  findWinner: function(hands) {

  }
};