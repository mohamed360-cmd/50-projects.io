window.addEventListener("DOMContentLoaded",()=>{
    let btnGetMemes=document.getElementById('btnGetMemes');
    let MainContainer=document.getElementById("MainContainer")
    let loader=document.querySelector('.loader')
    let loaderonatiner=document.querySelector('.LoaderConatiner')
    const memes= async()=>
    {
        let response =await fetch(" https://meme-api.com/gimme/12")
        let data=await response.json();
        console.log(data)
        loader.style.display="block"
        let memes=data.memes.map((meme)=>{
             let MemeContainer=document.createElement('div');
             let title=document.createElement('p')
             let Photo=document.createElement('img')
             let Author=document.createElement('p')
             let sub=document.createElement('p')
             title.textContent=`Title:${meme.title}`;
             Photo.src=meme.preview[2]

             title.classList.add("MemeTitle")
             Photo.classList.add("MemePhoto");
             Author.classList.add("AuthorName");
             sub.classList.add("SubReddit")
             Author.textContent=`Author:${meme.author}`
             sub.textContent=`SubReddit:${meme.subreddit}`
            MemeContainer.appendChild(title)
            MemeContainer.appendChild(Photo)
            MemeContainer.appendChild(Author)
            MemeContainer.appendChild(sub)
            MemeContainer.classList.add('memeContainer');
            return MemeContainer;
        })
        loader.style.display='none'
        loaderonatiner.style.display='none'
        memes.forEach(MemeContainer => {
            MainContainer.appendChild(MemeContainer);
        });
       
    }
   
    btnGetMemes.addEventListener('click',memes)
    memes()
})