try {
  const videoFrame = document.querySelector(".lesson__video");
  const videoId = videoFrame.dataset.videoid;
  let isCanBeActivated = true;

  if (videoFrame && isCanBeActivated) videoFrame.onclick = () => {
    if (!isCanBeActivated) return;

    videoFrame.classList.add("active");
    isCanBeActivated = false;
    videoFrame.insertAdjacentHTML("afterbegin", `
    <iframe
      src="https://www.youtube.com/embed/${videoId}&autoplay=true"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
    `);
  }
} catch (error) {
  console.warn(error)
}


try {
  const tabs = document.querySelectorAll(".lesson__tab");
  const tabsContent = [
    document.querySelector(".course-text"),
    document.querySelector(".lesson__aside")
  ]

  const resetAll = () => {
    tabs.forEach(item => item.classList.remove("active"));
    tabsContent.forEach(item => {
      item.classList.remove("mobile-shown");
      item.classList.add("mobile-hidden");
    });
  }

  if (tabs) tabs.forEach((item, index) => {
    item.onclick = () => {
      resetAll();
      tabs[index].classList.add("active");
      tabsContent[index].classList.replace("mobile-hidden", "mobile-shown");
    }
  })
} catch (error) {
  console.warn(error)
}