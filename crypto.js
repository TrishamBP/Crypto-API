const request = require("request");
const cryptoPrice = (ticker, callback) => {
  url = `https://api.polygon.io/v2/aggs/ticker/X:${ticker}USD/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=8MKNvg_Bpp1odVfaqVSnQOSrIdbCLNIr`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (response.body.count === 0) {
      callback("Unable to find price", undefined);
    } else {
      callback(undefined, {
        currentPrice: response.body.results[0].vw,
      });
    }
  });
};
module.exports = cryptoPrice;
cryptoPrice("ETH", (error, data) => {
  console.log(data.currentPrice);
});
