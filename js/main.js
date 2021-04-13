// $(document).ready(function(){
//     $('#preloader').css({'animation': 'preloaderNone 2s 1', 'width': '0%', 'fontSize' : '0'})
// })
// |

let 
    images = document.images,
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    preloader = $('#preloader'),
    percentage = $('#loader');

   imageLoaded = () => {
        imagesLoadedCount++;
        percentage.text(( Math.floor( (100 / imagesTotalCount) * imagesLoadedCount )) + '%');
        
        if(imagesLoadedCount >= imagesTotalCount){
            setTimeout(() => {
                preloader.css({'animation': 'preloaderNone 2s 1', 'width': '0%', 'fontSize' : '0'})
                setTimeout(() => {
                    preloader.css('display', 'none')
                }, 2000);
            }, 2000);
            
           
        }
    }

for(let i = 0 ; i < imagesTotalCount; i++){
    imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
}

