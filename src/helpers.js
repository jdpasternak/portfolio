const formatName = (name) => {
  return name
    .split("-")
    .map((word) => {
      word = word.split("");
      word[0] = word[0].toUpperCase();
      return word.join("");
    })
    .join(" ");
};

const capitalizeFirstLetter = (word) => {
  return word
    .split("")
    .map((l, i) => (i === 0 ? l.toUpperCase() : l))
    .join("");
};

const validateEmail = (email) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export { formatName, capitalizeFirstLetter, validateEmail };
