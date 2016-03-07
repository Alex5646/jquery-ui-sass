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

    $('#tabs').tabs();

    $('#dialog').dialog({
        autoOpen: false,
        width: 400,
        modal: true,
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
    });

    // Link to open the dialog
    $('#dialog-link').button({
        icons: {
            primary: 'ui-icon-newwin'
        }
    }).click(function(event) {
        $('#dialog').dialog('open');
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

    $('#slider').slider({
        range: true,
        values: [17, 67]
    });

    $('#progressbar').progressbar({
        value: 20
    });

    $('#spinner').spinner();

    $('#menu').menu();

    $('#tooltip').tooltip();

    $('#selectmenu').selectmenu();
});
