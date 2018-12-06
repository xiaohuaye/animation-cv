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
@keyframes dd {
  0%{ width: 100%;}
  100%{ width: 45%;}
}
#displayCode {
  animation-duration: 3s;
  animation-name: dd;
  transform: rotatey(6deg);
  width: 45%;
}
`
var n = 0
var timer = setInterval(()=>{
  n++
  var code = result.slice(0,n)
  var html = Prism.highlight(code, Prism.languages.css, 'css')
  console.log(html)
  $('#displayCode>.language-css').html(html) 
  $('#displayCss').html(result.slice(0,n))
  if(n>=result.length){
    window.clearInterval(timer)
  }
},50)




