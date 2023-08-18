import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import { settingsQuery } from '@/lib/queries'
import { SettingsPayload } from '@/lib/types'
import { getClient } from '@/sanity/lib/client'

import ThemeToggle from '../theme-toggle'

const Footer = async () => {
  const client = getClient()

  const [settings] = await Promise.all([
    client.fetch<SettingsPayload>(settingsQuery),
  ])

  const {
    facebookPage,
    twitterCompanyProfile,
    githubCompanyProfile,
    instagramBusinessProfile,
    pinterestBusinessProfile,
    linkedinBusinessPage,
    youTubeChannel,
    title,
  } = settings

  return (
    <footer>
      <div className="container">
        <div className="py-12 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-center space-x-6 md:order-2">
            {facebookPage && (
              <a
                href={`https://facebook.com/${facebookPage}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-600"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook />
              </a>
            )}
            {twitterCompanyProfile && (
              <a
                href={`https://twitter.com/${twitterCompanyProfile}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 dark:hover:text-blue-400"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter />
              </a>
            )}
            {githubCompanyProfile && (
              <a
                href={`https://github.com/${githubCompanyProfile}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-600"
              >
                <span className="sr-only">Github</span>
                <FaGithub />
              </a>
            )}
            {instagramBusinessProfile && (
              <a
                href={`https://instagram.com/${instagramBusinessProfile}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-600 dark:hover:text-rose-600"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram />
              </a>
            )}
            {pinterestBusinessProfile && (
              <a
                href={`https://www.pinterest.com.au/${pinterestBusinessProfile}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-600 dark:hover:text-rose-600"
              >
                <span className="sr-only">Pinterest</span>
                <FaPinterest />
              </a>
            )}
            {linkedinBusinessPage && (
              <a
                href={`https://linkedin.com/in/${linkedinBusinessPage}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-600"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </a>
            )}
            {youTubeChannel && (
              <a
                href={`https://linkedin.com/in/${youTubeChannel}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-600 dark:hover:text-rose-600"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube />
              </a>
            )}
            <div className="mx-4">
              <ThemeToggle />
            </div>
          </div>
          <p className="mt-6 text-center font-exp-reg text-xs md:order-1 md:mt-0">
            &copy; {title} {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
