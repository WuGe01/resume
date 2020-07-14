(function($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item
                  .last()
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
                $(this)
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
})(jQuery);
  
$("#timeline-1").timeline();

printHere('htmlcanvas',90);
printHere('Jscanvas',80);
printHere('CSScanvas',80);
printHere('JQcanvas',70);
printHere('BScanvas',80);
printHere('PScanvas',80);
printHere('AIcanvas',80);
printHere('Gitcanvas',70);
printHere('PHPcanvas',80);
printHere('MYSQLcanvas',80);

function degree(degree) {
    var factor = Math.PI/180;
    return degree*factor;
}
function printHere(e,a) {
    let canvas = document.getElementById(e);
    let ctx = canvas.getContext('2d');
    let kk = a*1.5
    canvas.width = 280;
    canvas.height = 280;
    ctx.shadowBlur= 15;
    ctx.fillStyle= 'ghostwhite' ;
    ctx.fillRect(0, 0, 280, 280);
    ctx.beginPath();
    ctx.strokeStyle = '#06092e';
    ctx.lineWidth = 35;
    ctx.arc(140, 140, 90, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.shadowColor = '#2DA7E0'
    ctx.strokeStyle = '#2DA7E0';
    ctx.lineWidth = 35;
    ctx.arc(140, 140, 90, degree(270), degree(70-kk) ,true);
    ctx.stroke();
    ctx.font = "50px Microsoft JhengHei";
    ctx.fillStyle = '#2DA7E0'
    ctx.fillText(a, 110, 160);
}