// Mantenere questa dichiarazione di funzione
const process = () => {
	/*
	Qui dovrai scrivere il tuo algoritmo
	*/
	let goodWords = '<h3>Valid passwords are:</h3>';
  function checkPalindrome(str) {
    let l = str.length;
    for (let i = 0; i < l/2; i++) {
     if (str[i] !== str[l - 1 - i]) {
      return false;
     }
    }
    return true;
   }
	function countVowelsRegex(text) {
		let matchingInstances = text.match(/[aeiou]/gi);
    return true ? matchingInstances.length >= 3 : false
	}
	for (let i = 0; i < words.length; i++) {
		if (words[i] && words[i].length >= 5  && checkPalindrome(words[i]) && countVowelsRegex(words[i])) {
			goodWords += '<span>' + words[i] + '</span><br><hr class="red"/><br>';
		}
	}
	// Dopo aver analizzato tutte le parole, quelle che hanno superato
	// i criteri, vanno stampate nella pagina HTML, una per ogni riga
	document.getElementById("response").innerHTML = goodWords;
};