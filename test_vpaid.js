function myAdDoneFunction(spotx_ad_found) {
  if (spotx_ad_found) {
  } else {
  }
}

var aScriptAttributes = [
  'type="text/javascript" src="http://js.spotx.tv/easi/v1/85394.js" data-spotx_channel_id="85394" data-spotx_ad_done_function="myAdDoneFunction" data-spotx_ad_unit="incontent" data-spotx_autoplay="1" data-spotx_ad_volume="0" data-spotx_loop="0" data-spotx_collapse="1"'
];
aScriptAttributes.push('data-spotx_content_width="300"');
aScriptAttributes.push('data-spotx_content_height="250"');
document.write(
  "<scr" + "ipt " + aScriptAttributes.join(" ") + "></scr" + "ipt>"
);
