//common function getting value 
function getValue() {

}

document.getElementById('calculate-cost').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-value');
    const incomeValue = parseFloat(incomeInput.value);
    const foodInput = document.getElementById('food-value');
    const foodValue = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-value');
    const rentValue = parseFloat(rentInput.value);
    const clothInput = document.getElementById('clothes-value');
    const clothValue = parseFloat(clothInput.value);
    const totalExpense = foodValue + rentValue + clothValue;
    const balance = incomeValue - totalExpense
    document.getElementById('total-expense').innerText = totalExpense;
    document.getElementById('total-balance').innerText = balance;

    console.log(totalExpense);
})

document.getElementById('calculate-save').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-value');
    const incomeValue = parseFloat(incomeInput.value);
    // console.log(typeof incomeValue)
    const totalSave = (incomeValue * 20) / 100;
    document.getElementById('total-save').innerText = totalSave;
    document.getElementById('total-remaining').innerText = '';

    console.log(totalSave)
})