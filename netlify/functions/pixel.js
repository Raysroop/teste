exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate"
    },
    body: "R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    isBase64Encoded: true
  };
};
