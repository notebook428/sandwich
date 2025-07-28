const breads = {
  "トースト":        { taste: "柔らかい", claim: 1, size: 1 },
  "バケット":        { taste: "さくさく", claim: 3, size: 5 },
  "ベーグル":        { taste: "肉厚", claim: 3, size: 3 },
  "クロワッサン":    { taste: "さくさく", claim: 3, size: 1 },
  "マフィン":        { taste: "さくさく", claim: 2, size: 1 },
  "フォカッチャ":    { taste: "肉厚", claim: 2, size: 3 }
};

const ingredients = {
  "分厚いベーコン":      { taste: "肉厚", claim: 2, size: 3, flavor: 2, sour: 0, spicy: 0, salty: 2, smell: 3, oil: 3 },
  "フィッシュフライ":    { taste: "さくさく", claim: 2, size: 5, flavor: 2, sour: 0, spicy: 0, salty: 0, smell: 1, oil: 5 },
  "スモークサーモン":    { taste: "柔らかい", claim: 2, size: 1, flavor: 2, sour: 0, spicy: 0, salty: 0, smell: 3, oil: 0 },
  "ぷりぷりシュリンプ":  { taste: "柔らかい", claim: 2, size: 1, flavor: 2, sour: 0, spicy: 0, salty: 0, smell: 5, oil: 0 },
  "ローストチキン":      { taste: "肉厚", claim: 2, size: 5, flavor: 2, sour: 0, spicy: 0, salty: 0, smell: 3, oil: 0 },
  "ふんわりオムレツ":    { taste: "柔らかい", claim: 0, size: 3, flavor: 0, sour: 0, spicy: 0, salty: 0, smell: 1, oil: 0 },
  "カマンベールチーズ":  { taste: "柔らかい", claim: 2, size: 1, flavor: 2, sour: 0, spicy: 0, salty: 2, smell: 5, oil: 3 },
  "あらびきチョリソー":  { taste: "肉厚", claim: 2, size: 5, flavor: 2, sour: 0, spicy: 5, salty: 2, smell: 3, oil: 3 },
  "トマト＆レタス":      { taste: "肉厚", claim: 2, size: 3, flavor: 2, sour: 5, spicy: 0, salty: 0, smell: 3, oil: 0 },
  "千切りキャベツ":      { taste: "さくさく", claim: 0, size: 3, flavor: 0, sour: 0, spicy: 0, salty: 0, smell: 1, oil: 0 },
  "ぴりっとルッコラ":    { taste: "さくさく", claim: 2, size: 0, flavor: 0, sour: 0, spicy: 5, salty: 0, smell: 3, oil: 0 },
  "スライスチーズ":      { taste: "柔らかい", claim: 0, size: 0, flavor: 2, sour: 0, spicy: 0, salty: 2, smell: 3, oil: 3 },
  "ツナマヨネーズ":      { taste: "柔らかい", claim: 0, size: 0, flavor: 2, sour: 2, spicy: 0, salty: 0, smell: 3, oil: 5 },
  "チリコンカーン":      { taste: "柔らかい", claim: 2, size: 0, flavor: 2, sour: 0, spicy: 5, salty: 2, smell: 3, oil: 0 },
  "アボカドペースト":    { taste: "柔らかい", claim: 0, size: 0, flavor: 2, sour: 0, spicy: 0, salty: 0, smell: 1, oil: 3 },
  "タルタルソース":      { taste: "柔らかい", claim: 2, size: 0, flavor: 2, sour: 2, spicy: 0, salty: 0, smell: 1, oil: 3 }
};
