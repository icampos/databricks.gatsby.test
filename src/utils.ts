export const isValidEmailDomain = (email: string) => {
  const gmailPattern = "[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com)";

  return (
    email
      .toLowerCase()
      .search(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === 0 && email.search(gmailPattern) !== 0
  );
};

export const isValidPhoneNumber = (phone: string) => {
  return (
    phone
      .replace(/[^\d]/g, '') 
      .length >= 10
  );
};