

const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let posts = [

     post_1 = {
          id : 1 ,
          contenuto : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptate deleniti ex?",
          avatar : "Link-sbagliato-per-bonus",
          immagine : "https://unsplash.it/300/150?image=",
          autore : "Philip Mangione" ,
          numeroLikes : 80 ,
          dataCreazione :`${months[d.getMonth()+1]}`,
     },

     post_2 = {
          id : 2 ,
          contenuto : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti pariatur explicabo. Quis, aperiam molestiae! Laborum laboriosam neque dolorum molestias odit accusamus quidem quo!",
          avatar : "https://placebeard.it/50x50",
          immagine : "https://picsum.photos/300/150",
          autore : "Sofia Perlari" ,
          numeroLikes : 150 ,
          dataCreazione : `${months[d.getMonth()+2]}`,
     },

     post_3 = {
          id : 3 ,
          contenuto : "Placeat corrupti pariatur explicabo. Laborum laboriosam neque dolorum molestias odit accusamus quidem quo!",
          avatar : "https://www.fillmurray.com/50/50",
          immagine : "https://placebear.com/300/150",
          autore : "Diego Denuccio",
          numeroLikes : 15 ,
          dataCreazione : `${months[d.getMonth()-1]}`,
     },

];






let = selezioneContainer = document.querySelector(".container")
console.log(selezioneContainer)

for (let i=0; i<posts.length; i++){

     let singoloPost = posts[i]

     var myStr = posts[i].autore;
     var matches = myStr.match(/\b(\w)/g);
     matches = matches.join('');
         

     selezioneContainer.insertAdjacentHTML('beforeend', `<div class="card w-50 mx-auto mb-5">
     <div class="card-body">
          <div class="d-flex">
               <img src="${singoloPost.avatar}" class="h-25 rounded-circle me-4" alt="${matches}">
               <div>
                    <h5 class="card-title">${singoloPost.autore}</h5>
                    <p class="card-text"><small class="text-muted">${singoloPost.dataCreazione}</small></p>
               </div>
          </div>
          
          <p class="card-text">${singoloPost.contenuto}</p>
          
     </div>
     <img src="${singoloPost.immagine}" class="card-img-bottom h-50 p-3" alt="...">
</div>`)
     
     
     
}












