window.addEventListener("DOMContentLoaded",()=>{
    let btnGenerate=document.getElementById('btngenerate');
    let Author=document.getElementById('Author');
    let Category=document.getElementById('Qcategory');
    let QuoteArea=document.getElementById("QuoteArea")
    let tags=document.getElementById('tags');
    let tweetButton=document.getElementById('twitter-share-button')
    const selectCategory=document.getElementById('selectCategory');
    const categories = [
        'Generalage','alone',
        'amazing',
        'anger',
        'architecture',
        'art',
        'attitude',
        'beauty',
        'best',
        'birthday',
        'business',
        'car',
        'change',
        'communications',
        'computers',
        'cool',
        'courage',
        'dad',
        'dating',
        'death',
        'design',
        'dreams',
        'education',
        'environmental',
        'equality',
        'experience',
        'failure',
        'faith',
        'family',
        'famous',
        'fear',
        'fitness',
        'food',
        'forgiveness',
        'freedom',
        'friendship',
        'funny',
        'future',
        'god',
        'good',
        'government',
        'graduation',
        'great',
        'happiness',
        'health',
        'history',
        'home',
        'hope',
        'humor',
        'imagination',
        'inspirational',
        'intelligence',
        'jealousy',
        'knowledge',
        'leadership',
        'learning',
        'legal',
        'life',
        'love',
        'marriage',
        'medical',
        'men',
        'mom',
        'money',
        'morning',
        'movies',
        'success'
      ];
      for (let i = 0; i < categories.length; i++) {
        const option = document.createElement('option');
        option.textContent = categories[i];
        option.value = i + 1;
        selectCategory.add(option);
        selectCategory.appendChild(option);
      }
      let category1=document.getElementById('selectCategory').value
      console.log(category1)
      const whenTheBtnIsClicked=async ()=>{
        let response =await fetch(('https://api.quotable.io/random'))
        //the data
        let data =await response.json();
        console.log(data)
        QuoteArea.textContent=`"${data.content}"`
        Author.textContent=data.author
        tags.textContent=`#️⃣${data.tags[0]}`
      }
      function tweet(){
        window.open(`https://twitter.com/intent/tweet?text=${QuoteArea.textContent} #${tags.textContent}`,'Tweet Window','width=600,height=300')
      }
      tweetButton.addEventListener('click',tweet)
    btnGenerate.addEventListener('click',whenTheBtnIsClicked)
})