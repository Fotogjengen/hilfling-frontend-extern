interface Payload {
  client_id: string;
  grant_type: string;
  redirect_uri: string;
  code: string;
  code_verifier: string;
}

interface Props extends Payload {
  provider: string;
  tokenEndpoint: string;
}

export default ({
  tokenEndpoint,
  provider,
  code_verifier,
  code,
  redirect_uri,
  grant_type,
  client_id
}: Props) => {
  const payload: Payload = {
    client_id,
    grant_type,
    redirect_uri,
    code,
    code_verifier
  };

  const url = `${provider}/${tokenEndpoint}`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Token response not OK, status is ${res.status}`);
      }
      return res.json();
    })
    .then(token => {
      const { expires_in } = token;
      if (expires_in && Number.isFinite(expires_in)) {
        const slack = 10; // slack in seconds
        token.expires_at = new Date(
          new Date().getTime() + expires_in * 1000 - slack * 1000
        );
      }
      return token;
    })
    .catch(err => {
      console.error("Error fetching", err); // TODO remove error trace
      throw err;
    });
};
