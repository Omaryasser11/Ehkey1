const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString(); // Adjust the options for the desired format
};

export default formatDate;
