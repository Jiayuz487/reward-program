export function calcPoints(amount) {
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
    return totalPoints + calcPoints(purchase.amount);
  }, 0);
}

export function getAllCustomers(purchases) {
  const customers = new Set();
  purchases.forEach((purchase) => customers.add(purchase.customerId));
  return Array.from(customers);
}

export function isWithinSelectedPeriod(date, selectedPeriod) {
  if (selectedPeriod === "All") {
    return true;
  }
  const currentDate = new Date();
  const purchaseDate = new Date(date);

  const differenceInTime = currentDate.getTime() - purchaseDate.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  let periodInDays = 0;
  switch (selectedPeriod) {
    case "Last 30 days":
      periodInDays = 30;
      break;
    case "Last 3 months":
      periodInDays = 90;
      break;
    case "Last 6 months":
      periodInDays = 180;
      break;
    default:
  }
  return differenceInDays <= periodInDays;
}

export function isSelectedCustomer(customer, selectedCustomer) {
  if (selectedCustomer === "All") {
    return true;
  }
  return customer === selectedCustomer;
}
