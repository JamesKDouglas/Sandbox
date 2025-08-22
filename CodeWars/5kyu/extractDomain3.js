function domainName(url) {
  if (url.includes("://")) url = url.split("://")[1];

  if (url.startsWith("www.")) url = url.slice(4);

  let domain = url.split('.')[0];
  
  return domain;
}

