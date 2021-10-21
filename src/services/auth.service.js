//decimo: importar dependencias que se van a usar en la autenticacion
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const msg = require('../helpers/messages')

//undecimo: instanciar autenticacion
const authService = {
    singToken: async (id)=>{
        return jwt.sing({ id }, 'My app', {
            espiresIn: 60 * 60 * 24
        })
    },
    //login verificando si el usuario existe
    login: async () =>{
        try {
            const {email, password} = data
            let userExists = await User.findOne({email:email}, 'name email password').exec()
            if(await bcrypt.compare(password, userExists.password).then(res=>req)){
                const token = await this.singToken(userExits.id)
                return {
                    code: 200,
                    token
                }
            }else{
                return msg.authFailed
            }
        }catch (error){
            return error
        }
    },

    //registro de usuario con encriptacion bcrypt
    register: async ()=>{
        try {
            let hash = await bcrypt.hash(userData.password, 10).then(res => res)
            userData.password = hash
            await userData.save()
            let token = await this.singToken(userData._id)
            return {
                code: 200,
                token
            }
        } catch (error) {
            return error
        }
    }
}
module.exports = authService