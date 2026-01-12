const reels = [
  {
    username: "alex_coder",
    likeCount: 12450,
    isLiked: false,
    commentCount: 342,
    caption: "Late night coding hits different ",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 120,
    isFollowed: false,
  },
  {
    username: "sophia.designs",
    likeCount: 28900,
    isLiked: true,
    commentCount: 870,
    caption: "Minimal UI > Everything ",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 410,
    isFollowed: true,
  },
  {
    username: "rahul.dev",
    likeCount: 18340,
    isLiked: false,
    commentCount: 455,
    caption: "JavaScript makes life easier ",
    video: "https://www.w3schools.com/html/movie.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/35.jpg",
    shareCount: 290,
    isFollowed: true,
  },
  {
    username: "emily.travels",
    likeCount: 45210,
    isLiked: true,
    commentCount: 1320,
    caption: "Mountains > Beaches ",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 890,
    isFollowed: false,
  },
  {
    username: "daniel.fitness",
    likeCount: 9780,
    isLiked: false,
    commentCount: 210,
    caption: "Consistency beats motivation ",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/52.jpg",
    shareCount: 150,
    isFollowed: false,
  },
  {
    username: "priya.art",
    likeCount: 26700,
    isLiked: true,
    commentCount: 640,
    caption: "Art speaks louder than words ",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    userProfile: "https://randomuser.me/api/portraits/women/63.jpg",
    shareCount: 520,
    isFollowed: true,
  },
  {
    username: "mark.music",
    likeCount: 31600,
    isLiked: false,
    commentCount: 910,
    caption: "Music is my escape ",
    video: "https://www.w3schools.com/html/movie.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/67.jpg",
    shareCount: 760,
    isFollowed: false,
  },
  {
    username: "neha.foodie",
    likeCount: 22890,
    isLiked: true,
    commentCount: 505,
    caption: "Street food supremacy ",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/71.jpg",
    shareCount: 430,
    isFollowed: true,
  },
  {
    username: "kevin.tech",
    likeCount: 14120,
    isLiked: false,
    commentCount: 380,
    caption: "Learning something new every day ",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/81.jpg",
    shareCount: 260,
    isFollowed: false,
  },
  {
    username: "ananya.life",
    likeCount: 38900,
    isLiked: true,
    commentCount: 1100,
    caption: "Slow mornings & positive vibes ",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/90.jpg",
    shareCount: 840,
    isFollowed: true,
  },
];

const allReels = document.querySelector(".all-reels");

// Render reels into the container
allReels.innerHTML = reels
  .map(
    (reel) => `
      <div class="reel">
        <video src="${reel.video}" autoplay loop muted playsinline></video>
        <div class="bottom">
          <div class="user">
            <img src="${reel.userProfile}" alt="${reel.username} avatar">
            <h4>${reel.username}</h4>
            <button>${reel.isFollowed}</button>
          </div>
          <h4>${reel.caption}</h4>
        </div>
        <div class="right">
          <div id=${idx} class="like">
            <h4 class="like-icon">
              <i class="ri-heart-line"></i>
            </h4>
            <h6>${reel.likeCount}</h6>
          </div>
          <div class="comment">
            <h4 class="comment-icon">
              <i class="ri-chat-1-line"></i>
            </h4>
            <h6>${reel.commentCount}</h6>
          </div>
          <div class="share">
            <h4 class="share-icon">
              <i class="ri-share-forward-line"></i>
            </h4>
            <h6>${reel.shareCount}</h6>
          </div>
        </div>
      </div>
    `
  )
  .join("");



// Like Button Functionality

