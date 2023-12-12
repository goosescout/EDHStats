export interface IColumn {
  name: string
  width: number | "fill"
  sort: "asc" | "desc" | "none" | null
}
