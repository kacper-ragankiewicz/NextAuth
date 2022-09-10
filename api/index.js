export default function handler(request, response) {
  const { name } = request.query;
  res.json({message: 'Hello World!'});
}