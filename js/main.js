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
});
var table = '';
for(let i= 0;i<food.length;i++){
  table += `<tr">
  <td>${food[i].name}</td>
  <td><img class= "foodpicture" src="${food[i].img}" alt=""></td>
  <td>${food[i].price} บาท</td>
  <td>${food[i].cal} กิโลแคลอรี่</td>
</tr>`;
  }
  $("#contentfood").html(table);
function openmodal(){
  $("#modal-rand").css('display' , '');
random();
}
function opencook(){
  $("#modal-cook"+(m2+1)).css('display' , '');
}
function closecook(){
  $("#modal-cook"+(m2+1)).css('display' , 'none');
}
  function closemodal(){
    $("#modal-rand").css('display' , 'none');
}
var m2;
function random(){
  let m1 = Math.round( Math.random()*(food.length-1));
  m2  = m1;
  $("#modalimgrand").attr('src',food[m1].img);
$("#foodtitle").text("ชื่ออาหาร: " + food[m1].name);
$("#foodcal").text("ปริมาณแคลอรี่: " + food[m1].cal + " กิโลแคลอรี่");
}