let current = $(window).scrollTop();
const total = $(window).height() - current;
const ele = $(".astronautImage");
const currPosition = ele.position().left;
const trackLength = 300;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    console.log({ total: total, current: current });
    console.log(current / total * 100);
    const newPosition = trackLength * (current / total)
    ele.css({ left: currPosition + newPosition * (8) + 'px' });
});