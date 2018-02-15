
(function ($) {
    $.fn.contentCard = function (options) {
        console.log(this);
        console.log(this.attr('headerText'));
        var defaults = {
            editor: true,
            editorPosition: 'top',
            editorOptions: {
                copy: true,
                edit: true,
                print: true,
                delete: true
            },
            onEditClick: function() {},
            onDeleteClick: function() {},
            onPrintClick: function() {},
            onCopyClick: function() {},
            complete: null       
        };

        var settings = $.extend(defaults, options);
        
        var $editorOption = '';
        if(typeof settings.editor !== undefined && settings.editor === true) {
            if(typeof settings.editorOptions !== undefined) {
                if(settings.editorOptions.hasOwnProperty('delete') && settings.editorOptions.delete === true) {
                    $editorOption += '<div title="Delete" class="icon delete-icon"></div>';
                }
                if(settings.editorOptions.hasOwnProperty('print') && settings.editorOptions.print === true) {
                    $editorOption += '<div title="Print" class="icon print-icon"></div>';
                }
                if(settings.editorOptions.hasOwnProperty('edit') && settings.editorOptions.edit === true) {
                    $editorOption += '<div title="Edit" class="icon edit-icon"></div>';
                }
                if(settings.editorOptions.hasOwnProperty('copy') && settings.editorOptions.copy === true) {
                    $editorOption += '<div title="Copy" class="icon copy-icon"></div>';
                }               
            }
        }   
        
       
        return this.each(function (){

            const headerText = this.attributes.headerText.value;
            const description = this.attributes.description.value;
            const bgUrl = this.attributes.bgUrl.value;
            const iconUrl = this.attributes.iconUrl.value;

            var $editorOptionWrap = '<div class="grid-options"><div class="grid-options-icons">'+ $editorOption +'</div></div>';
            var $gridHeader = '<div class="grid-text"><div class="grid-title">'+headerText+'</div><div class="grid-desc">'+description+'</div></div>';
            var $gridHeaderWrap = '<div class="grid-header"><img src="'+iconUrl+'" class="grid-icon icon-a" />'+ $gridHeader +'</div>';
            var $contentBox = '<div class="grid-box rel"><img src="'+bgUrl+'" /> '+ $editorOptionWrap +' '+ $gridHeaderWrap +'</div></div>';

            $(this).append($contentBox);   
            // if(settings.editorPosition === 'left') {
                
            // } else if() {

            // }
            switch (settings.editorPosition) {
                case 'left': {
                    $(this).find('.grid-options').css('right', 'unset');
                    $(this).find('.grid-options-icons .icon').css('float', 'none');
                    $(this).find('.grid-options').css('left', 'unset');
                    break;
                }
                case 'right': {
                    $(this).find('.grid-options').css('left', 'unset');
                    $(this).find('.grid-options-icons .icon').css('float', 'none');
                    break;
                }
                case 'top' : {
                    // $(this).find('.grid-options').css('left', 'unset'); 
                    $(this).find('.grid-options').css('bottom', 'unset');
                    break;
                }
                case 'bottom': {
                    $(this).find('.grid-options').css('top', 'unset');
                }
                default: {
                    break;                   
                }
            }

            $(this).find('.grid-options-icons .edit-icon').on('click', onEditClick);                                   
            function onEditClick(){
                settings.onEditClick.call($(this).closest('.grid-box').parent());            
            } 

            $(this).find('.grid-options-icons .delete-icon').on('click', onDeleteClick);                       
            function onDeleteClick(){
                settings.onDeleteClick.call($(this).closest('.grid-box').parent());            
            } 

            $(this).find('.grid-options-icons .copy-icon').on('click', onCopyClick);                       
            function onCopyClick(){
                settings.onCopyClick.call($(this).closest('.grid-box').parent());            
            } 

            $(this).find('.grid-options-icons .print-icon').on('click', onPrintClick);                       
            function onPrintClick(){
                settings.onPrintClick.call($(this).closest('.grid-box').parent());            
            } 
            
            if($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }

        });

    };
    
})(jQuery);


