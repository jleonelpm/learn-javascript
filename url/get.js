function url_content(url)
{
    var content;
    $.get(url,function( data ) {content=data});
    return content;
}

var content=url_content("https://contribute.jquery.org/documentation/");
alert(content);