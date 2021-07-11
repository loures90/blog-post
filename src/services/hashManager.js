import bcrypt from 'bcrypt';

export const hashCreator = async(password) =>{
    const rounds = Number(process.env.BCRYPTY_COST)
    const salt = await bcrypt.genSalt(rounds)
    return await bcrypt.hash(password,salt)
}
export const hashCompare = async (password, encyptPassword) =>{
    return await bcrypt.compare(password, encyptPassword)
}