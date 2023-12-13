var  food  = [{
    id:1,
    img: 'picture/food1.jpg',
    name:'ผัดกะเพราปลาหมึก',
    price:45,
    cal:495 ,
    type:'BestSeller'
  },
  {
    id:2,
    img: 'picture/food2.jpg',
    name:'ผัดกะเพราหมูกรอบ',
    price:40,
    cal:650 ,
    type:'Nearme'
  },
  {
    id:3,
    img: 'picture/food3.jpg',
    name:'ผัดพริกแกงไก่ถั่วฟักยาว',
    price:35,
    cal:298,
    type:'Nearme'
  },
  {
    id:4,
    img: 'picture/food4.jpg',
    name:'กุ้งผัดผงกะหรี่',
    price:70,
    cal:695 ,
    type:'Promotion'
  },
  {
    id:5,
    img: 'picture/food5.jpg',
    name:'ปูผัดผงกะหรี่',
    price:80,
    cal:746 ,
    type:'Promotion'
  },
  {
    id:6,
    img: 'picture/food6.jpg',
    name:'หมูทอดกระเทียมพริกสด',
    price:35,
    cal:525 ,
    type:'Nearme'
  },
  {
    id:7,
    img: 'picture/food7.jpg',
    name:'พะแนงไก่',
    price:40,
    cal:230 ,
    type:'BestSeller'
  },
  {
    id:8,
    img: 'picture/food8.jpg',
    name:'ทะเลผัดฉ่า',
    price:65,
    cal:320 ,
    type:'Promotion'
  },
  {
    id:9,
    img: 'picture/food9.jpg',
    name:'แกงเขียวหวานไก่',
    price:35,
    cal:240 ,
    type:'Nearme'
  },
  {
    id:10,
    img: 'picture/food10.jpg',
    name:'ต้มยำกุ้งน้ำข้น',
    price:40,
    cal:70 ,
    type:'Nearme'
  },
  {
    id:11,
    img: 'picture/food11.jpg',
    name:'มัสมั่นไก่',
    price:40,
    cal:325 ,
    type:'Promotion'
  },
  {
    id:12,
    img: 'picture/food12.jpg',
    name:'ไข่เจียวหมูสับ',
    price:25,
    cal:350 ,
    type:'BestSeller'
  },
  {
    id:13,
    img: 'picture/food13.jpg',
    name:'ผัดเปรี้ยวหวานหมู',
    price:35,
    cal:300 ,
    type:'Nearme'
  },
  {
    id:14,
    img: 'picture/food14.jpg',
    name:'ไข่พะโล้',
    price:35,
    cal:350 ,
    type:'Nearme'
  },
  {
    id:15,
    img: 'picture/food15.jpg',
    name:'กุ้งอบวุ้นเส้น',
    price:65,
    cal:300 ,
    type:'Promotion'
  },
  {
    id:16,
    img: 'picture/food16.jpg',
    name:'ราดหน้าหมู',
    price:35,
    cal:405,
    type:'BestSeller'
  },
  {
    id:17,
    img: 'picture/food17.jpg',
    name:'ข้าวหมกไก่',
    price:45,
    cal:551 ,
    type:'Nearme'
  },
  {
    id:18,
    img: 'picture/food18.jpg',
    name:'ข้าวผัดปู',
    price:50,
    cal:510 ,
    type:'Promotion'
  },
  {
    id:19,
    img: 'picture/food19.jpg',
    name:'สุกี้แห้งหมู',
    price:40,
    cal:328,
    type:'BestSeller'
  },
  {
    id:20,
    img: 'picture/food20.jpg',
    name:'ผัดมักกะโรนีกุ้ง',
    price:45,
    cal:420 ,
    type:'Promotion'
  },
  {
    id:21,
    img: 'picture/food21.jpg',
    name:'ก๋วยเตี๋ยวคั่วไก่ไข่อบ',
    price:50,
    cal:506 ,
    type:'Promotion'
  },
  {
    id:22,
    img: 'picture/food22.jpg',
    name:'ส้มตำไทย',
    price:35,
    cal:120 ,
    type:'Nearme'
  },
  {
    id:23,
    img: 'picture/food23.jpg',
    name:'ต้มแซ่บกระดูกอ่อน',
    price:35,
    cal:130 ,
    type:'Nearme'
  },
  {
    id:24,
    img: 'picture/food24.jpg',
    name:'ผัดไทยกุ้งสด',
    price:40,
    cal:486 ,
    type:'Nearme'
  },
  {
    id:25,
    img: 'picture/food25.jpg',
    name:'ผัดซีอิ้ว',
    price:35,
    cal:520 ,
    type:'BestSeller'
  },
  {
    id:26,
    img: 'picture/food26.jpg',
    name:'โจ๊กหมู',
    price:25,
    cal:250 ,
    type:'Nearme'
  },
  {
    id:27,
    img: 'picture/food27.jpg',
    name:'สปาเก็ตตี้ขี้เมาทะเล',
    price:65,
    cal:370 ,
    type:'Promotion'
  },
  {
    id:28,
    img: 'picture/food28.jpg',
    name:'ข้าวหมูแดง',
    price:40,
    cal:540 ,
    type:'BestSeller'
  },
  {
    id:29,
    img: 'picture/food29.jpg',
    name:'ลาบหมู',
    price:35,
    cal:130 ,
    type:'Nearme'
  },
  {
    id:30,
    img: 'picture/food30.jpg',
    name:'ข้าวมันไก่ทอด',
    price:50,
    cal:695 ,
    type:'BestSeller'
  }
  ];
$(document).ready(function(){
    var menu = $(".left-sidebar");
    var side = $(".side");
    var line = $(".line");
    var close = $(".close");
    var foodm = '';
    var menuopen;       
    function openMenu(){
        menu.css("left","0%");
        line.css("background" , "#111");
        menuopen = true;
    }
    function closeMenu(){
        menu.css("left","-20%");
        line.css("background" , "#bcad90");
        menuopen = false;
    }
    function toggleMenu(){
        if(menuopen){
            closeMenu();
        }
        else{
            openMenu();
        }
    }
    side.on({
        mouseenter: function() {
            openMenu();
        }
    });
close.on({
    click:function(){
        toggleMenu();
    }
});  
    for(let i =0;i<food.length;i++){
     foodm += `<div onclick="openfood(${(i)})" class="dashboard-card ${food[i].type}">
              <img class= "card-image" src="${food[i].img}">
              <div class="card-detail">
                  <h4>${food[i].name} <span>${food[i].price} บาท</span></h4>
                  <p style="font-size: 14px;" >ปริมาณแคลอรี่ในอาหาร: ${food[i].cal} กิโลแคลอรี่ต่อจานหรือชาม<p>
                  <p class="card-time"><span class="fas fa-clock"></span>15-30นาที</p>
                  <button class = "butt2"><span class="fas fa-cart-plus"></span></button>
              </div>
              </div>`;
              }
              $("#foodlist").html(foodm);
});
function searchfood(param) {
  $(".dashboard-card").css('display' , 'none');
  if(param == 'AllFood'){
    $(".dashboard-card").css('display' , '');
  }

 else{
    $("."+ param).css('display' , '');
  }
}
function searchsomething(elem) {
    var value = $('#'+elem.id).val()
foodm = '';
    for (let i = 0; i < food.length; i++) {
        if( food[i].name.includes(value) ) {
            foodm += `<div onclick="openfood(${(i)})" class="dashboard-card ${food[i].type}">
            <img class= "card-image" src="${food[i].img}">
            <div class="card-detail">
                <h4>${food[i].name} <span>${food[i].price} บาท</span></h4>
                <p style="font-size: 14px;" >ปริมาณแคลอรี่ในอาหาร: ${food[i].cal} กิโลแคลอรี่ต่อจานหรือชาม<p>
                <p class="card-time"><span class="fas fa-clock"></span>15-30นาที</p>
                <button class = "butt2"><span class="fas fa-cart-plus"></span></button>
            </div>
            </div>`;
        }
    }
    if(foodm == '') {
        $("#foodlist").html(`<p>Not found product</p>`);
    } else {
        $("#foodlist").html(foodm);
    }

}
var productindex = 0;
function openfood(index){
    productindex = index;
    console.log(productindex);
$("#modaldetailshop").css('display' , '');
$("#modal-img").attr('src',food[productindex].img);
$("#modal-name").text(food[productindex].name);
$("#modal-price").text(food[productindex].price + " บาท");
$("#modal-cal").text("ปริมาณแคลอรี่ในอาหาร: "+ food[productindex].cal + " กิโลแคลอรี่ต่อจานหรือชาม");
}
function closemodal(){
    $("#modaldetailshop").css('display' , 'none');
    $("#modal-cart").css('display' , 'none');
}
var cart=  [];
function addcart(){
    var pass = true;
    for(let i=0;i<cart.length;i++){
        if(productindex == cart[i].index){
            cart[i].count++;
            pass = false;
        }

    }
    if(pass){
        var obj = {
            index:productindex,
            id:food[productindex].id,
            name:food[productindex].name,
            price:food[productindex].price,
            img:food[productindex].img,
            count:1
        };
        cart.push(obj);
    }
    alert("เพิ่มรายการ "+ food[productindex].name + " ในตะกร้าสำเร็จ");
}
function opencart(){
    $("#modal-cart").css('display' , '');
    rendercart();
}
var totalprice = 0;
    var deliveryprice = 27;
    var justprice = 0;
function rendercart(){
    var foodcart = '';
    if(cart.length > 0){
        for(let i =0;i<cart.length;i++){
            foodcart +=`<div class="cartlist-items">
            <div class="cartlist-left">
             <img src="${cart[i].img}" alt="">
             <div class="cartlist-detail">
              <p  style="font-size: 16px;">${cart[i].name}</p>
              <p  style="font-size: 12px;">${cart[i].price} บาท</p>
             </div>
            </div>
            <div class="cartlist-right">
              <div onclick="deitem('-',  ${i})" class="btnc"><p class="fas fa-minus-circle"></p></div>
              <p id="count-item${i}" style="margin: 0px 20px;">${cart[i].count}</p>
              <div onclick="deitem('+',  ${i})" class="btnc"><p class="fas fa-plus-circle"></p></div>
            </div>
          </div>`
          if(i == 0){
            totalprice = cart[i].count * cart[i].price;
          } 
          else{
            totalprice += cart[i].count * cart[i].price;
          }
        }
        document.getElementById("totalpriceproduct").innerText = totalprice+ " บาท";
        document.getElementById("delivery").innerText = deliveryprice+" บาท";
        document.getElementById("total").innerText =(totalprice+deliveryprice) +" บาท"
        $("#mycart").html(foodcart)
    }
    else{
        $(".cartlist").html(`<p>Not found product</p>`);
    }
}
function place(){
    alert("บันทึกข้อมูลเรียบร้อย")
    closemodalplace();
}
function deitem(action,  index){
    if(action == '+'){ 
        cart[index].count++;
        totalprice += cart[index].price
        $("#count-item"+index).text(cart[index].count)
        document.getElementById("totalpriceproduct").innerText = totalprice + " บาท";
        document.getElementById("delivery").innerText = deliveryprice+" บาท";
        document.getElementById("total").innerText =(totalprice+deliveryprice) +" บาท"    
    }
    else if(action == '-'){
        if(cart[index].count > 0){
            cart[index].count--;
            totalprice -= cart[index].price
            $("#count-item"+index).text(cart[index].count)
        if(cart[index].count <= 0){
            cart.splice(index,1)
            rendercart()
            deliveryprice = 0
    }
}
        document.getElementById("totalpriceproduct").innerText = totalprice + " บาท";
        if(totalprice == 0){
        document.getElementById("delivery").innerText = deliveryprice+" บาท";
        }
        document.getElementById("total").innerText =(totalprice+deliveryprice) +" บาท"
    }
}
function reset(){
    totalprice=  0;
    deliveryprice=0;
    cart.splice(0,cart.length)
    document.getElementById("totalpriceproduct").innerText = totalprice + " บาท";
    document.getElementById("delivery").innerText = deliveryprice+" บาท";
    document.getElementById("total").innerText =(totalprice+deliveryprice) +" บาท"
}
function successcart(){
    alert("สั่งซื้อสำเร็จ กรุณารอการจัดส่ง");
   closemodal();
   reset();
}
function cartplaceopen(){
  $("#modal-place").css('display' , '');
}
function closemodalplace(){
  $("#modal-place").css('display' , 'none');
}