const config = {
  server: `https://api.coinbase.com/v2`,
};
for (const [key, value] of Object.entries(config)) {
  if (!value) {
    console.log(
      `[-] Environmental varialbe ${key} is not set. Application might not funtion properly.`
    );
  }
}
export default config;
