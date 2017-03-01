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

// Booking modal overlay
$( '.booking-image' ).on( 'click', function()
{
    $( '.booking-modal-overlay' ).modal( 'show' );
    $( '#chosen-datetime-start' ).html( moment().format( "dddd [d.]D MMMM YYYY, [Kl. ]HH:mm" ) );
    $( '#chosen-datetime-end' ).html( moment().format( "dddd [d.]D MMMM YYYY, [Kl. ]HH:mm" ) );
    $( '#booking-slider' ).slider( 'setValue', 0 );

    $( '#booking-slider' ).slider(
    {
        ticks: [0, 4, 8, 12, 16, 20, 24],
        ticks_labels: ['0', '4', '8', '12', '16', '20', '24'],
        min: 0,
	    max: 24,
        step: 0.5,
        tooltip: 'always',
        value: 0,
        formatter: function( value )
        {
            return value == 1 ? value + ' time' : value + ' timer';
        }
    }).on( 'slide', function( slider )
    {
        $( '#chosen-datetime-end' )
            .html( moment( $( "#datetimepicker" ).data("DateTimePicker").date() )
            .add( slider.value, 'hours' )
            .format( "dddd [d.]D MMMM YYYY, [Kl. ]HH:mm" ) );
    });
});

// Close the modal overlay
$( '.close-modal' ).on( 'click', function()
{
    $( '.booking-modal-overlay' ).modal( 'hide' );
});

// Bootstrap calender for booking a boat - Incl. event handler which checks for availability on selected time
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
        format:  'mm/DD/YYYY HH:mm',
        locale: 'da',
        minDate: moment(),
        maxDate: moment().add(1, 'months')
    }).on( 'dp.change', function( e )
    {
        var sliderValue = $( '#booking-slider' ).slider( 'getValue' );

        $( '#chosen-datetime-start' ).html( moment( e.date._d ).format( "dddd [d.]D MMMM YYYY, [Kl. ]HH:mm" ) );
        $( '#chosen-datetime-end' ).html( moment( e.date._d ).add( sliderValue, 'hours' ).format( "dddd [d.]D MMMM YYYY, [Kl. ]HH:mm" ) );
    });
});
