const records = [
  {
    transactionId: "ebee3e1f-74ad-4d4f-9636-9136e92365c3",
    customerId: "TQIWQJT0",
    date: "2023-05-04T15:37:31.789Z",
    amount: 91,
  },
  {
    transactionId: "58ae83bf-2e16-413e-b030-1087dcc12a2e",
    customerId: "TQIWQJT0",
    date: "2023-03-12T13:23:12.239Z",
    amount: 24,
  },
  {
    transactionId: "ec8b46bf-8c65-489f-aaea-439cd4d3cda5",
    customerId: "OOF6O4DN",
    date: "2023-05-01T15:39:59.000Z",
    amount: 103,
  },
  {
    transactionId: "98b39743-a77b-4963-a2e3-503684bd60f8",
    customerId: "OOF6O4DN",
    date: "2023-04-12T15:39:56.031Z",
    amount: 482,
  },
  {
    transactionId: "3554972f-f788-484b-8b81-902b87dccc9f",
    customerId: "OOF6O4DN",
    date: "2023-04-25T15:39:32.340Z",
    amount: 7,
  },
  {
    transactionId: "01efd808-0225-4e37-ba08-3d849c7bc9aa",
    customerId: "VT9O597F",
    date: "2023-04-21T15:39:32.562Z",
    amount: 98,
  },
  {
    transactionId: "26445c6c-f4ad-4ca7-ba5d-8ba98ced0862",
    customerId: "VT9O597F",
    date: "2023-03-24T15:39:33.983Z",
    amount: 328,
  },
  {
    transactionId: "6b5a9e41-8fcf-4468-8e18-053a2eb71ce2",
    customerId: "VT9O597F",
    date: "2023-03-30T22:26:21.120Z",
    amount: 761,
  },
  {
    transactionId: "ae54c18d-7825-4ef5-aaf6-c1997c04c9a2",
    customerId: "VT9O597F",
    date: "2023-04-05T15:39:45.329Z",
    amount: 42,
  },
];

export default function getAllTransInPastThreeMonths() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(records);
    }, Math.random() * 5000);
  });
}
