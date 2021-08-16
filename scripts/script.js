window.onload = function () {
    //Verification if javascript is enabled
    document.querySelector('body').classList.remove('no-js');
    if (!(document.querySelector('body').classList.contains('no-js')))
        document.querySelector('#jsSpan').classList.add('d-none');

    let textInput = document.querySelector('#floatingTextarea');//textarea
    let counterNoSpaces = document.querySelector('#noSpaces');//counter without spaces
    let counterWithSpaces = document.querySelector('#includingSpaces');//counter including spaces
    let wordsCounter = document.querySelector('#words');//words
    textInput.addEventListener('input', function () {
        //Always that the user input something, starts the counter
        counterNoSpaces.textContent = noSpaces(this.value);
        counterWithSpaces.textContent = withSpaces(this.value);
        wordsCounter.textContent = words(this.value);

        function noSpaces(text) {
            let arrayWords = text.split(' ');//returns text no spaces
            return (arrayWords.join('')).length;// returns length of text without spaces
        }

        function withSpaces(text) {
            return text.length; // returns length of text including spaces
        }

        function words(text) {
            let arrayWords = text.split(' ');//returns text no spaces
            arrayWords = arrayWords.filter(function (el) {
                return el; // remove ghost elements
            })
            if (text.length == 0)
                return text.length;
            else
                return arrayWords.length;// returns the quantity of words
        }
    });
}