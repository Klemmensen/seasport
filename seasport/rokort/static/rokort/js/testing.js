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
    if ($(window).scrollTop() >= 205 )
    {
        $( '.fixed-nav' ).stop().show();

        $( 'div.btn-group' ).each( function()
        {
            if( !$( this ).parent( 'div' ).parent( 'div' ).parent( 'div' ).hasClass( 'fixed-nav-content' ) )
            {
                $( this ).removeClass( 'open' );
            }
        });
    }
    else
    {
        $( '.fixed-nav' ).stop().hide();
        $( 'div.btn-group' ).each( function()
        {
            if( $( this ).parent( 'div' ).parent( 'div' ).parent( 'div' ).hasClass( 'fixed-nav-content' ) )
            {
                $( this ).removeClass( 'open' );
            }
        });
    }
});

// boat-overview-table list view
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

// Toggle list or image view on boat overview
$( 'body' ).on( 'click', '.view-toggler', function()
{
    $( '.' + $( this ).data( 'hide' ) ).hide();
    $( '.' + $( this ).data( 'show' ) ).show();
});

// Handle multi boat type select list
$( 'body' ).on( 'change', '.dropdown-menu li input[type=checkbox]', function()
{
    var checkedContainer = [];
    $( this ).parent( 'li' ).parent( 'ul' ).parent( 'div' ).addClass( 'current' );

    $( this ).parent( 'li' ).parent( 'ul' ).find( 'li' ).each( function( index, li )
    {
        var checkbox = $( li ).find( 'input[type=checkbox]' );

        if( checkbox.length === 1 && $( checkbox ).is( ':checked' ) )
            checkedContainer.push( $( checkbox ).val() )
    });
    console.log( checkedContainer );

    var content = $( this ).parent( 'li' ).parent( 'ul' ).parent( 'div' ).parent( 'div' ).find( 'div.btn-group' ).clone();
    $( content ).removeClass( 'open' );
    $( 'div.btn-group' ).not( '.current' ).replaceWith( content );
    $( 'div.btn-group' ).removeClass( 'current' );
});