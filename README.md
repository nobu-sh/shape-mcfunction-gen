# shape-mcfunction-gen
MCFunction shape generation made easy.

**This is not a Node.JS project!!**

## Installation

Install the latest exe from [here](https://github.com/NobUwU/shape-mcfunction.gen/releases/latest) and use without any prerequisites.

`OR`

Install Cargo [here](https://www.rust-lang.org/tools/install)
```
$ cargo install deno --locked
``` 
```
$ git clone https://github.com/NobUwU/shape-mcfunction-gen.git
```

## Usage

### Executable

Run the bin and a config fill will be generated. When opened it will look something like so.

```yaml
shape: cube
radius: 5
boiler: execute @s ~ ~ ~ fill $x $y $z $x $y $z stone 0 replace air 0
coords:
  x: '~'
  'y': '~'
  z: '~'
```

| Key | Value(s) | Description |
| --- | ------ | ----------- |
| `shape` | `cube` or `sphere` | What shape to generate |
| `radius` | `integer` | Radius of object from center |
| `boiler` | `string` | Boilerplate code to insert into mcfunction |
| `coords` | `string` | Coordinates for shape. Can be minecraft relative operator `~` or a number coordinate |

> boiler has three dynamic values `$x` `$y` `$z` these values will be replaced with the calculated coordinates for the generated shape

Once you have the config filled out to your desires just run the bin again and the function will output in `/out/function.mcfunction`

The above config if ran will output something like so:

```
execute @s ~ ~ ~ fill ~-5 ~-5 ~-5 ~-5 ~-5 ~-5 stone 0 replace air 0
execute @s ~ ~ ~ fill ~-5 ~-5 ~-4 ~-5 ~-5 ~-4 stone 0 replace air 0
execute @s ~ ~ ~ fill ~-5 ~-5 ~-3 ~-5 ~-5 ~-3 stone 0 replace air 0
execute @s ~ ~ ~ fill ~-5 ~-5 ~-2 ~-5 ~-5 ~-2 stone 0 replace air 0
execute @s ~ ~ ~ fill ~-5 ~-5 ~-1 ~-5 ~-5 ~-1 stone 0 replace air 0
execute @s ~ ~ ~ fill ~-5 ~-5 ~0 ~-5 ~-5 ~0 stone 0 replace air 0
...
```

### Source

`running`
```
$ deno run --allow-read --allow-write ./index.ts
```

`compiling`
```
$ deno compile --allow-read --allow-write ./index.ts
```

everything else is the same concept as shown in usage for the executable.
