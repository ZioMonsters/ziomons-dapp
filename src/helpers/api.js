import fetch from "node-fetch"

import { apiUrl } from "../config.json"

export const listMonsters = (address, limit) => {
  const params = {
    address,
    limit
  }

  return fetch(`${apiUrl}/listMonsters?params=${JSON.stringify(params)}`)
}

export const getMonster = id => {
  const params = {
    monsterId: id
  }

  return fetch(`${apiUrl}/getMonster?params=${JSON.stringify(params)}`)
}

  /*return Promise.resolve(
    [
      {
        id: 0,
        attack: 8,
        defense: 9,
        speed: 10,
        experience: 0,
        level: 1,
        rarity: 0
      },
      {
        id: 1,
        attack: 8,
        defense: 9,
        speed: 8,
        experience: 0,
        level: 1,
        rarity: 0
      },
      {
        id: 2,
        attack: 10,
        defense: 9,
        speed: 8,
        experience: 0,
        level: 1,
        rarity: 0
      },
      {
        id: 3,
        attack: 13,
        defense: 11,
        speed: 11,
        experience: 0,
        level: 1,
        rarity: 1
      },
      {
        id: 4,
        attack: 8,
        defense: 8,
        speed: 10,
        experience: 0,
        level: 1,
        rarity: 0
      },
      {
        id: 5,
        attack: 11,
        defense: 12,
        speed: 13,
        experience: 0,
        level: 1,
        rarity: 1
      },
      {
        id: 6,
        attack: 8,
        defense: 8,
        speed: 9,
        experience: 0,
        level: 1,
        rarity: 0
      }
    ]
  )*/