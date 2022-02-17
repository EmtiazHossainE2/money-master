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
function error() {
    document.getElementById('total-expense').innerText = 'Unexpected value ';
    document.getElementById('total-balance').innerText = 'Nothing to show';
}

//calculate cost 
document.getElementById('calculate-cost').addEventListener('click', function () {
    const inputField = document.getElementsByClassName('input-field');
    for (const element of inputField) {
        //alert empty field
        if (element.value == '') {
            alert('Opps !! Give me  value')
            error();
            break
        }
        //alert negetive value
        else if (element.value < 0) {
            alert('Enter positive value')
            error()
            break
        }
        else {
            const incomeValue = parseFloat(incomeInput.value);
            if (incomeValue < getValue()) {
                document.getElementById('total-expense').innerText = 'Low income,Earn more,Expense more ';
                document.getElementById('total-balance').innerText = 'Nothing to show';
            }
            else {
                document.getElementById('total-expense').innerText = getValue();
                const balance = incomeValue - getValue();
                document.getElementById('total-balance').innerText = balance;
            }
        }
    }
})

//calculate save & remaining 
document.getElementById('calculate-save').addEventListener('click', function () {
    const incomeValue = parseFloat(incomeInput.value);
    const balance = incomeValue - getValue()
    if (balance == NaN) {
        document.getElementById('total-remaining').innerText = 'Unexpected value '
    }
    if (incomeValue < getValue()) {
        document.getElementById('total-save').innerText = 'Nothing To Save';
        document.getElementById('total-remaining').innerText = 'Earn First';
    }
    else {
        const totalSave = (incomeValue * 20) / 100;
        if (balance < totalSave) {
            document.getElementById('total-save').innerText = ' Balace is low nothing to save';
            document.getElementById('total-remaining').innerText = balance;
        }
        else {
            document.getElementById('total-save').innerText = totalSave;
            document.getElementById('total-remaining').innerText = balance - totalSave;
        }
    }
})