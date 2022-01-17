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
        temporaryItem: {
            text: '',
            done: false
        }
    },
    methods: {
        removeItem: function(index){
            this.list.splice(index, 1)
        },
        addItem: function(){
            this.list.push(this.temporaryItem)
            this.temporaryItem = {
                text: '',
                done: false
            }
        }
    }
})