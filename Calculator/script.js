function calculateBudget() {
    // Գտնում ենք մուտքագրված բյուջեն
    let budget = parseFloat(document.getElementById("budgetInput").value);

    // Եթե արժեքը բացակայում է կամ սխալ է, կանգնեցնում ենք հաշվարկը
    if (isNaN(budget) || budget <= 0) {
        alert("Խնդրում ենք մուտքագրել վավեր բյուջե:");
        return;
    }

    // Խնայողություն
    let savings = budget * 0.20;

    // Ա剩ած գումար
    let remainingBudget = budget - savings;

    // Բաշխում ըստ կատեգորիաների
    let utilities = remainingBudget * 0.15;
    let otherExpenses = remainingBudget * 0.10;
    let entertainment = remainingBudget * 0.15;
    let food = remainingBudget * 0.25;
    let rent = remainingBudget * 0.35;

    // Տպում ենք արդյունքները
    document.getElementById("savings").textContent = savings.toFixed(2) + " դր.";
    document.getElementById("utilities").textContent = utilities.toFixed(2) + " դր.";
    document.getElementById("otherExpenses").textContent = otherExpenses.toFixed(2) + " դր.";
    document.getElementById("entertainment").textContent = entertainment.toFixed(2) + " դր.";
    document.getElementById("food").textContent = food.toFixed(2) + " դր.";
    document.getElementById("rent").textContent = rent.toFixed(2) + " դր.";

    // Ավելացնում ենք տեսանելիությունը
    document.getElementById("result").style.display = "block";
}
