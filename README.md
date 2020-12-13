# Discord Slash Command Demo

## About
This Project is Discord Slash Command Demo  
Reference. [Discord-api-docs PR](https://github.com/discord/discord-api-docs/pull/2295)  

This Project hook `raw` Event. so It will be operated successfully If user enter slash command.  

Base in Discord.js V12.

## Warning

Grant Permission applications.commands  
`https://discord.com/oauth2/authorize?client_id={insert_client_id_here}&scope=applications.commands`  

If you don't grant permission,  
It will throw DiscordAPIError (Missing Access) when you execute CommandRegister Function.

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

## Setup Dependencies

```bash
npm install
```  

## Start Application
Before You start Application, Please Edit ./config.json.  

```bash
node .
```
