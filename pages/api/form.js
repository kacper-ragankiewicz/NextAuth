export default function handler(req, res) {
    const body = req.body

    console.log('body: ', body)

    if (!body.login || !body.pass) {
        return res.status(400).json({ data: 'First or last not found' })
    }

    res.status(200).json({ data: `${body.login} ${body.pass}`})
}