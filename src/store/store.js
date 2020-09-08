import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products:[
            {name: 'Ibanez RG570EX',price: 700},
            {name: 'Fender Strat American Standard',price: 1600},
            {name: 'Gibson Explorer Standard',price: 1700},
            {name: 'Jackson Kelly JS32T',price: 319}
        ]
    },

    getters : {
        saleProducts:state => {
            let saleProducts = state.products.map(product=> {
                return {
                    name: '**'+product.name+'**',
                    price: product.price / 2
                }
            })
            return saleProducts
        }
    },
    mutations : {

        reducePrice: state => {
            state.products.forEach(product => {

                product.price -= 1;

            });
        }

    },
    actions : {
        reducePrice: context => {
            setTimeout(function () {
                context.commit('reducePrice')
            },2000)
        }
    }


});