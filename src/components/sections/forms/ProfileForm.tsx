/* eslint-disable sonarjs/no-duplicate-string */

'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LuAlertCircle } from 'react-icons/lu'
import * as yup from 'yup'

import { Button } from '@/components/ui/button'

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`
}

const schema = yup.object({
  name: yup.string(),
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
  name: string | undefined
  email: string
  password: string
  confirmPassword: string | undefined
}
function ProfileForm() {
  // Get session if session exists to populate form
  const values = useSession()
  const inputDisabled = !!values?.data?.user
  // useRouter for handling redirect after form submission
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  })

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
    // eslint-disable-next-line no-console
    console.log('form data:', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 !mt-0"
    >
      <div className="my-6">
        <Image
          src={values?.data?.user.image ?? '/images/profile.jpeg'}
          alt={values?.data?.user.name ?? ''}
          width={200}
          height={200}
          className="h-24 w-24 rounded-full border-2 border-gray-400 hover:border-blue-600"
        />
      </div>
      <label
        htmlFor="name"
        className="block text-xs font-medium leading-6 text-gray-900"
      >
        <span className="pl-2">name</span>
        <div className="relative rounded-md shadow-sm">
          <input
            disabled={!!inputDisabled}
            defaultValue={values?.data?.user.name}
            type="text"
            id="name"
            className={clsx(
              'block w-full rounded-md border-0 p-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-rose-900 focus:ring-rose-500 ring-rose-300 placeholder:text-rose-300':
                  errors?.name,
                'text-gray-800 focus:ring-blue-500 ring-blue-300': !errors,
                'text-gray-400': !!inputDisabled,
              }
            )}
            aria-invalid={errors?.name ? 'true' : 'false'}
            aria-describedby={errors?.name ? `name-error` : undefined}
            {...register('name', {
              required: 'Please enter your name address',
            })}
          />
          {errors?.name && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuAlertCircle
                className="h-5 w-5 text-rose-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </label>
      {errors?.name && (
        <p className="text-xs !mt-1 pl-2 text-red-600" id={`password-error"`}>
          {errors.name.message}
        </p>
      )}
      <label
        htmlFor="email"
        className="block text-xs font-medium leading-6 text-gray-900"
      >
        <span className="pl-2">Email</span>
        <div className="relative rounded-md shadow-sm">
          <input
            disabled={!!inputDisabled}
            defaultValue={values?.data?.user.email}
            type="email"
            id="email"
            className={clsx(
              'block w-full rounded-md border-0 p-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-rose-900 focus:ring-rose-500 ring-rose-300 placeholder:text-rose-300':
                  errors?.email,
                'text-gray-800 focus:ring-blue-500 ring-blue-300': !errors,
                'text-gray-400': !!inputDisabled,
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
      <div className="pt-6 flex justify-start">
        <Button type="submit">Edit Profile</Button>
      </div>
    </form>
  )
}

export default ProfileForm
