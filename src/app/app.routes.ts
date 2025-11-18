import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Offers } from "./pages/offers/offers";
import { Gallery } from "./pages/gallery/gallery";
import { Care } from "./pages/care/care";
import { Opinions } from "./pages/opinions/opinions";
import { Contact } from './pages/contact/contact';
import { NewProduct } from './pages/products/secciones/new-product/new-product';


export const routes: Routes = [
    /*Definimos la ruta general o la raíz en especifico que nos lleve a la ruta HOME -> principal*/
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "products", component: Products},
    {path: "offers", component: Offers},
    {path: "gallery", component: Gallery},
    {path: "care", component: Care},
    {path: "opinions", component: Opinions},
    {path: "contact", component: Contact},
    {path: "new-product", component: NewProduct}
];