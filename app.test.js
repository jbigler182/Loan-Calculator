it('should calculate the monthly rate correctly', function() {
    const amount = 12345;
    const term = 67;
    const rate = 8;
    expect(calcPayment(amount, term, rate)).toEqual('82.70');
  });
it('should calculate the total cost', function() {
    const amount = 12345;
    const term = 67;
    const rate = 8;
    expect(totalCost(monthlyPayment, term)).toEqual('66490.80');
  });

