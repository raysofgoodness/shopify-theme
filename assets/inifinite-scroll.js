
var isSettingsObj = JSON.parse(isSettings);
var elem = document.querySelector(isSettingsObj.container);
if($(isSettingsObj.path).length &amp;amp;amp;amp;amp;amp;amp;gt; 0){
    var infScroll = new InfiniteScroll( elem, {
        path: isSettingsObj.path,
        append: isSettingsObj.append,
        history: false,
        hideNav: isSettingsObj.hideNav,
        status: isSettingsObj.status
    });
}
