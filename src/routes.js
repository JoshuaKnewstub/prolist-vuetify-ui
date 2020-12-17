import OpenHomes from './components/OpenHomes.vue';
import favourites from './components/favourites.vue';
import visited from './components/visited.vue';
import ExploreHome from './components/ExploreHome.vue';

export default [
    {path: '/', component: OpenHomes},
    {path: '/favourites', component: favourites},
    {path: '/visited', component: visited},
    {path: '/ExploreHome', component: ExploreHome}
]