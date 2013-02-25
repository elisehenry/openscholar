/**
 * jQuery to toggle form elements for the biblio content type.
 */

(function($) {
  Drupal.behaviors.os_sv_list = {
    attach : function(context) {
      // when content type changes, update sorting options list.
      var old_type = $('#os_sv_list_content_type').val();
      $('#os_sv_list_content_type').change(function() {
        var sortby = $('#edit-sort-by');
        var sort_whitelist = [ 'sort_newest', 'sort_oldest', 'sort_alpha' ];

        var display_style = $('#edit-display');
        var display_whitelist = [ 'display_title', 'display_teaser', 'display_body' ];

        var content_type = $('#os_sv_list_content_type').val();
        var selected_sort = 'sort_' + content_type;
        var more_link = $('#more_link_div input[name="more_link"]');
        var defaults = Drupal.settings.more_link_defaults;

        //apply content_type appropriate sorts when ct changes
        sortby.children('option').each(function() { 
          this_sort = $(this).attr('value');
          if ($.inArray(this_sort, sort_whitelist) == -1) {
            // show/hide appropriate options
            remove = (this_sort != selected_sort);
            $(this).attr('hidden', remove).attr('disabled',remove);

            // deselect invalidated option
            if (remove && ($(this).parent().attr('value') == this_sort)) {
              $(this).parent().attr('value', sort_whitelist[0]);
            }

            // for new boxes, select special case as default
            if (!remove && Drupal.settings.os_sv_list_box.new_box) {
              $(this).parent().attr('value', this_sort);
            }
          }
        });
        
        //apply content_type appropriate sorts when ct changes
        display_style.children('option').each(function() { 
          this_display = $(this).attr('value');
          if ($.inArray(this_display, display_whitelist) == -1) {
            
            // show/hide appropriate options
            remove = ($.inArray(content_type, Drupal.settings.os_sv_list.has_display[this_display]) == -1);
            $(this).attr('hidden', remove).attr('disabled',remove);

            // deselect invalidated option
            if (remove) {
              $(this).parent().attr('value', display_whitelist[0]);
            }
          }
        });

        // swap out the more link url.  preserve previous setting so it doesn't get trashed if the user goes back to original type.
        if (more_link.val()) {
          defaults[old_type] = more_link.val();
        }
        more_link.val(defaults[content_type]);
        old_type = content_type;

      });

      // perform the change callback once now.
      $('#os_sv_list_content_type').change();

      // Get the default value of the content_type.
      var content_type = $('#os_sv_list_content_type').val();
      var show_all_checked = $('#biblio_show_all_check').is(':checked') ? true : false;

    }
  };
}(jQuery));
