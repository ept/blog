jQuery.noConflict();

cfct = {}

cfct.loading = function() {
	return '<div class="loading"><span>Loading...</span></div>';
}

cfct.ajax_post_content = function() {
	jQuery('ol.archive .excerpt .entry-title a').unbind().click(function() {
		var post_id = jQuery(this).attr('rev').replace('post-', '');
		jQuery('#post-excerpt-' + post_id).hide();
		jQuery('#post-content-' + post_id + '-target').html(cfct.loading()).load(CFCT_URL + '/index.php?cfct_action=post_content&id=' + post_id, cfct.ajax_post_comments);
		return false;
	});
}

cfct.ajax_post_comments = function() {
	jQuery('p.comments-link a').unbind().click(function() {
		var post_id = jQuery(this).attr('rev').replace('post-', '');
		jQuery(this).parent().hide();
		jQuery('#post-comments-' + post_id + '-target').html(cfct.loading()).load(CFCT_URL + '/index.php?cfct_action=post_comments&id=' + post_id);
		return false;
	});
}

jQuery(document).ready(function($) {
	// suckerfish dropdown fixes for IE
	$('#navigation li, #all-categories li').mouseover(function() {
		$(this).addClass('hover');
	});
	$('#navigation li, #all-categories li').mouseout(function() {
		$(this).removeClass('hover');
	});
	// :first-child fix for IE
	$('#navigation li li:first-child, #all-categories li li:first-child').addClass('first');
	// :hover fix for full articles in IE
	$('.full').mouseover(function() {
		$(this).addClass('hover');
	});
	$('.full').mouseout(function() {
		$(this).removeClass('hover');
	});
	if ((!$.browser.msie || $.browser.version.substr(0,1) != '6') && typeof CFCT_AJAX_LOAD != 'undefined' && CFCT_AJAX_LOAD) {
		cfct.ajax_post_content();
		cfct.ajax_post_comments();
	}
	$('#navigation li a, #all-categories li a').removeAttr('title');
});