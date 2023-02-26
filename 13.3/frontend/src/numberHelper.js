const apiCalls = require("./apiCalls");

const addNumbers = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error("Please provide two parameters");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Please provide numbers");
  }

  return a + b;
};

const totalNumber = () => {
  const amazonClients = apiCalls.amazonTotalClients();
  const ebayClients = apiCalls.ebayTotalClients();
  const total = addNumbers(amazonClients, ebayClients);

  return `Our Total Number is ${total}`;
};

module.exports = {
  addNumbers,
  totalNumber,
};
