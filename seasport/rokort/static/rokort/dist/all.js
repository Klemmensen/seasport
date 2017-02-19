
$( 'body' ).on( 'click', '.btn', function(){
    $( this ).toggleClass( 'btn-active' );
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

$(window).on( 'scroll', function()
{
    if ($(window).scrollTop() >= 205 )
    {
        $( '.boat-container' ).css( {'margin-top': 64} );
        $( '.make-static' ).addClass( 'fixed-nav' );
    }
    else
    {
        $( '.make-static' ).removeClass( 'fixed-nav' );
        $( '.boat-container' ).css( {'margin-top':'0px'} );
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

    $( this ).parent( 'li' ).parent( 'ul' ).find( 'li' ).each( function( index, li )
    {
        var checkbox = $( li ).find( 'input[type=checkbox]' );

        if( checkbox.length === 1 && $( checkbox ).is( ':checked' ) )
            checkedContainer.push( $( checkbox ).val() )
    });
    console.log( checkedContainer );
});