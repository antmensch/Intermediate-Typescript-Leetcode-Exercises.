function maxProfit(prices: number[]): number {
  let profit: number = 0;
  let buyPrice: number = prices[0];
  for (let i = 1; i <= prices.length; i++) {
  	if (prices[i] < buyPrice) {buyPrice = prices[i];}
    else if ((prices[i] - buyPrice) > profit) profit = prices[i] - buyPrice;
  }

  return profit;
}
