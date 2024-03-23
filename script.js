
/*slider ảnh-----------------------------------*/

const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
console.log (imgNuber.length)/* thích j in ra màn hình đó (in ra một chuỗi)s*/
let index = 0;/* khai báo 1 giá trị là số nguyên hay thực.....*/

/* nối chuỗi: let x = 16 +"volvo";  --> kết quả 16volvo  */
rightbtn.addEventListener ("click", function(){
    index = index+1
    if(index>imgNuber.length-1){/*length-1=2;do tíh bắt đầu bằng 0*/
        index=0  /*index sẽ =0 nếu nó lớn hơn */
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click",function(){
    index = index-1
    if(index<0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right =index *100+"%"
})

//slider tiêu đề------------------------------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberLi.forEach(function(image,index){
    image.addEventListener ("click", function(){
    
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"//dịch chuyển theo hình 
        
    })
})


//-----------slider product--------------------------
const rightbtntwo = document.querySelector('.fa-chewron-right-two')
const leftbtntwo = document.querySelector('.fa-chewron-left-two ')
const imgnuber = document.querySelectorAll('slider-product-one-container-items')
//console.log(rightbtntwo)
//console.log( leftbtntwo )
rightbtntwo.addEventListener ("click", function(){
    index = index+1
    if(index=imgNuber.length-1){/*length-1=2;do tíh bắt đầu bằng 0*/
   
   }
    document.querySelector(".slider-product-one-container-items-container").style.right = index *100+"%"
})
leftbtntwo.addEventListener ("click",function(){
    index = index-1
    if(index=0){
       
    }
    document.querySelector(".slider-product-one-container-items-container").style.right =index *100+"%"
})