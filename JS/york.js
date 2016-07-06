// The following is included in the 'Look & Feel' >> 'Custom JS/CSS Code' box
$(document).ready(function() {
    $(".link-pointer").each(function() {
        var url = $(this).attr("onclick").split("'");
        $(this).replaceWith('<a href="' + url[1] + '" target="_blank"><i class="fa fa-question-circle" aria-hidden="true" title="Link to help or a guide"></i></a>');
    });
    $(".s-lg-link-list li").has(".s-lg-database-desc").each(function() {
	$( ".s-lg-label-moreinfo", this).insertBefore( $( ".s-lg-database-desc", this ));
	$( ".s-lg-database-moreinfo", this).insertBefore( $( ".s-lg-database-desc", this ));
});
    $(".s-lg-link-list li").has(".s-lg-link-desc").each(function() {
	$( ".s-lg-label-moreinfo", this).insertBefore( $( ".s-lg-link-desc", this ));
	$( ".s-lg-content-moreinfo", this).insertBefore( $( ".s-lg-link-desc", this ));
});
    var title = document.title;
    if (title.indexOf('E-resources Guide') > -1) {
        $("#york-header > div.header-child-right").html('<span>E-resources Guide</span> <i class="fa fa-laptop" aria-hidden="true"></i>');
        $("body").addClass("eresourcesguide");
    } else if (title.indexOf('Ebooks Guide') > -1) {
        $("#york-header > div.header-child-right").html('<span>Ebooks Guide</span>  <i class="fa fa-laptop" aria-hidden="true"></i>')
    } else if (title.indexOf('Ejournals') > -1) {
        $("#york-header > div.header-child-right").html('<span>Ejournals Guide</span>  <i class="fa fa-laptop" aria-hidden="true"></i>')
    } else if (title.indexOf('Skills') > -1) {
        $("#york-header > div.header-child-right").html('<span>Skills Guides</span>  <i class="fa fa-th-large" aria-hidden="true"></i>')
    }
});
