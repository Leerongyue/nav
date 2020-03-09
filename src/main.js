const $lastLi = $(".siteList").find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x);
const hashMap = xObject || [
  {
    logo: "A",
    url: "https://www.acfun.cn"
  },
  {
    logo: "B",
    url: "https://www.bilibili.com"
  }
];
const simplifyUrl = url => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};
const render = () => {
  $(".siteList")
    .find("li:not(.last)")
    .remove();
  hashMap.forEach((node, index) => {
    //console.log(index);
    const $li = $(`
          <li>
          <a href="${node.url}">
              <div class="site">
                   <div class="logo">${node.logo}</div>
                   <div class="link">${simplifyUrl(node.url)}</div>
                   <div class='close'>
                     <svg class="icon">
                       <use xlink:href="#icon-close"></use>
                     </svg>
                   </div>
              </div>
          </a>
          </li>`).insertBefore($lastLi);
    //去掉a标签
    // $li.on("click", () => {
    //   window.open(node.url);
    // });
    $li.on("click", ".close", e => {
      e.preventDefault(), hashMap.splice(index, 1), render(); //splice:从index往后删除
    });
  });
};
render();
//////////////////////////////////////////////////
$(".addButton").on("click", () => {
  let url = window.prompt("请输入您的网址");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  hashMap.push({ logo: simplifyUrl(url)[0], url: url }); //logo: simplifyUrl(url)[0].toUppercase,小写变大写(js)
  render();
});
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("x", string);
};
$(document).on("keypress", e => {
  const { key } = e;
  for (let i = 0; i < hashMap.length; i++) {
    // toLowerCase:变小写
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url, ("about:blank", "_self"));
    }
  }
});
