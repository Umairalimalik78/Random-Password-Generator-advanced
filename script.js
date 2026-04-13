document.getElementById('length').addEventListener('input', function () {
    document.getElementById('lengthValue').textContent = this.value;
});

['includeUppercase', 'includeLowercase', 'includeNumbers', 'includeSymbols'].forEach(id => {
    document.getElementById(id).addEventListener('click', function () {
        this.classList.toggle('active');
        this.dataset.state = this.classList.contains('active');
    });
});

document.getElementById('generate').addEventListener('click', function () {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('includeUppercase').classList.contains('active');
    const includeLowercase = document.getElementById('includeLowercase').classList.contains('active');
    const includeNumbers = document.getElementById('includeNumbers').classList.contains('active');
    const includeSymbols = document.getElementById('includeSymbols').classList.contains('active');

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    if (charset.length === 0) {
        document.getElementById('password').textContent = 'Select any character type!';
        document.getElementById('password').style.color = 'red';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').textContent = password;
});