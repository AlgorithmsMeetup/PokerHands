var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {
      var isRoyalFlush = function(hand){
        var sortedHand = sortHandLowToHigh(hand);
        if( isStraightFlush(hand) && sortedHand[0].rank==='T' ){
          // Special case where A is 1.
          return 'Royal flush'
        }
      };

      var isStraightFlush = function(hand){
        if( isFlush(hand) && isStraight(hand) ){
          return isStraight(hand).replace('Straight', 'Straight flush');
        }
        return false;
      };

      var isFourOfAKind = function(hand){
        var counts = countsOfRanks(hand)
        if(counts[4].length){
          return 'Four of a kind of '+counts[4][0];
        }
        return false;
      };

      var isFullHouse = function(hand){
        var counts = countsOfRanks(hand)
        if(counts[3].length && counts[2].length){
          return 'Full house of '+counts[3][0];
        }
        return false;
        return false;
      };

      var isFlush = function(hand){
        var sortedHand = sortHandLowToHigh(hand);
        // reduce happens each time :(
        var flushSuit = sortedHand.reduce(function(suit, card){
          return suit = card.suit === suit ? suit : false;
        }, sortedHand[0].suit);
        if(flushSuit){
          return 'Flush with high card '+sortedHand[4].rank;
        }
      };

      var isStraight = function(hand){
        var sortedHand = sortHandLowToHigh(hand);
        var low = sortedHand[0];
        var nextHighest = sortedHand[3];
        var high = sortedHand[4];
        if(high.rankNum-low.rankNum===4){
          return 'Straight up to '+high.rank;
        } else if(high.rank==='A' && low.rank==='2' && nextHighest.rank==='5'){
          // Special case where A is 1.
          return 'Straight up to 5';
        }
      };

      var isThreeOfAKind = function(hand){
        var counts = countsOfRanks(hand)
        if(counts[3].length){
          return 'Three of a kind of '+counts[3][0];
        }
        return false;
      };

      var isTwoPair = function(hand){
        var counts = countsOfRanks(hand)
        if(counts[2].length===2 || counts[4].length){
          return 'Two pair of '+counts[2][1]+' and '+counts[2][0];
        }
        return false;
      };

      var isPair = function(hand){
        var pair = countsOfRanks(hand)[2];
        if(pair.length){
          return 'Pair of '+pair;
        }
      };

      var isHighCard = function(hand){
        var highCard = sortHandLowToHigh(hand)[4];
        return highCard.rank+' High'
      };

      var splitHand = function(hand){
        return hand
          .split(' ')
          .map(function(card){
            var actualRank = card[0]
            var suit = card[1];
            var numericRank = actualRank;
            switch(numericRank){
              case 'T': numericRank=10; break;
              case 'J': numericRank=11; break;
              case 'Q': numericRank=12; break;
              case 'K': numericRank=13; break;
              case 'A': numericRank=14; break;
            }
            return {rankNum: numericRank, rank: actualRank, suit: suit};
          });
      };

      var sortHandLowToHigh = function(hand){
        return splitHand(hand)
          .sort(function(a,b){
            return a.rankNum > b.rankNum;
          });
      };
      var countsOfRanks = function(hand){
        var results = {1:[], 2:[], 3:[], 4:[]};
        var sortedHand = sortHandLowToHigh(hand);
        var currentRank = sortedHand[0].rank;
        var currentRankCount = 0;
        for(var i=0; i<5; i++){
          if(sortedHand[i].rank === currentRank){
            currentRankCount++;
          } else {
            results[currentRankCount].push(currentRank);
            currentRank = sortedHand[i].rank;
            currentRankCount = 1;
          }
        }
        results[currentRankCount].push(currentRank);
        // >[2,2,3,4,5]
        // <{1:[3,4,5], 2:[2]}
        // >[K,K,Q,8,3]
        // <{1:[3,8,Q], 2:[K]}
        return results;
      };

      // Return highest hand possible.
      if( isFourOfAKind(hand) ){
        return isFourOfAKind(hand);
      }
      else if( isThreeOfAKind(hand) ){
        if( isFullHouse(hand) ){
          return isFullHouse(hand);
        } else {
          return isThreeOfAKind(hand);
        }
      }
      else if( isStraightFlush(hand) ){
        if( isRoyalFlush(hand) ){
          return isRoyalFlush(hand);
        } else {
          return isStraightFlush(hand)
        }
      } else if( isFlush(hand) ){
        return isFlush(hand);
      }
      else if( isStraight(hand) ){
        return isStraight(hand);
      }
      else if( isPair(hand) ){
        if( isTwoPair(hand) ){
          return isTwoPair(hand);
        } else {
          return isPair(hand);
        }
      } else {
        return isHighCard(hand);
      }
  },

  // Takes an array of hands and returns the index of the winning hand.
  // If two or more hands tie for the win, instead return an array of the winning hands.
  findWinner: function(hands) {

  }
};