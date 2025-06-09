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
https://github.com/user-attachments/assets/1c1ad5e9-ea12-4d30-9344-b26a2bf242a0
