const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Black Summoner - épisode 6 VOSTFR",
      description: "Vous regardez",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30c52b8f481041c3e629bbf67c90811e.jpe",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m205.syncusercontent.com/mfs-60:e577df63a75eefd821953f58d9f29138=============================/p/Black%20Summoner%206.mp4?allowdd=0&datakey=FzNfKblIdipj6tgGgsU9nGHmCKgMfsQt6DfskwP1dC/vzL9FYCQ2svYONvjNLWUDv0oIawDqN1nu/O0CgbO06vKdm03SDbHcKpWwRzZBQ8M5MZ0ghoMFDLQ7qSEeO7dkpuxuuE7Wah+PwGNnS+OuKkg173tcRYJ7sI1K7fPj4pGLTPGJUD72NCqeQq8+RtwS+GvUN6rhkhPYRt3SdMGtNnOQJ3cvIc4GsEJBUcD+Z755wJvKIRz8aCPP8l4hh6xFW2cXB0BXFv/ahcBjOQkOLQaBW99BhOns5BWKCapmkw5bSe1jx1MvOmfm2Q+Cm7nOgmlbLv5G+ekx8Zwp75SqOQ&engine=ln-2.3.7.3&errurl=mBf/t0riyvNjq/4+kp3KJiuNdTUNqRPtk3RT0RKFuK6YzAU8mhBbr21yZYE/Crsar81jobrOWriGk9EDaH7N70IW/aiVmCRKE+G1gR3Ui74uM7wWx2s5fmM0czUfz4JS/p9DCt5bl0k61ehO2Ps6EtJkbjYke3ohN4fZgluaI8NNQQlaJlmnD2835SEEA44+0D0/g2C68HANy71o7Bp9LniIRjYbRlpGsxhYtNWBgi0cHEpOcpNhf9goQvff+n4bQZ98wp1GoTTvM138N0vGnizPWa/lfeHWzfMZv5NNf5BRraqw+Nse6QhQgluwjlZWwejde9ACU8ExDmiqIb5Y4w==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQmxhY2slMjBTdW1tb25lciUyMDYubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ0JsYWNrJTIwU3VtbW9uZXIlMjA2Lm1wNDs&ipaddress=1458994159&linkcachekey=9e245a470&linkoid=1546180013&mode=101&sharelink_id=8020806560013&timestamp=1672576882727&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=8c338012e7e25d932f03cd66d6a6d8fa627bd4fe&cachekey=60:e577df63a75eefd821953f58d9f29138=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
