var n = 0
var duration = 40
setTimeout(function self(){
  n++
  var code = result.slice(0,n)
  var html = Prism.highlight(code, Prism.languages.css, 'css')
  $('#displayCode>.language-css').html(html) 
  $('#displayCss').html(result.slice(0,n))
  $('#displayCode').scrollTop(displayCode.scrollHeight)
  if(n<result.length){
    setTimeout(self,duration)
  }else{
    let lastResult = result.slice(0,n)
    writePaper()
    writeCat(lastResult)
  }
},duration)

$('.button').on('click','button',speed)

function writePaper(){
  let cv = `
  你好
  `
  let n = 0
  let timer1 = setInterval(()=>{
    n++
    let result = cv.slice(0,n)
    $('#paper>#cv').html(result)
    if(n>=cv.length){
      window.clearInterval(timer1)
    }
  },60)
}

function speed(target){
  let speed = $(target.currentTarget).attr('data-speed')
  if(speed === '1'){
    if(duration >= 10){
      duration = duration - 10
    }
  }else if(speed === '-1'){
    if(duration < 100){
      duration = duration + 10
    }
  }else{
    window.location.href = 'https://xiaohuaye.github.io/cv/cv'
  } 
  $('#displaySpeed').text(100 - duration)
}

function writeCat(lastResult){
  n = 0
  p = 0
  $('#drowCat').append($(result2))
  setTimeout(function self1(){
    n++ 
    p++
    let code = lastResult + result1.slice(0,n)
    let html = Prism.highlight(code, Prism.languages.css, 'css')
    $('#displayCode>.language-css').html(html) 
    $('#displayCss').html(lastResult + result3.slice(0,5*n))
    $('#displayCode').scrollTop(displayCode.scrollHeight)
    if(n<result1.length){
      setTimeout(self1,duration)
    }else{
      writePaper()
    }
  },duration)
}

var result = `
/*面试官你好，我是张露
这是一篇会动的简历

只有文字好像有点单调
加点代码进去吧

先来改改样式吧*/

body{
  font-size: 16px;
  background-color:#DEE1E6;
}

/* 代码似乎需要点颜色*/

.token.property {
  color: #905;
}
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}

/* 来点立体感 */

#displayCode {
  transform: rotatey(6deg);
  animation-name: dd;
  animation-duration: 1s;
  width: 30%;
}
/*有点无聊，画个猫咪老师吧*/
/*来张白纸吧*/

.paper{
  display: block;
  transform: rotatey(360deg);
}

`

var result1 =`
/*开始画了，请看右边*/
/**/

.face{
  border: 2px solid black;
  width: 60vw;
  height: 50vw;
  border-radius: 20vw/30vw;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background:white;
}

.mouse{
  width: 8vw;
  height: 14vw;
  position: absolute;
  left:51%;
  top:72.5%;
  transform:translateX(-50%);
  overflow: hidden;
}

.color{
  width:30vw;
  height:25vw;
  position: absolute;
  left:50%;
  transform: translatex(-50%);
  border-radius: 0 0 50% 50%;
}

.eye-left{
  border: 2px solid black;
  height: 14vw;
  width: 12vw;
  position: absolute;
  bottom: 20%;
  left: 10%;
  border-radius: 50%/40%;
  border-bottom: transparent;
  border-right: transparent;
  border-left: transparent; 
  transform: rotateZ(7deg);
  overflow:hidden;
}

.eye-right{
  border: 2px solid black;
  height: 14vw;
  width: 12vw;
  position: absolute;
  bottom: 20%;
  right: 10%;
  border-radius: 50%/40%;
  border-bottom: transparent;
  border-right: transparent;
  border-left: transparent; 
  transform: rotateZ(-7deg);
  overflow: hidden;
}

.nose{
  width: 8vw;
  height: 3vw;
  position: absolute;
  left:50%;
  top:65%;
  transform:translateX(-50%);
  overflow: hidden;
}

.left-lip{
  width: 8vw;
  height: 8vw;
  position: absolute;
  left:50%;
  top:66.5%;
  transform:translateX(-100%);
  overflow: hidden;
}

.right-lip{
  width: 8vw;
  height: 8vw;
  position: absolute;
  left:50%;
  top:66.5%;
  overflow: hidden;
}

.left-ear{
  position: absolute;
  left: -4%;
  top: -10%;
  width:14vw;
  height:14vw;
  overflow: hidden;
}

.right-ear{
  position: absolute;
  right: -4%;
  top: -10%;
  width:14vw;
  height:14vw;
  overflow: hidden;
}

.spot{
  width: 5vw;
  height: 5vw;
  position:absolute;
  top:20vw;
  left: 1vw;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(-84deg);
  z-index: -3;
}
`

var result2 = `
<div class="wrapper">
<div class="face">
  <div class="mouse"></div>
  <div class="color"></div>
  <div class="eye-left"></div>
  <div class="eye-right"></div>
  <div class="nose"></div>
  <div class="left-lip"></div>
  <div class="right-lip"></div>
  <div class="left-ear"></div>
  <div class="right-ear"></div>
  <div class="spot2"></div>
  <div class="spot1"></div>
  <div class="spot"></div>
  <div class="spot3"></div>
  <div class="spot4"></div>
  <div class="spot5"></div>
  <div class="spot6"></div>
  <div class="spot7"></div>
  <div class="spot8"></div>
  <div class="spot9"></div> 
</div>
</div>
`
//5px = 1vw
var result3 = `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.face{
  border: 2px solid black;
  width: 300px; 
  height: 250px; 
  border-radius: 20vw/30vw;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background:white;
}
.wrapper{
  height: 100vh;
  position:relative;
}
.color{
  width:150px;
  height:125px;
  position: absolute;
  left:50%;
  transform: translatex(-50%);
  border-radius: 0 0 50% 50%;
}
.color::before{
  content:'';
  width:75px;
  height:125px;
  position: absolute;
  border-bottom-right-radius: 80%;
  background: #F4AD6B;
  transform: translateX(99%)
}
.color::after{
  content:'';
  width:75px;
  height:125px;
  position: absolute;
  border-bottom-left-radius: 80%;
  background: #7A7B76;
}
.eye-left{
  border: 2px solid black;
  height: 70px;
  width: 60px;
  position: absolute;
  bottom: 20%;
  left: 10%;
  border-radius: 50%/40%;
  border-bottom: transparent;
  border-right: transparent;
  border-left: transparent; 
  transform: rotateZ(7deg);
  overflow:hidden;
}
.eye-left:before{
  content: '';
  background: black;
  height: 20px;
  width: 15px;
  position: absolute;
  border-radius: 50%;
  bottom: 74%;
  left: 40%;
  
}
.eye-left:after{
  content: '';
  height: 70px;
  width: 70px;
  border:1px solid black;
  position: absolute;
  border-radius: 50%/20%;
  bottom: -30%;  
  left: -3%
}
.eye-right{
  border: 2px solid black;
  height: 70px;
  width: 60px;
  position: absolute;
  bottom: 20%;
  right: 10%;
  border-radius: 50%/40%;
  border-bottom: transparent;
  border-right: transparent;
  border-left: transparent; 
  transform: rotateZ(-7deg);
  overflow: hidden;
}
.eye-right:before{
  content: '';
  background: black;
  height: 20px;
  width: 15px;
  position: absolute;
  border-radius: 50%;
  bottom: 74%;
  right: 40%;
}
.eye-right:after{
  content: '';
  height: 70px;
  width: 70px;
  border:1px solid black;
  position: absolute;
  border-radius: 50%/20%;
  bottom: -30%;  
  right: -3%
}
.nose{
  width: 40px;
  height: 15px;
  position: absolute;
  left:50%;
  top:65%;
  transform:translateX(-50%);
  overflow: hidden;
}
.nose:before{
  position: absolute;
  left: 50%;
  transform:translateX(-50%);
  top: -80%;
  content:'';
  width: 30px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
}
.left-lip{
  width: 40px;
  height: 40px;
  position: absolute;
  left:50%;
  top:66.5%;
  transform:translateX(-100%);
  overflow: hidden;
}
.left-lip:before{
  position: absolute;
  left: 100%;
  transform:translateX(-100%);
  top: -40%;
  content:'';
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
}
.right-lip{
  width: 40px;
  height: 40px;
  position: absolute;
  left:50%;
  top:66.5%;
  overflow: hidden;
}
.right-lip:before{
  position: absolute;
  top: -40%;
  content:'';
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
}
.mouse{
  width: 40px;
  height: 70px;
  position: absolute;
  left:51%;
  top:72.5%;
  transform:translateX(-50%);
  overflow: hidden;
}
.mouse:before{
  position: absolute;
  top: -40%;
  content:'';
  width: 35px;
  height: 70px;
  border: 1px solid black;
  border-radius: 50%;
  background: #E99A96;
}
.left-ear{
  position: absolute;
  left: -4%;
  top: -10%;
  width:70px;
  height:70px;
  overflow: hidden;
}
.left-ear:before{
  content: '';
  width:70px;
  height:70px;
  border: 1px solid black;
  border-radius: 5px 70px;
  position: absolute;
  left: 5px;
  top: 10px;
  background: white;
}
.right-ear{
  position: absolute;
  right: -4%;
  top: -10%;
  width:70px;
  height:70px;
  overflow: hidden;
}
.right-ear:before{
  content: '';
  width:70px;
  height:70px;
  border: 1px solid black;
  border-radius: 70px 5px;
  position: absolute;
  right: 5px;
  top: 10px;
  background: white;
}
.spot{
  width: 25px;
  height: 25px;
  position:absolute;
  top:100px;
  left: 5px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(-84deg);
  z-index: -3;
}
.spot:before{
  content: '';
  width: 25px;
  height: 25px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}
.spot1{
  width: 25px;
  height: 25px;
  position:absolute;
  top:90px;
  left: 10px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(-84deg);
  z-index: -2;
}
.spot1:before{
  content: '';
  width: 50px;
  height: 50px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}

.spot2{
  width: 25px;
  height: 25px;
  position:absolute;
  top:80px;
  left: 15px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(-84deg);
}
.spot2:before{
  content: '';
  width: 50px;
  height: 50px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}

.spot{
  width: 25px;
  height: 25px;
  position:absolute;
  top:100px;
  left: 5px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(-84deg);
  z-index: -3;
}
.spot:before{
  content: '';
  width: 50px;
  height: 50px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}



.spot3{
  width: 25px;
  height: 25px;
  position:absolute;
  top:100px;
  right: 5px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(84deg);
  z-index: -3;
}
.spot3:before{
  content: '';
  width: 25px;
  height: 25px;
  top:-2.5px;
  right: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}

.spot4{
  width: 25px;
  height: 25px;
  position:absolute;
  top:90px;
  right: 10px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(84deg);
  z-index: -2;
}
.spot4:before{
  content: '';
  width: 50px;
  height: 50px;
  top:-2.5px;
  right: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}

.spot5{
  width: 25px;
  height: 25px;
  position:absolute;
  top:80px;
  right: 15px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(84deg);
}
.spot5:before{
  content: '';
  width: 50px;
  height: 50px;
  top:-2.5px;
  right: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}

.spot3{
  width: 25px;
  height: 25px;
  position:absolute;
  top:100px;
  right: 5px;
  border: 1px solid red;
  border-radius: 20%/50%;
  background:red;
  transform: rotateZ(84deg);
  z-index: -3;
}
.spot3:before{
  content: '';
  width: 50px;
  height: 50px;
  top:-2.5px;
  right: -2.5px;
  position:absolute;
  border-radius: 50%;
  background:white;
  z-index: -2;
}


.spot6{
  width: 10px;
  height: 40px;
  position:absolute;
  top:140px;
  left: 35px;
  border: 1px solid red;
  border-radius: 50%;
  background:red;
  transform: rotateZ(-264deg);
  /* z-index: ; */
}
.spot6:before{
  content: '';
  width: 10px;
  height: 55px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 20% 50%;
  background:white;
  transform: rotateY(180deg);
  z-index: -2;
}
.spot7{
  width: 10px;
  height: 40px;
  position:absolute;
  top:155px;
  left: 35px;
  border: 1px solid red;
  border-radius: 50%;
  background:red;
  transform: rotateZ(-264deg);
  /* z-index: ; */
}
.spot7:before{
  content: '';
  width: 10px;
  height: 55px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 20% 50%;
  background:white;
  transform: rotateY(180deg);
  z-index: -2;
}

.spot8{
  width: 10px;
  height: 40px;
  position:absolute;
  top:140px;
  right: 35px;
  border: 1px solid red;
  border-radius: 50%;
  background:red;
  transform: rotate(-274deg);
  /* z-index: ; */
}
.spot8:before{
  content: '';
  width: 10px;
  height: 55px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 20% 50%;
  background:white;
  transform: rotateY(180deg);
  z-index: -2;
}
.spot9{
  width: 10px;
  height: 40px;
  position:absolute;
  top:155px;
  right: 35px;
  border: 1px solid red;
  border-radius: 50%;
  background:red;
  transform: rotateZ(-274deg);
  /* z-index: ; */
}
.spot9:before{
  content: '';
  width: 10px;
  height: 55px;
  top:-2.5px;
  left: -2.5px;
  position:absolute;
  border-radius: 20% 50%;
  transform: rotateY(180deg);
  background:white;
  z-index: -2;
}
`
