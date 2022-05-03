const debug = process.env.NODE_ENV !== "production";

module.exports = {
  "process.env.BASE_URL": !debug ? "https://kkimsuhyeon.github.io/" : "",
};

// 이미지 접근시, process.env.BASE_URL
