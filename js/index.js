$('article').on('mouseover', function(){
    $(this).stop().animate({
        width: '35%'
    }, 1000, function(){
        $(this).find('h3').stop().animate({right: '10px'}, 400)
        $(this).find('p').stop().animate({right: '10px'}, 800)
    })
    $(this).find('video').stop().animate({opacity:'0.9'},1200)
    var vid=$(this).find('video').get(0)
    // 동영상의 재생위치를 처음(0)으로 설정
    vid.currentTime=0 
    // 비디오를 play나 pause할땐 get으로 인덱스번호를 추출해야함
    vid.play()
    
})

$('article').on('mouseout', function(){
    $(this).stop().animate({
        width: '12%'
    }, 700)
    $(this).find('h3').stop().animate({right: '-310px'}, 200)
    $(this).find('p').stop().animate({right: '-310px'}, 500)
    $(this).find('video').stop().animate({opacity:'0'},1200)
    var vid=$(this).find('video').get(0)
    vid.pause()
})