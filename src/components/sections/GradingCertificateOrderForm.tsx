/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import * as React from 'react'
import {
  ApplePay,
  CreditCard,
  GooglePay,
  PaymentForm,
} from 'react-square-web-payments-sdk'

function GradingCertificateOrderForm() {
  return (
    <div>
      <h2 className="font-ext-bold text-xl">Order Your Certificate</h2>
      <hr className="border-rose-600 my-4" />
      <PaymentForm
        applicationId={process.env.NEXT_PUBLIC_SQUARE_APP_ID}
        locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID}
        createPaymentRequest={() => ({
          countryCode: 'AU',
          currencyCode: 'AUD',
          requestBillingContact: false,
          requestShippingContact: false,
          total: {
            amount: '41.79',
            label: 'Total',
          },
        })}
      >
        <ApplePay className="mt-4" />
        <GooglePay className="mt-4" />
        <CreditCard className="mt-4" includeInputLabels />
      </PaymentForm>
    </div>
  )
}

export default GradingCertificateOrderForm
