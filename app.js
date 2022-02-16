// constant variable  
const incomeInput = document.getElementById('income-value');
const foodInput = document.getElementById('food-value');
const rentInput = document.getElementById('rent-value');
const clothInput = document.getElementById('clothes-value');

//common function 
function getValue() {
    const foodValue = parseFloat(foodInput.value);
    const rentValue = parseFloat(rentInput.value);
    const clothValue = parseFloat(clothInput.value);
    const totalExpense = foodValue + rentValue + clothValue;
    return totalExpense;
}

//calculate cost 
document.getElementById('calculate-cost').addEventListener('click', function () {
    const incomeValue = parseFloat(incomeInput.value);
    const balance = incomeValue - getValue();
    document.getElementById('total-expense').innerText = getValue();
    document.getElementById('total-balance').innerText = balance;
})

//calculate save & remaining 
document.getElementById('calculate-save').addEventListener('click', function () {
    const incomeValue = parseFloat(incomeInput.value);
    const totalSave = (incomeValue * 20) / 100;
    const balance = incomeValue - getValue()
    document.getElementById('total-save').innerText = totalSave;
    document.getElementById('total-remaining').innerText = balance - totalSave;
})