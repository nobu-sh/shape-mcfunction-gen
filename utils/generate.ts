export function generateSphere(rad: number, coord: [number,number,number]): [number,number,number][] {
  const coords: [number,number,number][] = []
  const [x, y, z] = coord
  for(let i = -rad; i <= rad; i++)
    for(let j = -rad; j <= rad; j++)
      for(let k = -rad; k <= rad; k++)
        if(i * i + j * j + k * k <= rad * rad)
          coords.push([x + i, y + j, z + k])

  return coords
}
export function generateCube(rad: number, coord: [number, number, number]): [number,number,number][] {
  const coords: [number, number, number][] = []
  const [x, y, z] = coord
  for(let i = -rad; i <= rad; i++)
    for(let j = -rad; j <= rad; j++)
      for(let k = -rad; k <= rad; k++)
        coords.push([x + i, y + j, z + k])

  return coords
}