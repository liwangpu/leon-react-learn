const ns = document.querySelectorAll('ul.ant-list-items table>tbody>tr>td:first-child>div:first-child>div:last-child');
const countMap = new Map();
console.log(`共:`, ns.length);


ns.forEach(n => {
  countItem(n);
});


function countItem(node) {
  // console.log(`node:`, node);
  const str: string = node.innerHTML;
  const skuReg = /sku：\S+/;
  let sku, count;

  let res = skuReg.exec(str);
  if (res.length) {
    let skuStr = res[0];
    sku = skuStr.replace('sku：', '').replace(/码\S+$/, '').replace(/^\S+?-/, '');
    // console.log(`skuStr:`, skuStr);
  }

  const countReg = /class="circle"\>\d*\<\/span\>/;
  res = countReg.exec(str);
  if (res.length) {
    const countStr = res[0];
    const startIdx = countStr.indexOf('>');
    const endIdx = countStr.indexOf('<');
    count = Number.parseInt(countStr.slice(startIdx + 1, endIdx));
    // console.log(`startIdx:`, startIdx);
    // console.log(`countStr:`, endIdx);
    // console.log(`count:`, count);
  }
  if (!sku || !count) {
    console.error(`统计过程中出现问题:`, str);
  } else {
    let latest = countMap.get(sku) || 0;
    countMap.set(sku, latest + count);
  }
  // console.log(`res:`, res);
  // console.log(`--:`, sku, count);
}

// countItem(ns[0]);
let info = '';
let skus = [...countMap.keys()];
skus=skus.sort();
skus.forEach(sku=>{
  info += `${sku}    ${countMap.get(sku)}\r\n`;
});
console.log(info);