(function($) {

	$.cantor_set_options = {
		width: 300      // width of the cantor set
		tolerance: 1    // minimum segment width, 1px for most screens
	};


	// cantorize:
	// this draws the cantor set

	$.fn.cantorize = function(tolerance) {
		var width_flag = false;
		var old_row = $(this).clone();
		var row = old_row.clone();
		row.html('');
		old_row.find('.cantor-set-segment').each(function() {
			if($(this).hasClass('cantor-set-segment-off')) {
				$(this).appendTo(row);
			} else {
				var width = $(this).width() / 3;
				if(width < tolerance) {
					width_flag = true;
					return false;
				}
				row.append('<div class="cantor-set-segment cantor-set-segment-on" style="width:' + width + 'px;"></div><div class="cantor-set-segment cantor-set-segment-off" style="width:' + width + 'px;"></div><div class="cantor-set-segment cantor-set-segment-on" style="width:' + width + 'px;"></div>');
			}
		});
		if(width_flag) {
			return;
		} else {
			$(this).parent().append(row);
			$(this).parent().find('.cantor-set-row:last').cantorize(tolerance);
		}
	};


	// cantor_set:
	// this draws the first row and starts the cantorization process

	$.fn.cantor_set = function(options) {
		options = typeof options == 'object' ? $.extend(true, {}, $.cantor_set_options, options) : $.cantor_set_options;
		options.tolerance = options.tolerance > 0 ? options.tolerance : 1;
		return $(this).each(function() {
			$(this).addClass('cantor-set').css({width:options.width});
			$(this).append('<div class="cantor-set-row"><div class="cantor-set-segment cantor-set-segment-on" style="width:' + options.width + 'px;"></div></div>');
			$(this).children('.cantor-set-row').cantorize(options.tolerance);
		});
	};

})(jQuery);
