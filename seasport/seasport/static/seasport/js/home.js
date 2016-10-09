/**
 * Created by Jan Klemmensen on 09-10-2016.
 */

// Make sure the info boxes always have the same height
var highestBox = 0;
$( '.home-info-box' ).each( function()
{
    if( $( this ).height() > highestBox )
    {
        highestBox = $( this ).height();
    }
});
// console.log( height );
$( '.home-info-box' ).height( highestBox );