const wave = new Wave();
const canvas  = document.getElementsByClassName("canvas")

const resizeCanvas = () => {
    let windowWidth = window.innerWidth;

    if(windowWidth >= 750) {
        canvas[0].width = document.getElementsByClassName("container")[0].clientWidth;
        canvas[0].height = document.getElementsByClassName("container")[0].clientHeight;

        canvas[1].width = document.getElementsByClassName("container")[0].clientWidth;
        canvas[1].height = document.getElementsByClassName("container")[0].clientHeight;

        if(windowWidth < 920) {
            canvas[2].width = document.getElementsByClassName("container")[0].clientWidth / 100 * 50;
        } else {
            canvas[2].width = document.getElementsByClassName("container")[0].clientWidth / 100 * 70;
        }
        canvas[2].height = document.getElementsByClassName("container")[0].clientHeight;

        canvas[0].style.display = "";
        canvas[1].style.display = "";
    } else {
        canvas[0].style.display = "none";
        canvas[1].style.display = "none";

        canvas[2].width = document.getElementsByClassName("container")[0].clientWidth;
        canvas[2].height = document.getElementsByClassName("container")[0].clientHeight / 100 * 80;
    }
}

window.addEventListener("resize", resizeCanvas)

resizeCanvas()

wave.fromElement("audio", "canvas0", {
    type: 'shine',
    colors: [
        '#FAA4BD',
        '#FAE3C6'
    ]
})

wave.fromElement("audio", "canvas1", {
    type: 'shine',
    colors: [
        "#FAA4BD",
        "#FAE3C6"
    ]
})

// wave.fromElement("audio", "canvas2", {
//     type: 'bars',
//     colors: [
//         "rgb(255, 240, 124)",
//         "rgb(128, 255, 114)",
//         "rgb(126, 232, 250)",
//         "rgb(238, 192, 198)",
//         "rgb(255,255,255)"
//     ]
// })

wave.fromElement("audio", "canvas2", {
    type: 'bars blocks',
    colors: [
        "#F5BB00",
    ]
})