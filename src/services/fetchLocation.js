const API_URL = `https://api.distancematrix.ai/maps/api/geocode`;

const KEY =
  "key=Zmuv5ZYouQkzKvOsFvRbMdaVcSWNqcFM7f63Jb8bnZ36WLyptmBfZcDaLhXayYuZ";

export async function fetchLocation(address) {
  const res = await fetch(`${API_URL}/json?address=${address}&${KEY}`);

  const data = await res.json();

  return data.result;
}

// ("https://api.distancematrix.ai/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=Zmuv5ZYouQkzKvOsFvRbMdaVcSWNqcFM7f63Jb8bnZ36WLyptmBfZcDaLhXayYuZ");
