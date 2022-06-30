import instance from './instance'
import authModule from './auth'
import sendPhotoModule from './sendPhoto'

export default{
    auth:authModule(instance),
    sendPhoto:sendPhotoModule(instance),

}