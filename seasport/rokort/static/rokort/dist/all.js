
$( 'body' ).on( 'click', '.btn', function(){
    $( "body" ).find( "[data-identifier='" + $( this ).attr( 'data-identifier' ) + "']" ).toggleClass( 'btn-active' );
});

jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});
// $( this ).toggleText( $( this ).attr( 'data-first' ), $( this ).attr( 'data-second' ) );

$( function()
{
    $('.fixed-content' ).each( function( element )
    {
        $( this ).clone().appendTo( $( '.fixed-nav-content' ) );
    });
});

$(window).on( 'scroll', function()
{
    if ($(window).scrollTop() >= 250 )
    {
        $( '.fixed-nav' ).stop().fadeIn();
    }
    else
    {
        $( '.fixed-nav' ).stop().fadeOut();
    }
});
