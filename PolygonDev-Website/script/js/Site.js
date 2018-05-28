$.loadPage = function(where, pageurl, title) {
    $(where).load(pageurl);
    
    if (!title == "-1") {
        $("title").html(title);
	}
}