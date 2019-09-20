var measure = {
    totalY: document.body.scrollHeight,
    totalX: document.body.scrollWidth,
    screenY: screen.height,
    screenX: screen.width,
}

console.log('hres;')

$(document).on('scroll', function () {
    const posY = $(this).scrollTop();
    const pos = {
        x: measure.screenX / measure.totalY * posY + 'px',
        y: posY + (measure.screenY / measure.totalY * posY) + 'px',
    };
    console.log('translate(' + pos.x + ',' + pos.y + ')')
    $('#astroImg').css('transform', 'translate(' + pos.x + ',' + pos.y + ') scale(' + (1 + posY / measure.screenY) + ')')
});