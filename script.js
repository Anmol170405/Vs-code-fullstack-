let balance = 1000;

function updateUI() {
  document.getElementById('balance').textContent = `$${balance}`;
  document.getElementById('amount').value = '';
  document.getElementById('message').textContent = '';
}

function getAmount() {
  const amount = Number(document.getElementById('amount').value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById('message').textContent = 'Enter a valid amount!';
    return null;
  }
  return amount;
}

function deposit() {
  const amount = getAmount();
  if (amount !== null) {
    balance += amount;
    updateUI();
  }
}

function withdraw() {
  const amount = getAmount();
  if (amount !== null) {
    if (amount <= balance) {
      balance -= amount;
      updateUI();
    } else {
      document.getElementById('message').textContent = 'Insufficient balance!';
    }
  }
}
