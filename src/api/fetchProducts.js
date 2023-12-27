export default async function fetchProducts(query) {
    const req = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const res = await req.json();
    return res;
}