function getSelectedValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

function tastePower(type) {
  switch (type) {
    case "肉厚": return 3;
    case "さくさく": return 2;
    case "柔らかい": return 1;
    default: return 0;
  }
}

document.getElementById("make").addEventListener("click", function () {
  const breadName = getSelectedValue("bread");
  const mainName = getSelectedValue("main");
  const subName = getSelectedValue("sub");
  const result = document.getElementById("result");

  if (!breadName || !mainName || !subName) {
    alert("パン・メイン・サブ具材をすべて選んでください！");
    return;
  }

  const bread = breads[breadName];
  const main = ingredients[mainName];
  const sub = ingredients[subName];

  const params = ["claim", "size", "flavor", "sour", "spicy", "salty", "smell", "oil"];
  const total = {};

  for (let key of params) {
    total[key] = (bread[key] || 0) + (main[key] || 0) + (sub[key] || 0);
  }

  // 食感タイプの決定
  const tasteCounts = { 肉厚: 0, さくさく: 0, 柔らかい: 0 };
  [bread.taste, main.taste, sub.taste].forEach(t => tasteCounts[t]++);

  let dominantTaste = "柔らかい";
  if (tasteCounts["肉厚"] > tasteCounts["さくさく"]) dominantTaste = "肉厚";
  else if (tasteCounts["さくさく"] > tasteCounts["肉厚"]) dominantTaste = "さくさく";
  else dominantTaste = ["肉厚", "さくさく", "柔らかい"]
    .sort((a, b) => tastePower(b) - tastePower(a))[0];

  let output = `【${mainName}】と【${subName}】の【${breadName}】サンドが出来たよ！\n\n`;
  for (let key of params) {
    const stars = "★".repeat(total[key]);
    const label = {
      claim: "主張の強さ", size: "サイズ感", flavor: "味っ気",
      sour: "酸味", spicy: "辛味", salty: "塩気",
      smell: "香り", oil: "油っ気"
    }[key];
    output += `${label}：${stars}\n`;
  }

  output += `\n食感タイプ：${dominantTaste}`;

  result.innerText = output;
});
