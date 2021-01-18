// This will make imaged become animated gifs when user hovers cursor
$("#gifimg1").hover(
    function () {
        $(this).attr("src", "imgs/vibe-cannon-demo.gif");
    },
    function () {
        $(this).attr("src", "imgs/vibe-cannon-demo.png");
    }
);
$("#gifimg2").hover(
    function () {
        $(this).attr("src", "imgs/weather-dashboard-demo.gif");
    },
    function () {
        $(this).attr("src", "imgs/weather-dashboard-demo.png");
    }
);
$("#gifimg3").hover(
    function () {
        $(this).attr("src", "imgs/work-day-scheduler-demo.gif");
    },
    function () {
        $(this).attr("src", "imgs/work-day-scheduler-demo.png");
    }
);
$("#gifimg4").hover(
    function () {
        $(this).attr("src", "imgs/coding-quiz-demo.gif");
    },
    function () {
        $(this).attr("src", "imgs/coding-quiz-demo.png");
    }
);