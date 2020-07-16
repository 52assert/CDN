function () {
        $("#footer-wrap").css({
            position: "absolute",
            "text-align": "center",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            "z-index": 99,
        });
        $("footer").append(
            `<div class="container" id="jsi-flying-fish-container"></div>`
        );
        $("body").append(
            '<script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@master/lib/js/fish.js"></script>'
);
return this;
}
