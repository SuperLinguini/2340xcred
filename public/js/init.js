(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $(".dropdown-button").dropdown();
        $("select[id$='WSWaterTypeSpinner'] option[value=1]").attr("selected", true);
        $("select[id$='WSWaterCondSpinner'] option[value=1]").attr("selected", true);
        $("select[id$='WQWaterConditionSpinner'] option[value=1]").attr("selected", true);
        $('.modal').modal();
        $(".placepicker").placepicker();
        $('select').material_select();
        var fileName = window.location.pathname.split(/(\\|\/)/g).pop();
        if (fileName == 'homepage' || fileName == 'newhomepage') {
            links = document.getElementsByClassName('HomeNav');
            for (var i = 0; i < links.length; i++) {
                links[i].setAttribute('class', 'active');
            }
        } else if (fileName == 'watersource') {
            links = document.getElementsByClassName('WaterSourceNav');
            for (var i = 0; i < links.length; i++) {
                links[i].setAttribute('class', 'active');
            }
        }
    }); // end of document ready
})(jQuery); // end of jQuery name space