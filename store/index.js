
const state = () => ({
    user: null,
    articleList: [
        {
            title: 'The worlds largest organism is dying, but there are still ways to save it',
            timestamp: '',
            description: 'Behold the Pando aspen clone, a sprawling carpet of vibrant green-yellow quaking aspens occupying more than 100 acres outside the Fishlake National Forest in Utah',
            imgUrl: 'https://cnn.it/2OBmcmp',
            webUrl: 'https://cnn.it/2P8Dgzp'
        },
        {
            title: 'Banning plastic straws is a little like spitting in the wind',
            timestamp: '2 hours ago',
            description: 'The world is heating up dangerously and the oceans may be dying. In this context, the UKs proposed plan to ban plastic straws feels a little like spitting in the wind.',
            imgUrl: 'https://cnn.it/2EDd4cn',
            webUrl: 'https://cnn.it/2q7DAjX'
        },
        {
            title: 'A new, cheaper Tesla model 3 is on its way',
            timestamp: '1 day ago',
            description: 'Tesla is now offering a slightly cheaper version of its lowest priced car, the Model 3',
            imgUrl: 'https://cnn.it/2EB14rB',
            webUrl: 'https://cnn.it/2Cu56Q7'
        },
        {
            title: 'The worlds largest organism is dying, but there are still ways to save it',
            timestamp: '',
            description: 'Behold the Pando aspen clone, a sprawling carpet of vibrant green-yellow quaking aspens occupying more than 100 acres outside the Fishlake National Forest in Utah',
            imgUrl: 'https://cnn.it/2OBmcmp',
            webUrl: 'https://cnn.it/2P8Dgzp'
        },
        {
            title: 'Banning plastic straws is a little like spitting in the wind',
            timestamp: '2 hours ago',
            description: 'The world is heating up dangerously and the oceans may be dying. In this context, the UKs proposed plan to ban plastic straws feels a little like spitting in the wind.',
            imgUrl: 'https://cnn.it/2EDd4cn',
            webUrl: 'https://cnn.it/2q7DAjX'
        },
        {
            title: 'A new, cheaper Tesla model 3 is on its way',
            timestamp: '1 day ago',
            description: 'Tesla is now offering a slightly cheaper version of its lowest priced car, the Model 3',
            imgUrl: 'https://cnn.it/2EB14rB',
            webUrl: 'https://cnn.it/2Cu56Q7'
        },
        {
            title: 'The worlds largest organism is dying, but there are still ways to save it',
            timestamp: '',
            description: 'Behold the Pando aspen clone, a sprawling carpet of vibrant green-yellow quaking aspens occupying more than 100 acres outside the Fishlake National Forest in Utah',
            imgUrl: 'https://cnn.it/2OBmcmp',
            webUrl: 'https://cnn.it/2P8Dgzp'
        },
        {
            title: 'Banning plastic straws is a little like spitting in the wind',
            timestamp: '2 hours ago',
            description: 'The world is heating up dangerously and the oceans may be dying. In this context, the UKs proposed plan to ban plastic straws feels a little like spitting in the wind.',
            imgUrl: 'https://cnn.it/2EDd4cn',
            webUrl: 'https://cnn.it/2q7DAjX'
        },
        {
            title: 'A new, cheaper Tesla model 3 is on its way',
            timestamp: '1 day ago',
            description: 'Tesla is now offering a slightly cheaper version of its lowest priced car, the Model 3',
            imgUrl: 'https://cnn.it/2EB14rB',
            webUrl: 'https://cnn.it/2Cu56Q7'
        }

    ]
})
const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
        if (!authUser) {
            state.commit('SET_USER', null)

            this.$router.push('/login')
        } else {
            const { uid, email } = authUser
            state.commit('SET_USER', { uid, email })
        }
    }
}

const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}


const getters = {
    getUser(state) {
        return state.user
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
    state
}
