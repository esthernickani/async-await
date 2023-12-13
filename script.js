document.addEventListener("DOMContentLoaded", function() {
    multipleNumUl = document.querySelector('.multiple_number_facts');
    factsUl = document.querySelector('.facts_for_a_number');

    let multipleNumberFactsUrl = 'http://numbersapi.com/1,5,10,15/trivia?json'
    
    async function getMultNumFacts() {
        response = await axios.get(multipleNumberFactsUrl)
        for (facts in response.data) {
            li = document.createElement('li');
            li.textContent = response.data[facts]
            multipleNumUl.appendChild(li)
        }
    }

    getMultNumFacts()

    async function factsFor7() {
        let factFor7Url = 'http://numbersapi.com/7/trivia?json'

        for (let i = 0; i < 4; i++) {
            response = await axios.get(factFor7Url)
            li = document.createElement('li');
            li.textContent = response.data['text']
            factsUl.appendChild(li)
        }
    }

    factsFor7()
})