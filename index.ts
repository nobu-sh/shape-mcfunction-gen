import {
  createConfig,
  readConfig,
} from './utils/config.ts'
import {
  generateCube,
  generateSphere,
} from './utils/generate.ts'
import { existsSync } from './utils/fs.ts'
import { start } from './utils/keepAlive.ts'

const output = "./out"
const outputFile = output + "/function.mcfunction"
const config = "./config.yaml"

function main(): void {
  if (!existsSync(config)) {
    console.log("First time run... generating config.")
    console.log("Please update the config to your needs then run the exe again!")
    createConfig(config)
  } else {
    const conf = readConfig(config)
    if (!conf) return console.log("Invalid config!")
    const x = conf.coords.x === "~" ? conf.coords.x : parseInt(conf.coords.x)
    const y = conf.coords.y === "~" ? conf.coords.y : parseInt(conf.coords.y)
    const z = conf.coords.z === "~" ? conf.coords.z : parseInt(conf.coords.z)
    if (!x || !y || !z) return console.log("Invalid coordinates!")
    
    let coords: [number, number, number][] = []
    if (conf.shape === 'cube') coords = generateCube(conf.radius, [typeof x === 'string' ? 0 : x, typeof y === 'string' ? 0 : y, typeof z === 'string' ? 0 : z])
    if (conf.shape === 'sphere') coords = generateSphere(conf.radius, [typeof x === 'string' ? 0 : x, typeof y === 'string' ? 0 : y, typeof z === 'string' ? 0 : z])
  
    let output = ""
    for (const [_x, _y, _z] of coords) {
      output += `${conf.boiler
        .replace(/\$x/g, `${typeof x === 'string' ? `${x}${_x}` : _x}`)
        .replace(/\$y/g, `${typeof y === 'string' ? `${y}${_y}` : _y}`)
        .replace(/\$z/g, `${typeof z === 'string' ? `${z}${_z}` : _z}`)
      }\n`
    }

    Deno.writeTextFileSync(outputFile, output)
    console.log("Done!")
  }

  console.log("\nCtrl + C to exit.")
}

Deno.mkdirSync(output, { recursive: true })
start()
main()
