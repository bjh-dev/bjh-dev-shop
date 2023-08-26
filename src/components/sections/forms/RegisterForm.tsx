/* eslint-disable sonarjs/no-duplicate-string */

'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LuAlertCircle } from 'react-icons/lu'
import * as yup from 'yup'

import { Button } from '@/components/ui/button'

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`
}

const schema = yup.object({
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('Please provide an email address'),
  password: yup
    .string()
    .required('Please enter a password')
    // check minimum characters
    .min(6, 'Password must have at least 6 characters')
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError('digit')),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export interface IFormValues {
  email: string
  password: string
  confirmPassword: string | undefined
}
function CredentialsForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  })
  const router = useRouter()

  // eslint-disable-next-line consistent-return
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const signInResponse = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (signInResponse && !signInResponse.error) {
      return router.push('/')
    }
    console.log('form data:', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 !mt-0"
    >
      <label
        htmlFor="email"
        className="block text-xs font-medium leading-6 text-gray-900"
      >
        <span className="pl-2">Email</span>
        <div className="relative rounded-md shadow-sm">
          <input
            type="email"
            id="email"
            className={clsx(
              'block w-full rounded-md border-0 p-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-rose-900 focus:ring-rose-500 ring-rose-300 placeholder:text-rose-300':
                  errors?.email,
                'text-gray-800 focus:ring-blue-500 ring-blue-300': !errors,
              }
            )}
            placeholder="john.smith@example.com"
            aria-invalid={errors?.email ? 'true' : 'false'}
            aria-describedby={errors?.email ? `email-error` : undefined}
            {...register('email', {
              required: 'Please enter your email address',
            })}
          />
          {errors?.email && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuAlertCircle
                className="h-5 w-5 text-rose-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </label>
      {errors?.email && (
        <p className="text-xs !mt-1 pl-2 text-red-600" id={`password-error"`}>
          {errors.email.message}
        </p>
      )}
      <label
        htmlFor="password"
        className="block text-xs font-medium leading-6 text-gray-900"
      >
        <span className="pl-2">password</span>
        <div className="relative rounded-md shadow-sm">
          <input
            type="password"
            id="password"
            className={clsx(
              'block w-full rounded-md border-0 p-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-rose-900 focus:ring-rose-500 ring-rose-300 placeholder:text-rose-300':
                  errors?.password,
                'text-gray-800 focus:ring-blue-500 ring-blue-300': !errors,
              }
            )}
            placeholder="john.smith@example.com"
            aria-invalid={errors?.password ? 'true' : 'false'}
            aria-describedby={errors?.password ? `password-error` : undefined}
            {...register('password', {
              required: 'Please enter your password address',
            })}
          />
          {errors?.password && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuAlertCircle
                className="h-5 w-5 text-rose-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </label>
      {errors?.password && (
        <p className="text-xs !mt-1 pl-2 text-red-600" id={`password-error"`}>
          {errors.password.message}
        </p>
      )}
      <label
        htmlFor="confirmPassword"
        className="block text-xs font-medium leading-6 text-gray-900"
      >
        <span className="pl-2">Confirm Password</span>
        <div className="relative rounded-md shadow-sm">
          <input
            type="confirmPassword"
            id="confirmPassword"
            className={clsx(
              'block w-full rounded-md border-0 p-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-rose-900 focus:ring-rose-500 ring-rose-300 placeholder:text-rose-300':
                  errors?.confirmPassword,
                'text-gray-800 focus:ring-blue-500 ring-blue-300': !errors,
              }
            )}
            placeholder="john.smith@example.com"
            aria-invalid={errors?.confirmPassword ? 'true' : 'false'}
            aria-describedby={
              errors?.confirmPassword ? `confirmPassword-error` : undefined
            }
            {...register('confirmPassword', {
              required: 'Please enter your confirmPassword address',
            })}
          />
          {errors?.confirmPassword && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuAlertCircle
                className="h-5 w-5 text-rose-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </label>
      {errors?.confirmPassword && (
        <p
          className="text-xs !mt-1 pl-2 text-red-600"
          id={`confirmPassword-error"`}
        >
          {errors.confirmPassword.message}
        </p>
      )}
      <div className="pt-6">
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
      <div>
        <p className="text-xs mt-4 text-center">
          If you already have an account{' '}
          <Link
            href="/account/sign-in"
            className="text-rose-600 hover:text-rose-700 underline underline-offset-2"
          >
            Sign In
          </Link>
          .
        </p>
      </div>
    </form>
  )
}

export default CredentialsForm
