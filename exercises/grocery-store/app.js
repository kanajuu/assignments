let shopper = {
  paymentMethod: '',
  moneySpent: 356.78,
  payingWithCard: false,
  confirmPaymentMethod: function (isCard, pmtType) {
    if (isCard === 'yes' || isCard === 'no') {
      this.payingWithCard = true;
    } else if (isCard === undefined) {
      console.log('Invalid response. Please try again.')
    };
    if (pmtType) {
      this.paymentMethod = pmtType;
    } else if (pmtType === undefined) {
      console.log('You did not specify a payment method. Please try again.')
    }
    console.log(shopper.payingWithCard);
    console.log(shopper.paymentMethod);
  }
};