import clsx from 'clsx'
import { UseFormRegister } from 'react-hook-form'
import { LuAlertCircle } from 'react-icons/lu'

import { generateHtmlId } from '@/lib/utils'

type InputProps = {
  className?: string
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'date'
    | 'number'
    | 'tel'
    | 'datetime-local'
    | 'url'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any
  placeholder?: string
  defaultValue?: string
  helpText?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any
  required?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

function Input({
  type,
  label,
  placeholder,
  defaultValue,
  helpText,
  errors,
  register,
  required,
}: InputProps) {
  const sanitisedLabel = generateHtmlId(label)

  return (
    <>
      <label
        htmlFor={sanitisedLabel}
        className="block text-xs font-medium leading-6 text-gray-900"
      >
        <span className="pl-2">{label}</span>
        <div className="relative rounded-md shadow-sm">
          <input
            type={type}
            id={sanitisedLabel}
            className={clsx(
              'block w-full rounded-md border-0 p-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
              {
                'text-rose-900 focus:ring-rose-500 ring-rose-300 placeholder:text-rose-300':
                  errors?.label,
                'text-gray-800 focus:ring-blue-500 ring-blue-300': !errors,
              }
            )}
            placeholder={placeholder ?? undefined}
            defaultValue={defaultValue ?? undefined}
            aria-invalid={errors?.label ? 'true' : 'false'}
            aria-describedby={
              errors?.label ? `${sanitisedLabel}-error` : undefined
            }
            {...register(label, { required })}
          />
          {errors?.label && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuAlertCircle
                className="h-5 w-5 text-rose-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </label>
      {errors?.label ? (
        <p
          className="text-xs !mt-1 pl-2 text-red-600"
          id={`${sanitisedLabel}-error"`}
        >
          {errors.label.message}
        </p>
      ) : (
        <p
          className="text-xs !mt-1 pl-2 text-gray-500"
          id={`${sanitisedLabel}-description"`}
        >
          {helpText}
        </p>
      )}
    </>
  )
}

export default Input
