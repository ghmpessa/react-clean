import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeRemoteddAccount } from '../../usecases/add-account/remote-add-acount-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteddAccount()}
      validation={makeSignUpValidation()}
    />
  )
}
