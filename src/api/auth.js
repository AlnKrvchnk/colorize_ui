export default function(instance){
    return{
        signIn(payload){
            // return instance.post('api/signIn/',payload)
            return instance.post('api/token/',payload)
        },
        signUp(payload){
            return instance.post('api/signUp/',payload)
        },
        logout(){
            return instance.delete('auth/logout')

        }

    }
}