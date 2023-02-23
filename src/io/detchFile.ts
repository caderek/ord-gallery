import config from "../config";

const fetchFile = async (hash: string, mime: string) => {
  const url = `${config.API_URL}/files/${hash}`;
  const res = await fetch(url);

  if (!res.ok) {
    return null;
  }

  const data = await res.arrayBuffer();

  return new Blob([data], { type: mime });
};

export default fetchFile;
