new Vue({
    el: '#app',
    data: {
        list: [
            {
                text:'programmare',
                done: true
            },
            {
                text:'cucinare',
                done: false
            },
            {
                text:'sistemare casa',
                done: false
            },
            {
                text:'dormire',
                done: true
            }
        ],
        temporaryItem: ''
    },
    methods: {
        removeItem: function(index){
            this.list.splice(index, 1)
        },
        addItem: function(){
            this.list.push({
                text: this.temporaryItem,
                done: false,
            })
            this.temporaryItem = ''
        }
    }
})