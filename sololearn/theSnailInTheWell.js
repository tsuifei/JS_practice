// The Snail in the Well
/**
 * 蝸牛爬天井，走七步退兩步，這不就很像學習曲線
 * 今天做這題時居然被困住了，因為重新看了 do while loop 發現自己居然這個語法的掌握度很低，一直想著為什麼自己做不出來，抑鬱死了！
 * 然後找資料才發現自己頭腦真的不夠活，但為什麼自己的腦子運轉這麼不靈活呢？
 * depth 為井的高度，每天爬七步，夜裡下滑兩步
 * 所以 depth 每跑一次迴圈，就減掉七步，只要 depth 還大於 0 表示還沒出井，所以夜裡會下滑兩步
 * 每跑一次迴圈也就表示花了一天，所以以 day 來計算
 */

// var depth = 42; // output 8
// var depth = 128; // output 26
function SnailOut(depth) {
  //your code goes here

  var day = 0;
  for (; depth > 0; day++) {
    depth -= 7;
    if (depth > 0) {
      depth += 2;
    }
  }
  return day;
}

console.log(SnailOut(42));

// 有人使用這招：console.log(Math.round(depth / 5))  也太絕了，但可讀性很糟，哈！
