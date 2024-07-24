let dog = document.getElementById('itemList');
let img =document.getElementById('img');
const breedList =()=>{
 
    fetch('https://dog.ceo/api/breeds/list/all').then((res)=>{
        return res.json();
    }).then((list)=>{
    console.log(list.message)

    let listMag = list.message;

    for(const key in listMag ){
        if(listMag[key].length === 0){
            // console.log(key);
            dog.innerHTML+=`<li onclick="return imageList('${key}')">${key}</li>`;
        }
        else {
            let subList = `<ul class="dropdown-menu">`;
            listMag[key].forEach(sub => {
                subList += `<li>
                            <a href="javascript:void(0)">
                                <span>${sub}</span>
                            </a>
                        </li>`
            });
            subList += `</ul>`;
            itemList.innerHTML += `<li class="item-list" onclick="return imageList('${key}')"><a href="javascript:void(0)" class="dropdown pos-relative act">${key}</a> ${subList}</li>`
        }
            
    }
    }).catch((err)=>{
        console.log("err",err);
    }) 
}
breedList();

const imageList =(breed)=>{
    
    fetch(`https://dog.ceo/api/breed/${breed}/images`).then((res)=>{
        return res.json();
    }).then((image)=>{
        const imgList = image.message;
        img.innerHTML="";
        imgList.forEach((imageUrl) => {
           img.innerHTML+=` 
           <div class="col-4">
            <img src="${imageUrl}" alt="img"  width="100%" height="100%">
          </div>`; 
        });


    }).catch((err)=>{
        console.log("err",err);
    }) 

}