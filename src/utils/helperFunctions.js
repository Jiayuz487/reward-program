export function calcPointsForSinglePurchase(purchase) {
  const amount = purchase.amount;
  if (amount <= 50) {
    return 0;
  } else if (amount > 50 && amount <= 100) {
    return amount - 50;
  } else {
    return (amount - 100) * 2 + 50;
  }
}

export function calcTotalPointsForPurchases(purchases) {
  return purchases.reduce((totalPoints, purchase) => {
    return totalPoints + calcPointsForSinglePurchase(purchase);
  }, 0);
}
