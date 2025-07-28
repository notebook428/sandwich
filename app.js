document.getElementById("make").addEventListener("click", function () {
  const bread = document.querySelector('input[name="bread"]:checked');
  const main = document.querySelector('input[name="main"]:checked');
  const sub = document.querySelector('input[name="sub"]:checked');
  const result = document.getElementById("result");

  if (!bread || !main || !sub) {
    alert("パン・メイン具材・サブ具材をすべて選んでください！");
    return;
  }

  const message = `${main.value}と${sub.value}の${bread.value}サンドが出来たよ！`;
  result.innerText = message;
});
