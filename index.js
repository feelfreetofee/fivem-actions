const {default: serve, resourceName} = require('./http.js')

const {spawnSync} = require('node:child_process')

serve(function(request) {
    const [owner, repo] = request.url.slice(resourceName.length + 8).split('/')

    if (GetConvar(`${resourceName}_token`) !== request.headers.get('authorization'))
        return new Response(undefined, {status: 401})

    if (spawnSync('git', ['pull'], {
        cwd: `resources/[${owner}]/${repo}`
    }).status !== 0)
        spawnSync('git', ['clone', `git@github.com:${owner}/${repo}.git`, `[${owner}]/${repo}`], {
            cwd: 'resources'
        })

    ExecuteCommand('refresh')

    ExecuteCommand(`ensure ${repo}`)

    return new Response
})
