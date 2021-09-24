const messages = ["Pedro", "Ana", "Nicolay", "Yesica", "Laura", "Diego"];

const randomMessages = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return message;
};

export { randomMessages };
