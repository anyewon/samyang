$(function(){
    $("#sub_nav").hide();
    $("#main_nav").hover(function(){
        $(this).parent().find("#sub_nav").stop().slideDown();
        $(this).parent().hover(function(){

        },function(){
        $(this).parent().find("#sub_nav").stop().slideUp(300);
        });
    });
});

// $(function(){
//     $(".sub_menu").hover(function(){
//         let this_ = $(this),
//         menuNum = this_.index();

//         $("#main_nav_ul li").eq(menuNum).css("border-bottm","5px solid rgb(255,106,0)");
//         // $("#main_nav_ul li a").eq(menuNum).removeClass("on");
//     },function(){
//         $("#main_nav_ul li").eq(menuNum).css("border-bottm","none");
//     });
// });



// $(function(){
//     $(".sub_menu").hover(function(){
//         let this_ = $(this),
//         menuNum = this_.index();

//         $("#main_nav>#main_nav_ul>li").eq(menuNum).css("border-bottom", "5px solid rgb(255,106,0)");
//     },function(){
//         $("#main_nav>#main_nav_ul>li").eq(menuNum).css("border-bottom", "none");
//     });
// });

$(function(){
    $("#sub_ul_hover1").hover(function(){
        $("#main_nav>#main_nav_ul>li:nth-child(1)").css("border-bottom", "5px solid rgb(255,106,0)");
    },function(){
        $("#main_nav>#main_nav_ul>li:nth-child(1)").css("border-bottom", "none");
    });
    $("#sub_ul_hover2").hover(function(){
        $("#main_nav>#main_nav_ul>li:nth-child(2)").css("border-bottom", "5px solid rgb(255,106,0)");
    },function(){
        $("#main_nav>#main_nav_ul>li:nth-child(2)").css("border-bottom", "none");
    });
    $("#sub_ul_hover3").hover(function(){
        $("#main_nav>#main_nav_ul>li:nth-child(3)").css("border-bottom", "5px solid rgb(255,106,0)");
    },function(){
        $("#main_nav>#main_nav_ul>li:nth-child(3)").css("border-bottom", "none");
    });
    $("#sub_ul_hover4").hover(function(){
        $("#main_nav>#main_nav_ul>li:nth-child(4)").css("border-bottom", "5px solid rgb(255,106,0)");
    },function(){
        $("#main_nav>#main_nav_ul>li:nth-child(4)").css("border-bottom", "none");
    });
    $("#sub_ul_hover5").hover(function(){
        $("#main_nav>#main_nav_ul>li:nth-child(5)").css("border-bottom", "5px solid rgb(255,106,0)");
    },function(){
        $("#main_nav>#main_nav_ul>li:nth-child(5)").css("border-bottom", "none");
    });
    $("#sub_ul_hover6").hover(function(){
        $("#main_nav>#main_nav_ul>li:nth-child(6)").css("border-bottom", "5px solid rgb(255,106,0)");
    },function(){
        $("#main_nav>#main_nav_ul>li:nth-child(6)").css("border-bottom", "none");
    });
});



// ?????? ???????????? ??????
$(function(){
    let slideCon = $(".slide_contents"),
    slideUl = $(".slide"),
    slideLi = slideUl.find(">li"),
    slideLen = slideLi.length,
    ctrl = slideCon.find(".dot a"),
    btnPrev = slideCon.find(".control_btn .prev"),
    btnNext = slideCon.find(".control_btn .next"),
    num=0;
    let timer = setInterval(autoslide,3000);

    ctrl.on("click", function(){
        let _this = $(this),
        slideIdx = _this.index();

        num = slideIdx;

        ctrl.removeClass("on");
        _this.addClass("on");
        slideLi.removeClass("on").eq(num).addClass("on");
        clearInterval(timer);
        timer = setInterval(autoslide,3000);
        return false;

    });

    //????????? ?????? ?????? ?????? 
    btnPrev.on("click",function(){
        // ??????????????? ???????????? ??? this
        let _this = $(this);

        // num??? 0?????? ??? ??? num--????????? ????????? num??? ???????????? length????????? -1(????????? ????????? 0?????? ???????????? ?????????)??????
        (num>0)? num--:num=slideLen-1;

        // ctrol_dot??? removClass??? on????????? ????????????
        ctrl.removeClass("on");
        // ?????? num??? ???????????? index????????? ????????? on????????? ??????
        ctrl.eq(num).addClass("on");
        slideLi.removeClass("on").eq(num).addClass("on");
        clearInterval(timer);
        timer = setInterval(autoslide,3000);

        return false;
    });

    // ????????? ?????? ?????? ??????
    btnNext.on("click",function(){
        let _this = $(this);
        (num<slideLen-1)? num++:num=0;

        ctrl.removeClass("on");
        ctrl.eq(num).addClass("on");
        slideLi.removeClass("on").eq(num).addClass("on");
        clearInterval(timer);
        timer = setInterval(autoslide,3000);
        return false;
    });

    function autoslide(){
        (num == slideLen-1)? num =0: num++;
        ctrl.eq(num).trigger("click");
    };
    
});

$(function(){
    let n_slideCon = $(".new_menu"),
    n_slideUl = $(".n_slide"),
    n_slideLi = n_slideUl.find(">li"),
    n_slideLen = n_slideLi.length,
    ctrl = n_slideCon.find(".ctrol_dot a"),
    num =0;

    let ntimer = setInterval(autosliding,5000);
    ctrl.on("click",function(){
        let _this = $(this),
        slideIdx = _this.index();

        num = slideIdx;
        ctrl.removeClass("on");
        _this.addClass("on");
        n_slideUl.animate({marginLeft:-(250*num)}, 500, "easeInOutQuint");

        clearInterval(ntimer);
        ntimer = setInterval(autosliding,5000);
        return false;
    });

    function autosliding(){
        (num ==n_slideLen-1)? num = 0: num++;
        ctrl.eq(num).trigger("click");
    };
});





// ?????? ????????? png????????? margin-top=-80px(on)???????????? ??????
$(function(){
    $(".section1 .type_btn ul li").on("click",function(){
        let _this = $(this),
        slideIdx = _this.index();
        $(".section1 .type_btn ul li").removeClass("on");
        _this.toggleClass("on");
        $(".tab_content").removeClass("on");
        $(".tab_content").eq(slideIdx).addClass("on");
        
    });
});



// menu tab?????? ??????
$(function(){
    $("#tab1 .menu_dot a").on("click",function(){
        let _this = $(this),
        menuIdx = _this.index();

        $("#tab1 .list_ul").animate({marginLeft:-(228*menuIdx)},300,"swing");
        $("#tab1 .menu_dot a").removeClass("on");
        $("#tab1 .menu_dot a").eq(menuIdx).addClass("on");

    });
});
$(function(){
    $("#tab2 .menu_dot a").on("click",function(){
        let _this = $(this),
        menuIdx = _this.index();

        $("#tab2 .list_ul").animate({marginLeft:-(228*menuIdx)},300,"swing");
        $("#tab2 .menu_dot a").removeClass("on");
        $("#tab2 .menu_dot a").eq(menuIdx).addClass("on");

    });
});
$(function(){
    $("#tab3 .menu_dot a").on("click",function(){
        let _this = $(this),
        menuIdx = _this.index();

        $("#tab3 .list_ul").animate({marginLeft:-(228*menuIdx)},300,"swing");
        $("#tab3 .menu_dot a").removeClass("on");
        $("#tab3 .menu_dot a").eq(menuIdx).addClass("on");
    });
});

$(function(){
    $("#tab4 .menu_dot a").on("click",function(){
        let _this = $(this),
        menuIdx = _this.index();

        $("#tab4 .list_ul").animate({marginLeft:-(228*menuIdx)},300,"swing");
        $("#tab4 .menu_dot a").removeClass("on");
        $("#tab4 .menu_dot a").eq(menuIdx).addClass("on");
    });
});


$(function(){

    const scrollHeight = 480;

    function quickMenu(){
        if($(window).scrollTop()>scrollHeight){
            let top = $(window).scrollTop()+scrollHeight-140;
            document.getElementById('quick_menu').style.top=top+"px";
        }else{
            document.getElementById('quick_menu').style.top = '480px';
        }
    }
    quickMenu();
    $(window).scroll(()=>{
        quickMenu();
    });
});