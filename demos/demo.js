$(document).ready(function () {
    $('#accordion').accordion();
    
    var availableTags = [
        'ActionScript', 'AppleScript', 'Asp', 'BASIC',
        'C', 'C++', 'Clojure', 'COBOL', 'ColdFusion',
        'Erlang', 'Fortran', 'Groovy', 'Haskell', 'Java',
        'JavaScript', 'Lisp', 'Perl', 'PHP', 'Python',
        'Ruby', 'Scala', 'Scheme'
    ];
    
    $('#autocomplete').autocomplete({
        source: availableTags
    });

    $('#button').button();

    $('#radioset').buttonset();

    $('#rerun')
        .button()
            .on('click', function() {
                alert('Running the last action');
            })
                .next()
                .button({
                    text: false,
                    icons: {
                        primary: 'ui-icon-triangle-1-s'
                    }
                })
                .on('click', function() {
                    var menu = $(this).parent().next().show().position({
                        my: 'left top',
                        at: 'left bottom',
                        of: this
                    });
                    $(document).one('click', function() {
                        menu.hide();
                    });
                    return false;
                })
                    .parent()
                    .buttonset()
                        .next()
                        .hide()
                        .menu();

    $('#tabs').tabs();

    var dialogOptions = {
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: 'Ok',
                click: function() {
                    $(this).dialog('close');
                }
            },
            {
                text: 'Cancel',
                click: function() {
                    $(this).dialog('close');
                }
            }
        ]
    };

    $('#dialog').dialog(dialogOptions);

    $('#dialog-modal').dialog($.extend({}, dialogOptions, {
        modal: true
    }));

    // Link to open the dialog
    $('#dialog-link, #dialog-modal-link').button({
        icons: {
            primary: 'ui-icon-newwin'
        }
    });

    $('#dialog-link').click(function(event) {
        $('#dialog').dialog('open');
        event.preventDefault();
    });

    $('#dialog-modal-link').click(function(event) {
        $('#dialog-modal').dialog('open');
        event.preventDefault();
    });

    $('#datepicker').datepicker({
        inline: true
    });

    $('#datepicker-input').datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
    });

    $('#datepicker2').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showWeek: true,
        firstDay: 1
    });

    $('#datepicker-multiple').datepicker({
        numberOfMonths: 3,
        showButtonPanel: true
    });

    $('#slider').slider({
        range: true,
        values: [17, 67]
    });

    $('#slider-vertical').slider({
        orientation: 'vertical',
        range: 'min',
        min: 0,
        max: 100,
        value: 60
    });

    $('#progressbar').progressbar({
        value: 20
    });

    $('#spinner').spinner();

    $('#menu').menu();

    $('#tooltip').tooltip();

    $('#selectmenu').selectmenu();
});