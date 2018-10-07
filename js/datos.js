$(function() {

    $({ Counter: 0 }).animate({
      Counter: $('.total-dinero').text()
    }, {
      duration: 2500,
      easing: 'swing',
      step: function() {
        $('.total-dinero').text(Number(Math.ceil(this.Counter)).toLocaleString('en'));
      }
    });
    
    $({ Counter: 0 }).animate({
      Counter: $('.total-ninos').text()
    }, {
      duration: 2500,
      easing: 'swing',
      step: function() {
        $('.total-ninos').text(Number(Math.ceil(this.Counter)).toLocaleString('en'));
      }
    });
    
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text().replace("$", "")
        }, {
            duration: 1800,
            easing: 'swing',
            step: function (now) {
                $(this).text('$' + Math.ceil(now).toLocaleString('en'));
            }
        });
    });
    
    
    setInterval(function(){
        $('.counter').each(function () {
            var parcial = parseInt($(this).text().replace("$", ""));
            var donacion = Math.floor((Math.random() * 2000) + 10);
            var total = parcial + donacion;
            $(this).prop('Counter', parcial).animate({
                Counter: total
            }, {
                duration: 1800,
                easing: 'swing',
                step: function (now) {
                    $(this).text('$' + Math.ceil(now).toLocaleString('en'));
                }
            });
        });
    }, 10000);
    
});