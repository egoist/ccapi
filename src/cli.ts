#!/usr/bin/env node
import { spawnSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { homedir } from "node:os"
import path from "node:path"

const config = loadConfig()

const args = process.argv.slice(2)
spawnSync("claude", args, {
  env: {
    ...process.env,
    ANTHROPIC_BASE_URL: config.baseUrl,
    ANTHROPIC_AUTH_TOKEN: config.apiKey,
  },
  stdio: "inherit",
})

function loadConfig() {
  const filepath = path.join(homedir(), ".config/ccapi/config.json")
  try {
    const content = readFileSync(filepath, "utf8")
    return objToCamel(JSON.parse(content)) as {
      baseUrl?: string
      apiKey?: string
    }
  } catch {
    throw new Error(`invalid file: ${filepath}`)
  }
}

function objToCamel(obj: Record<string, string>) {
  return Object.keys(obj).reduce<Record<string, string>>((res, key) => {
    const value = obj[key] as string
    const newKey = key.replace(/_([a-zA-Z0-9])/g, (_, p1) =>
      `${p1}`.toUpperCase()
    )
    res[newKey] = value
    return res
  }, {})
}
