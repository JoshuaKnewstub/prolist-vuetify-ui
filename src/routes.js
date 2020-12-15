import openhomes from './components/openhomes.vue';
import favourites from './components/favourites.vue';
import visited from './components/visited.vue';

export default [
    {path: '/', component: openhomes},
    {path: '/favourites', component: favourites},
    {path: '/visited', component: visited}
]