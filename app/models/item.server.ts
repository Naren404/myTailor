import { json } from "@remix-run/node"
import { db } from "~/db.server"

export type ItemModel = {
  gender: string,
  id: number,
  imageUrl: string,
  measurement: JSON,
  name: string,
}

export const loadItems = async() => {
 return db.item.findMany()
}