test("GET to /api/status should return 200", async () => {
  const result = await fetch("http://localhost:3000/api/v1/status");
  const data = await result.json();
  console.log("DATA: ", data);
  expect(result.status).toBe(200);
});
