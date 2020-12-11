# DISCORD SLASH COMMAND DEMO

## Installation

### Clone this repository

> - Using Git CLI  
>
>
>   git clone <https://github.com/MoartMedia/Discord-Integration-demo.git>  
>   cd ./Discord-Integration-demo  
>  
> - Or Download This Repository  

### Install Node.js

> [Download For Windows / MacOS](https://nodejs.org/en/download/)  
>
> Download For Linux Using apt
>
> ```bash
> apt-get update
> apt-get install nodejs -y
> ```

### Setup Dependencies

```bash
npm install
```  

### Start Application

```bash
// Before You start Application, Edit ./config.json  

node .
```

### Warning

> Grant Permission applications.commands  
> (if you don't grant permission, It will throw DiscordAPIError (Missing Access) when Execute CommandRegister Function.)  
> 
> `https://discord.com/oauth2/authorize?client_id={insert_client_id_here}&scope=applications.commands`
