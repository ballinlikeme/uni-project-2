const expenseTips = [
  "Create a Budget: Allocate your income into categories like rent, utilities, groceries, savings, etc.",
  "Track Your Expenses: Use apps or spreadsheets to monitor where your money goes.",
  "Set Financial Goals: Establish short-term and long-term financial objectives.",
  "Prioritize Essential Expenses: Cover necessities like housing, food, and utilities first.",
  "Use the 50/30/20 Rule: Allocate 50% for needs, 30% for wants, and 20% for savings/debt payments.",
  "Review and Adjust: Regularly assess your budget and make necessary adjustments.",
  "Reduce Dining Out: Cook meals at home to save on restaurant bills.",
  "Cancel Unused Subscriptions: Identify and cancel subscriptions you don't use often.",
  "Shop Smart: Use grocery lists and look for sales/discounts.",
  "Compare Prices: Research before making significant purchases to find the best deals.",
  "Cut Unnecessary Expenses: Evaluate if certain expenses (like memberships or services) are truly essential.",
  "DIY Repairs: Learn basic maintenance skills to avoid costly professional services.",
  "Use Public Transportation or Carpool: Save on fuel and maintenance costs.",
  "Lower Utility Costs: Use energy-efficient appliances and adjust thermostat settings.",
  "Refinance High-Interest Debt: Consider consolidating debts into lower-interest options.",
  "Automate Savings: Set up automatic transfers to savings accounts.",
  "Emergency Fund: Build an emergency fund to cover unexpected expenses.",
  "Use Cashback or Rewards: Utilize credit cards that offer rewards or cashback on purchases.",
  "Buy Used: Purchase pre-owned items when possible (e.g., furniture, electronics).",
  "Sell Unused Items: Declutter and earn extra cash by selling items you no longer need.",
  "Consider Generic Brands: Save on groceries and household items by opting for generic brands.",
  "Negotiate Bills: Contact service providers to negotiate better rates.",
  "Limit Impulse Purchases: Sleep on major buying decisions to avoid impulse spending.",
  "Plan Gift Giving: Budget for gifts and look for thoughtful yet budget-friendly options.",
  "DIY Home Maintenance: Learn to perform basic home repairs and maintenance tasks.",
  "Review Bank Statements: Regularly check your bank statements for errors or unauthorized charges.",
  "Avoid ATM Fees: Use ATMs within your bank's network to avoid extra charges.",
  "Pay Bills on Time: Avoid late fees and interest charges by paying bills promptly.",
  "Monitor Credit Score: Keep an eye on your credit score and report for any changes.",
  "Invest Wisely: Educate yourself about investment options and start investing for the future.",
  "Use Coupons and Deals: Clip coupons or use digital coupons to save on purchases.",
  "Plan Meals: Reduce food waste and save money by planning meals ahead.",
  "Unplug Appliances: Save on electricity by unplugging devices not in use.",
  "Use Free Entertainment: Explore free community events and activities for entertainment.",
  "DIY Gifts: Make gifts instead of buying expensive ones for special occasions.",
  "Downsize Living Space: Consider moving to a smaller or more affordable home.",
  "Take Advantage of Employer Benefits: Utilize employer-sponsored benefits like retirement plans or commuter benefits.",
  "Practice Minimalism: Adopt a minimalist lifestyle to reduce unnecessary spending.",
  "Rent Out Unused Space: Consider renting out a spare room or parking space for extra income.",
  "Barter Services: Exchange services or skills with others instead of paying for them.",
  "Stay Healthy: Prioritize health to minimize medical expenses in the long run.",
  "Review Insurance Policies: Regularly assess insurance needs to ensure you're not overpaying.",
  "Plan Vacations Smartly: Travel during off-peak seasons and look for travel deals.",
  "Learn DIY Personal Care: Make your personal care products like soap or cleaners.",
  "Avoid Credit Card Debt: Pay off credit card balances in full each month to avoid interest charges.",
  "Use Free Financial Tools: Utilize free financial management tools and apps.",
  "Stay Educated: Read books or articles on personal finance to enhance your knowledge.",
  "Attend Free Workshops: Look for free financial workshops or seminars in your area.",
  "Avoid Retail Therapy: Find alternative ways to manage stress without spending money.",
  "Celebrate Milestones Thoughtfully: Avoid overspending on celebrations and focus on meaningful gestures.",
  "Reduce Alcohol and Tobacco Consumption: Save money and improve health by cutting back on these expenses.",
  "Limit Online Shopping: Avoid the temptation of online impulse purchases.",
  "Review Subscriptions Annually: Regularly evaluate subscriptions and cancel those you no longer need.",
  "Use Budgeting Apps: Leverage technology to simplify expense tracking and budgeting.",
  "Shop at Thrift Stores: Find unique items at bargain prices by shopping secondhand.",
];

export function getRandomExpenseTips(numTips: number) {
  let tipsCopy = [...expenseTips];

  let randomTips = [];

  const maxTips = Math.min(numTips, tipsCopy.length);

  for (let i = 0; i < maxTips; i++) {
    const randomIndex = Math.floor(Math.random() * tipsCopy.length);

    randomTips.push(tipsCopy[randomIndex]);

    tipsCopy.splice(randomIndex, 1);
  }

  return randomTips;
}
