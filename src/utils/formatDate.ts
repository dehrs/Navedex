const formatDate = (data?: string): string => {
  const dt = data ? new Date(data) : new Date();
  const dateFormat = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;

  return dateFormat.toString();
};
export default formatDate;
