### [`.github/workflows/fivem.yml`](.github/workflows/fivem.yml)
### Github Repo > Settings > Environments > `fivem`
- **endpoint**: `IP:PORT` *(127.0.0.1:30120)*
- **resource**: `resource-name` *(fivem-action)*
- **token**: `SECRET_PASSWORD`
### server.cfg
```cfg
add_ace resource.fivem-actions command.refresh allow
add_ace resource.fivem-actions command.start allow
add_ace resource.fivem-actions command.stop allow
add_ace resource.fivem-actions command.ensure allow

set fivem-action_token "SECRET_PASSWORD"

ensure fivem-action
```
![fivem-actions](https://github.com/user-attachments/assets/e388a4ce-9f25-49f6-a231-c5240593f559)
