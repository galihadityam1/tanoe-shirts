import bcryptjs, { genSaltSync } from 'bcryptjs'

export const hashPassword = (password: string): string => bcryptjs.hashSync(password, genSaltSync(10))
export const comparePassword = (password: string, hash: string): boolean => bcryptjs.compareSync(password, hash)