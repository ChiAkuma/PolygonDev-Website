$.setElementHtml = function(element, htmlSet) {
    $(element).text(htmlSet);
};

$.setElementUrl = function(element, url) {
    alert("geckoi");
    $(element).load(url);
};