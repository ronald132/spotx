var sp_slot = window.top.document.querySelector("#vidContain");
function spotxAdDoneFunction(spotx_ad_found) {
  sp_slot.style.display = "none";
}
if (window.self == window.top) {
  sp_slot.style.cssText =
    "width:300px !important; height:169px !important; z-index:99999999999;position: fixed;bottom: 50px;left: 0;";
  var js = window.top.document.createElement("script");
  js.setAttribute("type", "text/javascript");
  js.setAttribute("src", "//js.spotx.tv/easi/v1/85394.js");
  js.setAttribute("data-spotx_channel_id", "85394");
  js.setAttribute("data-spotx_content_width", 250);
  js.setAttribute("data-spotx_content_height", 147);
  js.setAttribute("data-spotx_autoplay", "1");
  js.setAttribute("data-spotx_ad_volume", "0");
  js.setAttribute("data-spotx_media_transcoding", "low");
  js.setAttribute("data-spotx_ad_done_function", "spotxAdDoneFunction");
  sp_slot.appendChild(js);
}
