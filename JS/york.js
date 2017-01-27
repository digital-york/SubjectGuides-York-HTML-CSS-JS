$(document).ready(function() {
	/* The following code block is probably redundant after the big update of 6 Sept 2016, and is therefore commented out
		$(".link-pointer").each(function() {
			var url = $(this).attr("onclick").split("'");
			$(this).replaceWith('<a href="' + url[1] + '" target="_blank"><i class="fa fa-question-circle" aria-hidden="true" title="Link to help or a guide"></i></a>');
		});
	*/
	$(".s-lg-link-list li").has(".s-lg-database-desc").each(function() {
		$( ".s-lg-label-moreinfo", this).insertBefore( $( ".s-lg-database-desc", this ));
		$( ".s-lg-database-moreinfo", this).insertBefore( $( ".s-lg-database-desc", this ));
	});
	$(".s-lg-link-list li").has(".s-lg-link-desc").each(function() {
		$( ".s-lg-label-moreinfo", this).insertBefore( $( ".s-lg-link-desc", this ));
		$( ".s-lg-content-moreinfo", this).insertBefore( $( ".s-lg-link-desc", this ));
	});
		$(".s-lg-az-result").has(".s-lg-az-result-description").each(function() {
			$( ".s-lg-content-more-info ", this).insertAfter( $( ".s-lg-az-result-badges", this ));
			$( ".s-lg-label-moreinfo", this).insertAfter( $( ".s-lg-az-result-badges", this ));
                       console.log("s-lg-az-result-badges block used");
		});
	/* Steph's hack - 7th Sept */
	/* var replaced = $("body").html().replace(/> <i class="fa fa-fw fa-external-link/g,'><i class="fa fa-fw fa-question-circle');
	$("body").html(replaced); */

// Insert A-Z breadcrumb HTML anchor tag
if ( location.pathname.indexOf('/az.php') > -1 ) $("#s-lib-bc-page").html('<a href="/az.php">E-resources Guide</a>');

   var title = document.title;
   if (location.pathname.indexOf('/e-resources') > -1) {
        $("#york-header > div.header-child-right").html('<span>E-resources Guide</span> <i class="fa fa-laptop" aria-hidden="true"></i>');
        $("body").addClass("eresourcesguide");
    } else if (title.indexOf('Ebooks Guide') > -1) {
        $("#york-header > div.header-child-right").html('<span>Ebooks Guide</span>  <i class="fa fa-laptop" aria-hidden="true"></i>')
    } else if (title.indexOf('Ejournals') > -1) {
        $("#york-header > div.header-child-right").html('<span>Ejournals Guide</span>  <i class="fa fa-laptop" aria-hidden="true"></i>')
    } else if (title.indexOf('Skills') > -1) {
        $("#york-header > div.header-child-right").html('<span>Digital Skills Guides</span>  <i class="fa fa-th-large" aria-hidden="true"></i>');
	$("#s-lg-guide-name").css('display','none');
	$("#skillstitle").css('display','block');
	$("#york-header > div.header-child-left").html('<a href="//www.york.ac.uk/about/departments/support-and-admin/information-services/"><img src="https://s3.amazonaws.com/libapps/customers/1738/images/watermark.png"></a>');
	$("#s-lib-bc-customer").html('<i class="fa fa-link" aria-hidden="true"></i>   <a title="Library" href="https://www.york.ac.uk/library">Library</a>   <span style="font-weight:normal;color:#ccc;">/</span>    <a title="IT Services" href="https://www.york.ac.uk/it-services">IT Services</a>   <span style="font-weight:normal;color:#ccc;">/</span>    <a title="E-resources Guide" href="http://subjectguides.york.ac.uk/az.php">E-resources Guide</a>');
		}
// JEA 19/10/2016: Fix to correct the wrong-info-box-displayed bug
$( ".s-lg-label-moreinfo > button" ).attr( "onclick", "jQuery(this).parent().nextAll('.s-lg-content-more-info').toggle()" )
	});
