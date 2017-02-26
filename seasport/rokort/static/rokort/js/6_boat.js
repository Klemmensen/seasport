// Handle button state
$( 'body' ).on( 'click', '.btn', function()
{
    if( !$( this ).hasClass( 'dropdown-toggle' ) )
    {
        if( $( this ).hasClass( 'availability-indicator' ) )
        {
            $( this ).addClass( 'btn-active' ).siblings( '.availability-indicator' ).removeClass( 'btn-active' );
        }
        else
        {
            $( this ).toggleClass( 'btn-active' );
        }
    }
});

// Handle fixed filtering menu on scroll for larger screens
if( $( window ).width() > 992 )
{
    $( window ).on( 'scroll', function()
    {
        if( $( window ).scrollTop() >= 202 )
        {
            $( '.boat-container' ).css( {'margin-top': 63.4} );
            $( '.make-static' ).addClass( 'fixed-nav' );
        }
        else
        {
            $( '.make-static' ).removeClass( 'fixed-nav' );
            $( '.boat-container' ).css( {'margin-top':'0px'} );
        }
    });
}

// Toggle list or image view on boat overview
$( 'body' ).on( 'click', '.view-toggler', function()
{
    $( '.' + $( this ).data( 'show' ) ).show();
    $( '.' + $( this ).data( 'hide' ) ).hide();
});

// Keep the bootstrap btn drop down list open when clicking elements inside of it
$( '.btn-group' ).on( 'click', function( e )
{
    if( $( this ).hasClass( 'open' ) )
    {
        e.stopPropagation();
    }
});

// Handle multiple boat type select list
$( 'body' ).on( 'change', '.dropdown-menu li input[type=checkbox]', function()
{
    // Check or uncheck all if "all" checkbox has changed
    if( $( this ).val() === 'all' )
    {
        $( this ).parent( 'li' ).parent( 'ul' ).find( 'li' ).each( function( index, li )
        {
            $( li ).find( 'input[type=checkbox]' ).prop( 'checked', $( this ).is( ':checked' ) );
        }.bind( this ) );
    }

    // Collect the selected values
    var checkedContainer = [];

    $( this ).parent( 'li' ).parent( 'ul' ).find( 'li' ).each( function( index, li )
    {
        var checkbox = $( li ).find( 'input[type=checkbox]' );

        if( checkbox.length === 1 && $( checkbox ).is( ':checked' ) )
        {
            checkedContainer.push( $( checkbox ).val() );
        }
    });
    console.log( checkedContainer );
});

// Booing modal overlay
$( '.booking-image' ).on( 'click', function()
{
    $( '.booking-modal-overlay' ).modal( 'show' );
    $( '#chosen-datetime-start' ).html( moment().format( "dddd [d.]D MMMM YYYY, [Kl. ]k:mm" ) );
    $( '#chosen-datetime-end' ).html( moment().format( "dddd [d.]D MMMM YYYY, [Kl. ]k:mm" ) );
});

$( '.close-modal' ).on( 'click', function()
{
    $( '.booking-modal-overlay' ).modal( 'hide' );
});

// Bootstrap calender for booking a boat - Incl. callback that checks for availability on selected time
$( function()
{
    moment.locale( 'da' );
    moment.updateLocale('da',
    {
        weekdays : [
            "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
        ]
    });

    $( '#datetimepicker' ).datetimepicker(
    {
        inline: true,
        sideBySide: false,
        viewMode: 'days',
        calendarWeeks: true,
        format:  'mm/DD/YYYY HH:mm',
        locale: 'da'
    }).on( 'dp.change', function( e )
    {
        $( '#chosen-datetime-start' ).html( moment(e.date._d).format( "dddd [d.]D MMMM YYYY, [Kl. ]k:mm" ) );
    });
});
