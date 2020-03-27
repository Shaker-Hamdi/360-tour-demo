if (document.getElementById("panorama")) {
    pannellum.viewer("panorama", {
        default: {
            autoLoad: true,
            firstScene: "circle",
            author: "Matthew Petroff",
            sceneFadeDuration: 1000
        },

        scenes: {
            circle: {
                title: "Mason Circle",
                hfov: 110,
                pitch: -3,
                yaw: 117,
                type: "equirectangular",
                panorama: "/content/images/scene-1.jpg",
                hotSpots: [
                    {
                        pitch: -1.1,
                        yaw: 132.9,
                        type: "scene",
                        text: "Go to second 360 Image",
                        sceneId: "house"
                    },
                    {
                        pitch: -2,
                        yaw: 130,
                        type: "info",
                        text: "View 360 Video Example",
                        URL: "video.html"
                    }
                    // {
                    //     pitch: 14.1,
                    //     yaw: 1.5,
                    //     cssClass: "custom-hotspot",
                    //     createTooltipFunc: hotspot,
                    //     createTooltipArgs: "Baltimore Museum of Art"
                    // },
                    // {
                    //     pitch: -9.4,
                    //     yaw: 222.6,
                    //     cssClass: "custom-hotspot",
                    //     createTooltipFunc: hotspot,
                    //     createTooltipArgs: "Art Museum Drive"
                    // },
                    // {
                    //     pitch: -0.9,
                    //     yaw: 144.4,
                    //     cssClass: "custom-hotspot",
                    //     createTooltipFunc: hotspot,
                    //     createTooltipArgs: "North Charles Street"
                    // }
                ]
            },

            house: {
                title: "Spring House or Dairy",
                hfov: 110,
                yaw: 5,
                type: "equirectangular",
                panorama: "/content/images/scene-2.jpg",
                hotSpots: [
                    {
                        pitch: -0.6,
                        yaw: 37.1,
                        type: "scene",
                        text: "Go to first 360 Image",
                        sceneId: "circle",
                        targetYaw: -23,
                        targetPitch: 2
                    }
                ]
            }
        }
    });
}

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add("custom-tooltip");
    var span = document.createElement("span");
    console.log("Args", args);
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + "px";
    span.style.marginLeft =
        -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
    span.style.marginTop = -span.scrollHeight - 12 + "px";
}

if (document.getElementById("panoramaVideo")) {
    videojs("panoramaVideo", {
        plugins: {
            pannellum: {}
        }
    });
}
