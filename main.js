const Contenedor = require('./contenedor')

const productos = new Contenedor('productos')

console.log('------------- EJEMPLO DE EJECUCION CON USO DE setTimeout\n')

console.log('\n------------- PASO 1: SE AGREGA EL PRIMER PRODUCTO: Banana\n')

productos.save({
	title: 'Banana',
	price: 100,
	thumbnail: 'https://carrefourar.vtexassets.com/arquivos/ids/266164/2301954000008_02.jpg?v=638052397255030000'
})
	.then(id => console.log(`Objeto guardado con ID: ${id}`))
	.catch(error => console.log(error.message))

setTimeout(() => {
	console.log('\n------------- PASO 2: SE AGREGA EL SEGUNDO PRODUCTO: Manzana\n')
	productos.save({
		title: 'Manzana',
		price: 150,
		thumbnail: 'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg'
	}).then(id => console.log(`Objeto guardado con ID: ${id}`))
		.catch(error => console.log(error.message))
}, 1000)

setTimeout(() => {
	console.log('\n------------- PASO 3: SE LISTA TODOS LOS PRODUCTOS\n')
	productos.getAll()
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
}, 2000)


setTimeout(() => {
	console.log('\n------------- PASO 4: SE ELIMINAN TODOS LOS PRODUCTOS \n')
	productos.deleteAll()
		.catch(error => console.log(error.message))
}, 3000)

setTimeout(() => {
	console.log('\n------------- PASO 5: SE AGREGA NUEVAMENTE EL PRIMER PRODUCTO: Naranja \n')
	productos.save({
		title: 'Naranja',
		price: 120,
		thumbnail: 'https://www.lechepuleva.es/documents/13930/203222/naranja_g.jpg/374b25a1-2f66-4c7a-b7d1-d123cb310073?t=1423215361000'
	}).then(id => console.log(`Objeto guardado con ID: ${id}`))
		.catch(error => console.log(error.message))
}, 4000)

setTimeout(() => {
	console.log('\n------------- PASO 6: SE AGREGA NUEVAMENTE EL SEGUNDO PRODUCTO: Durazno \n')
	productos.save({
		title: 'Durazno',
		price: 130,
		thumbnail: 'https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2018/01/durazno-tiene-multiples-propiedades-medicinales_221238.jpg'
	}).then(id => console.log(`Objeto guardado con ID: ${id}`))
		.catch(error => console.log(error.message))
}, 5000)

setTimeout(() => {
	console.log('\n------------- PASO 7: SE OBTIENE EL SEGUNDO PRODUCTO: Durazno \n')
	productos.getById(2)
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
}, 6000)

setTimeout(() => {
	console.log('\n------------- PASO 8: SE ELIMINA EL SEGUNDO PRODUCTO: Durazno \n')
	productos.deleteById(2)
		.catch(error => console.log(error.message))
}, 7000)

setTimeout(() => {
	console.log('\n------------- PASO 9 FINAL: SE LISTA LOS PRODUCTOS RESTANTES \n')
	productos.getAll()
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
}, 8000)






