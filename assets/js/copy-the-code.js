window.CopyTheCodeToClipboard = (function(window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {        
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);

(function($) {

    CopyTheCode = {

        selector: copyTheCode.settings.selector || copyTheCode.selector || 'pre',
        copy_as: copyTheCode.settings['copy-as'] || 'text',
        button_position: copyTheCode.settings['button-position'] || 'inside',

        /**
         * Init
         */
        init: function()
        {
            this._bind();
            this._initialize();
        },

        /**
         * Binds events
         */
        _bind: function()
        {
            $( document ).on('click', '.copy-the-code-button', CopyTheCode.copyCode );
        },

        /**
         * Initialize the Button
         */
        _initialize: function()
        {
            if( ! $( CopyTheCode.selector ).length )
            {
                return;
            }

            $( CopyTheCode.selector ).each(function(index, el) {
                if( 'outside' === CopyTheCode.button_position ) {
                    $( el ).wrap( '<span class="copy-the-code-wrap copy-the-code-outside-wrap"></span>' );
                    $( el ).parent().prepend('<div class="copy-the-code-outside">' + CopyTheCode._getButtonMarkup() + '</div>');
                } else {
                    $( el ).wrap( '<span class="copy-the-code-wrap copy-the-code-inside-wrap"></span>' );
                    $( el ).append( CopyTheCode._getButtonMarkup() );
                }
            });
        },

        /**
         * Get Copy Button Markup
         */
        _getButtonMarkup: function()
        {
            return '<button class="copy-the-code-button" title="' + copyTheCode.string.title + '">' + copyTheCode.string.copy + '</button>';
        },

        /**
         * Copy to Clipboard
         */
        copyCode: function( event )
        {
            event.preventDefault();

            var btn     = $( this ),
                oldText = btn.text();

                // Fix: nested selectors e.g. `.entry-content pre`
                if ( CopyTheCode.selector.indexOf(' ') >= 0 ) {
                    var source = btn.parents('.copy-the-code-wrap');
                } else {
                    var source = btn.parents('.copy-the-code-wrap').find( CopyTheCode.selector );
                }

            // Fix: nested selectors e.g. `.entry-content pre`
            if( CopyTheCode.selector.indexOf(' ') >= 0 || 'text' === CopyTheCode.copy_as ) {
                var html = source.html();

                    // Convert the <br/> tags into new line.
                    var brRegex = /<br\s*[\/]?>/gi;
                    html = html.replace(brRegex, "\n" );

                    // Convert the <div> tags into new line.
                    var divRegex = /<div\s*[\/]?>/gi;
                    html = html.replace(divRegex, "\n" );

                    // Convert the <p> tags into new line.
                    var pRegex = /<p\s*[\/]?>/gi;
                    html = html.replace(pRegex, "\n" );

                    // Convert the <li> tags into new line.
                    var pRegex = /<li\s*[\/]?>/gi;
                    html = html.replace(pRegex, "\n" );

                    // Remove white spaces.
                    var reWhiteSpace = new RegExp("/^\s+$/");
                    html = html.replace(reWhiteSpace, "" );

                    var tempElement = $("<div id='temp-element'></div>");
                    $("body").append(tempElement);
                    html = $.trim( html );
                    $('#temp-element').html( html );
                    var html = $('#temp-element').text();
                    $('#temp-element').remove();

                // Remove the 'copy' text.
                var tempHTML = html.replace(copyTheCode.string.copy, '');

                // Remove the <copy> button.
                var tempHTML = tempHTML.replace(CopyTheCode._getButtonMarkup(), '');
    
            } else {
                var html = source.html();

                // Remove the <copy> button.
                var tempHTML = html.replace(CopyTheCode._getButtonMarkup(), '');
            }

            // Copy the Code.
            var tempPre = $("<textarea id='temp-pre'>"),
                temp    = $("<textarea>");

            // Append temporary elements to DOM.
            $("body").append(temp);
            $("body").append(tempPre);

            // Set temporary HTML markup.
            tempPre.html( tempHTML );

            var content = tempPre.text();

            content = $.trim( content );
            console.log( content );

            // Format the HTML markup.
            temp.val( content ).select();

            // Support for IOS devices too.
            CopyTheCodeToClipboard.copy( content );

            // Remove temporary elements.
            temp.remove();
            tempPre.remove();

            // Copied!
            btn.text( copyTheCode.string.copied );
            setTimeout(function() {
                btn.text( oldText );
            }, 1000);
        }
    };

    /**
     * Initialization
     */
    $(function() {
        CopyTheCode.init();
    });

})(jQuery);