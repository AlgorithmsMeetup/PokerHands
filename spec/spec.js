describe('Correctly labels poker hands', function() {
  it("High card", function() {
    expect(poker.labelHand("9H 8C 4H 3S 2D")).to.equal("9 High");
    expect(poker.labelHand("QD JS 9S 8S 2S")).to.equal("Q High");
  });

  it("Pair", function() {
    expect(poker.labelHand("2C 2H 3C 4H 5S")).to.equal("Pair of 2");
    expect(poker.labelHand("KC KS QH 8S 3C")).to.equal("Pair of K");
  });

  it("Two Pair", function() {
    expect(poker.labelHand("AH AC 3D 3C 8S")).to.equal("Two pair of A and 3");
  });

  it("Three of a kind", function() {
    expect(poker.labelHand("8H 8C 8S KH JS")).to.equal("Three of a kind of 8");
  });

  it("Straight", function() {
    expect(poker.labelHand("5C 6H 7S 8C 9D")).to.equal("Straight up to 9");
    expect(poker.labelHand("AH 2H 3S 5C 4H")).to.equal("Straight up to 5");
    expect(poker.labelHand("TC JS QS KH AD")).to.equal("Straight up to A");
  });

  it("Flush", function() {
    expect(poker.labelHand("3D KD TD 9D 5D")).to.equal("Flush with high card K");
  });

  it("Full House", function() {
    expect(poker.labelHand("AD 2C AS 2D AH")).to.equal("Full house of A");
    expect(poker.labelHand("3D 3C 3S TD TS")).to.equal("Full house of 3");
  });

  it("Four of a Kind", function() {
    expect(poker.labelHand("4S 4C 4H 5D 4D")).to.equal("Four of a kind of 4");
  });

  it("Straight Flush", function() {
    expect(poker.labelHand("5D 6D 7D 8D 9D")).to.equal("Straight flush up to 9");
    expect(poker.labelHand("AH 2H 3H 4H 5H")).to.equal("Straight flush up to 5");
  });

  it("Royal Flush", function() {
    expect(poker.labelHand("TC QC AC KC JC")).to.equal("Royal flush");
  });
});
