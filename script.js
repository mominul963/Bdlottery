
document.addEventListener('DOMContentLoaded', () => {
    const results = [
        "First Prize: 784512",
        "Second Prize: 564879",
        "Third Prize: 334567"
    ];
    
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = "";
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultList.appendChild(li);
    });
});
