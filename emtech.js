$(document).ready(function () {

});
var tabs = ['home', 'about', 'blog', 'contact', 'feedback'];
function switchFunc(val) {
    tabs.forEach(_ => {
        if (val != this.tabs[2]  && val != this.tabs[4]) {
            if (val != _) {
                $('#' + _).hide();
            }
            else {
                $('#' + _).show();
            }
        }
    })
}