var currentFrameId = 0;
var frameLengths = [0, 1000, 2000, 3000, 4000]; //The first page should be displayed as soon as ready
var frameURLs = ["https://www.bing.com/search?q=lifepo4", "https://www.bing.com/search?q=liion", "https://www.bing.com/search?q=lifepo4​ 12v", "https://www.bing.com/search?q=lifepo4 cells"];

function nextFrame() {
    if (currentFrameId == frameURLs.length) return;
    console.log((new Date().getTime()) + ": setting iframe src to " + frameURLs[currentFrameId] + "(frame id " + currentFrameId + ")");
    $('#switchingIframe').attr('src', frameURLs[currentFrameId]);
    currentFrameId++;
}

$(function () {
    console.log((new Date().getTime()) + ": starting javascript");

    $('#switchingIframe').load(function () {
        console.log((new Date().getTime()) + ": iframe loaded for frame id " + currentFrameId);
        window.setTimeout(nextFrame, frameLengths[currentFrameId]);
    });

    nextFrame();
});