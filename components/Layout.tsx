import useTranslation from 'next-translate/useTranslation'
import React, { ReactNode } from 'react'
import Banner from '~/components/Banner'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { version } from '~/package.json'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const { t } = useTranslation()
  const isStaging = process.env.URL?.toString()
    .split('.')
    .includes('cduran')

  return (
    <main className="bg-gray-200 flex flex-col min-h-screen">
      {isStaging && (
        <Banner type="emphasis">{t('common:staging', { version })}</Banner>
      )}
      <Header />
      <div className="flex-auto min-h-screen-50">
        <div className="px-4 py-8">{children}</div>
      </div>
      <Footer />
    </main>
  )
}
