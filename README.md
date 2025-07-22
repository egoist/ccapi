# ccapi

Use Claude Code with a Claude API compatible endpoint.

## Why?

I want the `claude` command to always use the Claude subscription, but I also want to use the Claude API for other purposes. This tool allows you to run the `claude` command with a specified API endpoint without changing the default behavior of the `claude` command.

## Configuration

In `~/.config/ccapi/config.json`, you can specify the API endpoint and other settings:

```json
{
  "base_url": "https://your-api.com",
  "api_key": "sk-xxx"
}
```

Then run `ccapi` to run Claude Code with the specified API.

## License

MIT
