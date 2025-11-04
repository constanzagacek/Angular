import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { NewProduct } from './pages/products/secciones/new-product/new-product';

export const routes: Routes = [
    /*Definimos la ruta general o la raíz en especifico que nos lleve a la ruta HOME -> principal*/
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "products", component: Products},
    {path: "contact", component: Contact},
    {path: "new-product", component: NewProduct}
];