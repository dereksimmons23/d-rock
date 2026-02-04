exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { action, query, token, uri, deviceId } = JSON.parse(event.body);

  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "No Spotify token" }),
    };
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  if (action === "search") {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`,
      { headers }
    );
    const data = await res.json();
    const track = data.tracks?.items?.[0];

    if (!track) {
      return {
        statusCode: 404,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Track not found" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        uri: track.uri,
        name: track.name,
        artist: track.artists.map((a) => a.name).join(", "),
        album: track.album.name,
        image: track.album.images?.[0]?.url,
      }),
    };
  }

  if (action === "play") {
    const endpoint = deviceId
      ? `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`
      : `https://api.spotify.com/v1/me/player/play`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers,
      body: JSON.stringify({ uris: [uri] }),
    });

    if (res.status === 204 || res.status === 200) {
      return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ ok: true }),
      };
    }

    const err = await res.text();
    return {
      statusCode: res.status,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Playback failed", details: err }),
    };
  }

  return {
    statusCode: 400,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ error: "Unknown action" }),
  };
};
