
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


// boat-overview-table
$( '.boat-wrapper' ).each( function( index, element )
{
    var image   = $( this ).data( 'image' );
    var editUrl = $( this ).data( 'editurl' );
    var name    = $( this ).data( 'name' );

    $( '.boat-overview-table-template tbody' ).append(
        '<tr class="boat-overview-tr available">'
        + '<td><img src="' + image + '" /></td>'
        + '<td><p>' + name + '</p></td>'
        + '<td><img src="/static/rokort/img/calender-icon.png" title="Book ' + name + '" style="width:25px; height:20px; vertical-align:top; cursor:pointer;" /></td>'
        + '<td><a href="' + editUrl + '">Rediger båd</a></td>'
        + '</tr>'
    );

});

$( 'body' ).on( 'click', '.view-toggler', function()
{
    $( '.' + $( this ).data( 'hide' ) ).fadeOut();

    $( '.' + $( this ).data( 'show' ) ).fadeIn();
});