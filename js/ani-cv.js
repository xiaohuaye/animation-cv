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
/*现在介绍一下我自己*/
/*来张白纸吧*/

.paper{
  display: block;
  transform: rotatey(360deg);
}

/*我要开始写简历了，请看右边*/
`
var n = 0
var timer = setInterval(()=>{
  n++
  var code = result.slice(0,n)
  var html = Prism.highlight(code, Prism.languages.css, 'css')
  $('#displayCode>.language-css').html(html) 
  $('#displayCss').html(result.slice(0,n))
  $('#displayCode').scrollTop(displayCode.scrollHeight)
  if(n>=result.length){
    window.clearInterval(timer)
    writePaper()
  }
},10)

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
  },10)
}




