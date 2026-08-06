¿Qué hace este componente CollectionPage.jsx?
1.

Lee la URL

const { collectionSlug } = useParams();

Si visitas

/women/executive-sets

obtiene

collectionSlug

↓

executive-sets
2.

Busca la colección

const collection = womenCollections.find(
    item => item.slug === collectionSlug
);

Obtendrá

Executive Sets

imagen

descripción
3.

Filtra los productos

const products = dataProductWomen.filter(
    item => item.collection === collectionSlug
);

Obtendrá

Blusa Satinada

Pantalón Alto

Blazer Elegante
4.

Renderiza

----------------------------------------

Executive Sets

Imagen grande

Elegant coordinated outfits...

----------------------------------------

Products

3 productos

□ Blusa Satinada

□ Pantalón Alto

□ Blazer Elegante

----------------------------------------