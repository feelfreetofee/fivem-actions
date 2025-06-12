### [`.github/workflows/fivem.yml`](.github/workflows/fivem.yml)
### Github Repo > Settings > Environments > `fivem`
- **endpoint**: `IP:PORT` *(127.0.0.1:30120)*
- **resource**: `resource-name` *(fivem-actions)*
- **token**: `SECRET_PASSWORD`
### server.cfg
```cfg
add_ace resource.fivem-actions command.refresh allow
add_ace resource.fivem-actions command.start allow
add_ace resource.fivem-actions command.stop allow
add_ace resource.fivem-actions command.ensure allow

set fivem-actions_token "SECRET_PASSWORD"

ensure fivem-actions
```
[Private repositories guide](https://github.com/feelfreetofee/fivem-actions/commit/f1ff01e97d8905076c5f9cd900ea99226571487d)
![fivem-actions](https://github.com/user-attachments/assets/ed023da7-faae-4868-a682-17b4e4c204f3)
