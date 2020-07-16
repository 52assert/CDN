$(function () {
        $("head").append(
            '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        );
        $.getScript(
            "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js",
            function () {
                $("body").prepend('<div id="xiaokang-aplayer"></div>');
                aplayerObj = {
                    container: document.getElementById("xiaokang-aplayer"),
                };
                for (var key in obj) {
                    if (key != "container") aplayerObj[key] = obj[key];
                }
                const ap = new APlayer(aplayerObj);
                console.log(aplayerObj);
                return ap;
            }
        );
    });
