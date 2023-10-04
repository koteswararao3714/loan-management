let currentUser = null;

let user = [
{ email: 'user1@example.com', role: 'borrower' },
{ email: 'user2@example.com', role: 'lender' },
{ email: 'admin@example.com', role: 'admin' }]; 
// Simulated user data (replace with actual user data)
// Simulated function to check if email exists in the user database
function isEmailRegistered(email) {
  // Simulated user data (replace with your actual user data or database interaction)
  const users = [
    { email: 'user1@example.com', role: 'borrower' },
    { email: 'user2@example.com', role: 'lender' },
    { email: 'admin@example.com', role: 'admin' }
  ];

  return users.some(user => user.email == email);
}

function login() {
  const email = document.getElementById('email').value;

  const isRegistered = isEmailRegistered(email);

  if (isRegistered) {
    const use = user.find(user => user.email === email);
    currentUser = use;
    if (use.role === 'admin') {
      window.open("admin.html","_blank");
    }else if (use.role === 'borrower'){
      window.open("borrower.html","_blank");
    }else{
      window.open('lender.html',"_blank");
    }
  } else {
    alert('User not found. Please register.');
  }
}


function register() {
  const email = document.getElementById('email').value;
  window.open('login.html');
}

function requestLoan() {
  // Logic for loan request
  console.log('Loan requested.');
}

function viewLoans() {
  // Logic to view existing loans
  console.log('Viewing existing loans.');
}

function viewAllTransactions() {
  // Logic to view all transactions (for admin)
  console.log('Viewing all transactions.');
}
