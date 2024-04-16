import { defineDb, defineTable, column } from 'astro:db';

const Products = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    sku: column.text({ unique: true }),
    name: column.text(),
    description: column.text({ optional: true }),
    variants: column.json({ optional: true }),
    category: column.json({ optional: true }),
    price: column.number(),
    stock: column.number({ optional: true }),
    imgUrl: column.json({ optional: true }),
    imgAlt: column.json({ optional: true }),
  }
})
const Schools = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    addres: column.text()
  }
})
const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    fullName: column.text(),
    email: column.text(),
    schoolID: column.number({ optional: true, references: () => Schools.columns.id }),
    role: column.text({ default: "user" }),
  }
})

export default defineDb({
  tables: { Products, Schools, Users }
});
