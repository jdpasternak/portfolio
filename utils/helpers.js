module.exports = {
  formatName: (name) => {
    return name
      .split("-")
      .map((word) => {
        word = word.split("");
        word[0] = word[0].toUpperCase();
        return word.join("");
      })
      .join(" ");
  },
};
