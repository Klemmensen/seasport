/**
 * Created by Jan Klemmensen on 09-10-2016.
 */

// Show the fixed menu on scroll
$( window ).scroll( function()
{
    if( $( this ).scrollTop() > 70 )
    {
        if( $( '.scroll-menu' ).not( ':visible' ) )
        {
            $( '.scroll-menu' ).slideDown( 200 );
        }
    }
    else
    {
        $( '.scroll-menu' ).stop( true ).fadeOut();
    }
});

// Scroll to top
$( '.scrool-to-top' ).click( function()
{
    $( 'body' ).animate( { 'scrollTop' : '0px' }, 800 );
});