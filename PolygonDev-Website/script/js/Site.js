$.loadPage = function(where, pageurl, title) {
    alert("1");
    $(where).load(pageurl);
    alert("2");
    if (!title == "-1") {
        $("title").html(title);
	}
	alert("3");
}