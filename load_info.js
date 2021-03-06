;(()=>{ 
$('.first').click(()=> {
    $('.first').fadeOut()
    setTimeout(()=>{
        $('.demo-play').fadeIn()
    }, 400)
})

function goOn() {
    $('#go').css({"background-color":"#FFB531"})
    $('#loop').css({"background-color":"white"})
}

function goOut() {
    $('#go').css({"background-color":"white"})
    $('#loop').css({"background-color":"#FFB531"})
}

let footer = document.querySelector('footer')
let footer_style = window.getComputedStyle(footer)
let distance = '5vw'

// mobile 환경
if(footer_style.color == 'rgb(255, 0, 0)') {
    distance = '5vh'
}
// tab 환경
else if(footer_style.color == 'rgb(255, 165, 0)')
{
    distance = '8vw'
}
// pc 환경
else {
    distance = '5vw'
}

function lionMove() {
    goOn()
    $('.white-space-lion').animate({left:'+=' + distance})
}

$('.demo-play').click(()=>{
    $(".demo-play").off("click")
        setTimeout(()=>{
            $('#method-text1').fadeOut()
            $('#method-text2').fadeOut()
        }, 200)

        setTimeout(()=>{
            $('#method-text3').fadeIn()
        }, 800)

        setTimeout(()=>{
            $('#method-key').fadeIn()
        }, 1200)
        setTimeout(()=>{
            $('#go2').css({"background-color":"#FFB531"})
        }, 1600)

        setTimeout(()=>{
            $('#example-lion').animate({left:"+=" + distance})
        }, 2000)

        setTimeout(()=> {
            $('#first-letter').fadeOut()
        }, 2200)

        setTimeout(()=>{
            $('#method-text3').fadeOut()
        }, 3000)

        setTimeout(()=>{
            $('#method-text4').fadeIn()
            $('#method-text5').fadeIn()
        }, 3500)

        setTimeout(()=>{
            $('#example-lion').animate({left:"-=" + distance})
            $('#method-text4').fadeOut()
            $('#method-text5').fadeOut()
        }, 5000)

        setTimeout(()=>{
            $('#first-letter').fadeIn()
            $('#go2').css({"background-color":"white"})
        }, 5300)

        setTimeout(()=>{
            $('#method-text5').html('Click to Continue')
            $('#method-text5').fadeIn()
        }, 5500)
        
        // 두 번째 이벤트
        setTimeout(()=>{
            $(".demo-play").on("click", function() {
                $(".demo-play").off("click")
                setTimeout(()=>{
                    $('#method-text5').fadeOut()
                }, 400)


                setTimeout(()=>{
                    $('#method-text6').fadeIn()
                }, 1000)
                
                setTimeout(()=>{
                    $('#method-text6').fadeOut()
                }, 2000)

                setTimeout(()=>{
                    $('#method-text7').fadeIn()
                    $('#method-text8').fadeIn()
                }, 2600)

                setTimeout(()=>{
                    $('#up2').css({"background-color":"#FFB531"})
                }, 3200)

                setTimeout(()=>{
                    let deg = 0
                    for(let i=0;i<90;i++) {
                        setTimeout(()=>{
                            $('#example-lion').css({"transform":`rotate(${deg - i * 1}deg)`})
                        }, i * 10)
                    }
                }, 3600)

                setTimeout(()=>{
                    $('#up2').css({"background-color":"white"})
                }, 3900)

                setTimeout(()=>{
                    $('#up2').css({"background-color":"white"})
                    $('#right2').css({"background-color":"#FFB531"})
                }, 5000)

                setTimeout(()=>{
                    let deg = -90
                    for(let i=0;i<90;i++) {
                        setTimeout(()=>{
                            $('#example-lion').css({"transform":`rotate(${deg + i * 1}deg)`})
                        }, i * 10)
                    }
                    
                }, 5300)

                setTimeout(()=>{
                    $('#right2').css({"background-color":"white"})
                    $('#method-text7').fadeOut()
                    $('#method-text8').fadeOut()
                }, 5700)

                setTimeout(()=>{
                    $('#method-text7').html('Click to Continue')
                    $('#method-text7').fadeIn()
                }, 6200)

                // 세 번째 이벤트
                setTimeout(()=>{
                    $(".demo-play").on("click", function() {
                        $(".demo-play").off("click")
                        
                        setTimeout(()=>{
                            $('#method-text7').fadeOut()
                        }, 300)

                        setTimeout(()=>{
                            $('#method-text9').fadeIn()
                        }, 1000)

                        setTimeout(()=>{
                            $('#method-text9').fadeOut()
                        }, 2000)

                        setTimeout(()=>{
                            $('#method-text10').fadeIn()
                            $('#method-text11').fadeIn()
                        }, 2600)

                        setTimeout(()=>{
                            $('#method-text10').fadeOut()
                            $('#method-text11').fadeOut()
                        }, 4200)

                        setTimeout(()=> {
                            $('.demo-play').fadeOut()
                                
                            setTimeout(()=>{
                                $('.second').fadeIn()
                            }, 300)

                            // 반복에 대한 예시 이벤트
                            setTimeout(()=> {
                                setTimeout(()=>{
                                    $('.loop-info').fadeIn()
                                }, 200)
                            
                                setTimeout(()=> {
                                    $('#sol1').fadeIn()
                                    $('#sol2').fadeIn()
                                }, 1000)
                            
                                setTimeout(()=>{
                                    setTimeout(()=>{
                                        $('#first-text').fadeOut()
                                    }, 2000)
                            
                                    setTimeout(()=>{
                                        $('#second-text').fadeOut()
                                    }, 5200)
                            
                                    for(let i=0;i<5;i++)
                                    {
                                        setTimeout(()=> {
                                            setTimeout(()=>{
                                                goOn()
                                                lionMove()
                                            }, i * 500)
                                            
                                            setTimeout(()=>{
                                                goOut()
                                            }, i * 500 + 500)
                                            
                                        }, i * 1200)
                            
                                        // 색깔 다시 끄기
                                        setTimeout(()=>{
                                            $('#go').css({"background-color":"white"})
                                            $('#loop').css({"background-color":"white"})
                                        }, 7600)
                                    }
                                    setTimeout(()=>{
                                        $('.second').fadeOut()
                                    }, 7000)
                            
                                    setTimeout(()=>{
                                        $('.third').fadeIn()
                                    }, 7500)
                                }, 3000)
                            }, 1500)


                        }, 4300)
                    })

                }, 6300)
            })
        }, 5100)
})
})()