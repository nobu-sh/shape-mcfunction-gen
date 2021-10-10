import { YAML } from '../deps.ts'

export function createConfig(path: string): void {
  const yaml = `
# shape-mcfunction-gen config

# valid shapes ["cube", "sphere"]

# radius is quite obviously the radius of the shape

# boiler is the boilerplate function code. It contains the variables ["$x", "$y", "$z"]
# these variables are replaced with the relative coordinates to the coordinates provided for the specified shape

# coordinates are the coordinates at which the shape should be generated this can be a number or minecrafts relative operator

` + YAML.stringify({
    shape: "cube",
    radius: 5,
    boiler: "execute @s ~ ~ ~ fill $x $y $z $x $y $z stone 0 replace air 0",
    coords: {
      "x": "~",
      "y": "~",
      "z": "~",
    }
  })
  
  Deno.writeTextFile(path, yaml)
}
export interface Config {
  shape: 'cube' | 'sphere'
  radius: number
  boiler: string
  coords: {
    x: string
    y: string
    z: string
  }
}

export function readConfig(path: string): Config | undefined {
  try {
    const file = Deno.readTextFileSync(path)
    const parsed = YAML.parse(file) as Config
    const verified = verifyConfig(parsed)
    if (!verified) throw "This shit wrong"
    return parsed
  } catch (_) {
    return undefined
  }
}

export function verifyConfig(config: Config): boolean {
  if (!config.shape && (config.shape !== "cube" && config.shape !== 'sphere')) return false
  if (!config.radius && isNaN(config.radius) && !isFinite(config.radius)) return false
  if (!config.boiler && !config.boiler.length) return false
  if (!config.coords) return false
  if (!config.coords.x) return false
  if (!config.coords.y) return false
  if (!config.coords.z) return false
  if (!config.coords.x.length) return false
  if (!config.coords.y.length) return false
  if (!config.coords.z.length) return false

  return true
}