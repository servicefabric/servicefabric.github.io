class Led {
    constructor (containerId){

        appendHtmlElement(containerId, this.view());

        $( function() {
            var $winHeight = $( window ).height()
            $( '.led-container' ).height( $winHeight );
        });
    }
    view (){
        return "<div class='led-container'>"
            + "<div class='led-box'>"
            + "<div class='led-yellow'></div>"
            + "</div>"
        + "</div>"
    }
}
