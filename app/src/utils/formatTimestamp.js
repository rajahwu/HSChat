const formatTimestamp = (timestamp) => {
  // Convert seconds to milliseconds
  const milliseconds =
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;

  // Create a new Date object
  const date = new Date(milliseconds);

  // Convert to human-readable format
  const humanReadableDate = date.toLocaleString();

  return humanReadableDate;
};

export { formatTimestamp };
