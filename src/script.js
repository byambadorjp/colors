let b = 0,ner,c=0;
      axios 
      .get(
            'https://api.giphy.com/v1/gifs/search?api_key=NptZhhwltiR6lI9tdXlwA40mvrAPW064&q=' + 'G'
      )
      .then(
            function(response){
                  for(i=0; i<response.data.data.length; i++){
                        var image = document.createElement('img');  
                        image.src = response.data.data[i].images.original.url;
                        image.setAttribute('class', 'zurag');
                        document.getElementsByTagName('div')[0].appendChild(image);
                        // document.getElementsByTagName('img')[i].onclick=()=>{
                        //     firebase.auth().onAuthStateChanged(function(user) {
                        //         if (user) {
                        //             ner = user.displayName;
                        //               db.ref('chat').push('gif' + ner + document.getElementsByTagName('img')[i-25].src);
                        //         } else {
                        //         }
                        //       });
      
                        // }
                  }
                //   returner();
            }
      )
const returner = () => {
    window.location.href = 'index.html';
}