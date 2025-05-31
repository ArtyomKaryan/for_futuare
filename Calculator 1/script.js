function calculateBudget() {
    // Get the entered budget value
    let budget = parseFloat(document.getElementById("budgetInput").value);

    // Validate the budget input
    if (isNaN(budget) || budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    // Calculate savings (20%)
    let savings = budget * 0.20;

    // The remaining 80% is for monthly expenses
    let monthlyBudget = budget * 0.80;

    // Distribute monthly budget
    let rent = monthlyBudget * 0.40;
    let food = monthlyBudget * 0.30;
    let utilities = monthlyBudget * 0.10;
    let entertainment = monthlyBudget * 0.10;
    let otherExpenses = monthlyBudget * 0.10;

    // Display results
    document.getElementById("savings").textContent = savings.toFixed(2) + " AMD";
    document.getElementById("rent").textContent = rent.toFixed(2) + " AMD";
    document.getElementById("food").textContent = food.toFixed(2) + " AMD";
    document.getElementById("utilities").textContent = utilities.toFixed(2) + " AMD";
    document.getElementById("entertainment").textContent = entertainment.toFixed(2) + " AMD";
    document.getElementById("otherExpenses").textContent = otherExpenses.toFixed(2) + " AMD";

    // Make the result section visible
    document.getElementById("result").style.display = "block";
}

// Add Enter key support
document.getElementById("budgetInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateBudget();
    }
});
