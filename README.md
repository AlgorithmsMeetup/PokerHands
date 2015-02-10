# PokerHands
Categorize and compare 5-card poker hands.

![card gif](http://animationsa2z.com/attachments/Image/cards/cards2.gif)
##Goal:
Your task for today is to classify poker hands!  You have two functions to complete:

  - labelHand, which gives the name of a single hand.
  - findWinner, which determines which of several hands is best.

##Info:
Hands are 14-character strings that look like "8H TC KS 2C AD", where
  - there are exactly five cards
  - each card is separated by a space
  - each card is represented by a value followed by a suit
  - ace is "A" (remember, aces can be either low or high!)
  - king is "K"
  - queen is "Q"
  - jack is "J"
  - ten is "T"
  - all other cards are represented by their number.
  - the four suits are represented by "H", "C", "S", and "D"

Hands will be legal, with no duplicate cards.

Remember, the order of hands, from highest to lowest is
  - Royal flush:      like a straight flush from Ten to Ace
  - Straight flush:   5 cards in a row of the same suit
  - Four of a kind:   4 cards of the same value
  - Full house:       3 cards of the same value and one pair.
  - Flush:            5 cards of the same suit
  - Straight:         5 cards in a row
  - Three of a kind:  3 cards of the same value
  - Two pair:         you got this one.
  - Pair:             this one too.
  - High card:        basically, no hand.

There are no helper functions provided this time.
You're on your own, but feel free to write whatever helpers you need!
