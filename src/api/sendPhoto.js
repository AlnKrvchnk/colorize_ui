export default function(instance){
    return{
        sendPhoto(payload){
            return instance.post('api/colorize/',payload)

        },
        

    }
}