import { defineCollection, reference, z } from "astro:content";

const marcasCollection = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        nombre: z.string(),
        descripcion: z.string(),
        avatar: image(),
        imagenCloudinary: z.string(),
        distribuidorAutorizado: z.optional(z.boolean()),
    })
})

const categoriasCollection = defineCollection({
    type: 'data',
    schema: z.object({
        nombre: z.string(),
        descripcion: z.string(),
    })
})

export const articulosCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string(),
        titulo: z.string(),
        descripciones: z.array(z.string()),
        precio: z.string(),
        marca: reference('marcas'),
        categoria: z.array(reference("categoriasCollection")),
        referencias: z.array(z.string()),
        imagenes: z.array(z.string()),
    })
})

export const collections = {
    'marcas': marcasCollection,
    'categorias': categoriasCollection,
    'articulos': articulosCollection,
}