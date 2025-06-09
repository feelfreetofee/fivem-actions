export const resourceName = GetCurrentResourceName()

async function httpHandler(handler, {path, headers, method}, res, body) {
    const response = await handler(new Request(`http://${resourceName}${path}`, {
        headers, method, body
    }))
    res.writeHead(response.status, Object.fromEntries(response.headers.entries()))
    response.body ? response.text().then(res.send) : res.send()
}

export default handler => SetHttpHandler((req, res) =>
    ['GET', 'HEAD'].includes(req.method) ? httpHandler(handler, req, res) :
    req.setDataHandler(body => httpHandler(handler, req, res, body), 'binary')
)