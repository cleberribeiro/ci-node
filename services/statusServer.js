const statusServer = () => {
  let randomStatus = Math.random();

  if (randomStatus >= 0.5) {
    return { status: 'UP' };
  }

  return { status: 'DOWN' };
}

module.exports = statusServer;