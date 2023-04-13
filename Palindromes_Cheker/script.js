window.addEventListener('DOMContentLoaded', () => {
    const btnCliker = document.getElementById('btnChecker');
    const results = document.getElementById('confirmation');
    
    function wordChecker(wordToBeChecked) {
        return wordToBeChecked.split("").reverse().join('');
    }

    function btnClick() {
        const userWord = document.getElementById('userWord').value.trim();
        const userWordInReverser = wordChecker(userWord);

        if (userWord === userWordInReverser) {
            results.textContent = `Yes, "${userWord}" is a palindrome! Congrats 🎉            `;
        } else {
            results.textContent = `Sorry, "${userWord}" is not a palindrome. Word in reverse is: ${userWordInReverser}.`;
        }
    }

    btnCliker.onclick = btnClick;
});
