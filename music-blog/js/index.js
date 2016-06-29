// JavaScript Document
/*检测浏览器版本，提醒用户*/
function detectBrowser()
{
var browser=navigator.appName
var b_version=navigator.appVersion
var version=parseFloat(b_version)

if ((browser=="Netscape"||browser=="Microsoft Internet Explorer")
&& (version>=5))
  {}
else
  {alert("为了能够获得很好的体验，建议您升级浏览器后再来访问。（建议使用Chrome浏览器）")}
  }