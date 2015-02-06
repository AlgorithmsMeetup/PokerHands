var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {
      var isRoyalFlush = function(hand){
        // if( isStraightFlush(hand) && isHighCard(hand)==='A High' ){
        //   console.log('Royal flush');
        //   return 'Royal flush'
        // }
      };
      var isStraightFlush = function(hand){
        // console.log('isStraightFlush(hand)',isStraightFlush(hand));
        // if( isFlush(hand) && isStraight(hand) ){
        //   return isStraight(hand).replace('Straight', 'Straight flush');
        // }
        return false;
      };
      var isFourOfAKind = function(hand){
        var rank1 = hand[0];
        var rank2 = hand[3];
// Four of a kind of 4
        return false;
      };
      var isFullHouse = function(hand){
// Full house of 3
        return false;
      };
      var isFlush = function(hand){
        var suit = hand[1];
        if( hand[4]===suit && hand[7]===suit && hand[10]===suit && hand[13]===suit ){
          return 'Flush with high card '+isHighCard(hand).replace(' High','');
        }
// Flush with high card K
      };
      var isStraight = function(hand){
        var sortedHand = sortHandLowToHigh(hand);
        var low = sortedHand[0];
        var high = sortedHand[4];
        if(high.rankNum-low.rankNum === 4){
          return 'Straight up to '+high.rank;
        } else if(high.rank==='A' && low.rank==='2' && sortedHand[3].rank==='5'){
          return 'Straight up to 5';
        }
// Straight up to 9
      };
      var isThreeOfAKind = function(hand){
// Three of kind of 8
        return false;
      };
      var isTwoPair = function(hand){
// Two pair of A and 3
        return false;
      };
      var isPair = function(hand){
// Pair of 2
        return false;
      };
      var isHighCard = function(hand){
        var highCard = sortHandLowToHigh(hand)[4];
        console.log(highCard.rank+' High');
        return highCard.rank+' High'
      };
      var sortHandLowToHigh = function(hand){
        var sortedHand = hand
          .split(' ')
          .map(function(card){
            var actualRank = card[0]
            var numericRank = actualRank;
            switch(numericRank){
              case 'T': numericRank=10; break;
              case 'J': numericRank=11; break;
              case 'Q': numericRank=12; break;
              case 'K': numericRank=13; break;
              case 'A': numericRank=14; break;
            }
            return {rankNum: numericRank, rank: actualRank};
          })
          .sort(function(a,b){
            return a.rankNum > b.rankNum;
          });
        console.log(sortedHand);
        return sortedHand;
      };

      result = isHighCard(hand);
      result = isPair(hand) || result;
      result = isTwoPair(hand) || result;
      result = isThreeOfAKind(hand) || result;
      result = isStraight(hand) || result;
      result = isFlush(hand) || result;
      result = isFullHouse(hand) || result;
      result = isFourOfAKind(hand) || result;
      result = isStraightFlush(hand) || result;
      result = isRoyalFlush(hand) || result;
      return result;
  },

  // Takes an array of hands and returns the index of the winning hand.
  // If two or more hands tie for the win, instead return an array of the winning hands.
  findWinner: function(hands) {

  }
};