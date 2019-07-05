function GetImgTags(setting) {
    var str = "";
    for (var i = 0; i < setting.sources.length; i++) {
        str += "<img src='" + setting.sources[i] + "'  class='" + getCenter(setting.isCenter) + "'  style='" + setting.customCss + "' /> ";
    }
    return str;
}

function ImagetoPrint(setting) {
    return "<html><head><scri" + "pt>function step1(){\n" +
        "setTimeout('step2()', 10);}\n" +
        "function step2(){window.print();window.close()}\n" +
        "</scri" + "pt>" +
        "<style type=\"text/css\" media=\"print\">@@page { margin: 0; } body { margin: 1.6cm; }  .center {display: block;margin-left: auto;margin-right: auto;width: 50%;}</style>" +
        "</head><body onload='step1()'>\n" +
        "<h3 style='text-align:center'>" + setting.header + "</h3><br/>" +
        GetImgTags(setting) +
        "</body></html>";
}

function PrintImage(setting) {
    var pageLink = "about:blank";
    var pwa = window.open(pageLink, "_new");
    pwa.document.open();
    var imageToPrint = ImagetoPrint(setting);
    pwa.document.write(imageToPrint);
    pwa.document.close();
}

function getCenter(isCenter) {
    if (isCenter)
        return "center";
    return "";
}

function GetHeader() {

}