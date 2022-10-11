/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { Search } from "components/ui"
import cn from "classnames"
import s from "./Navbar.module.css"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Profile = dynamic(() => import("components/common/Profile"), { ssr: false })
const listMenus = [
  {
    title: "Trang chủ",
    path: "/"
  },
  {
    title: "Livescore",
    path: "/livescore"
  }
]

export default function Navbar() {
  const router = useRouter()
  const [index, setIndex] = useState("/")
  const [isBlack, setBlack] = useState(false)
  const isMounter = useRef()

  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 1) {
          if (!isMounter.current) {
            setBlack(true)
            isMounter.current = true
          }
        } else {
          if (isMounter.current) {
            setBlack(false)
            isMounter.current = false
          }
        }
      })
      return () => window.removeEventListener("scroll", null)
    }
  }, [])

  useEffect(() => {
    setIndex(router.asPath)
  }, [router])

  return (
    <nav
      className={cn(
        s.nav,
        isBlack ? s.black : s.white,
        "px-10 2xl:px-12 top-0 text-white w-full fixed z-30 border-b border-dark-500"
      )}
    >
      <div className="container__screen m-auto flex w-full justify-between items-center">
        <div className="flex relative items-center">
          <Link href="/">
            <a className="py-1 flex mr-2 md:mr-6" style={{ minWidth: 141 }}>
              {icLogo}
            </a>
          </Link>
          <div className="flex items-center ">
            <div className="flex items-center">
              {listMenus.map(({ title, path }, key) => {
                return (
                  <Link href={path} key={key}>
                    <a>
                      <div
                        className={cn("px-2 h-16 flex items-center text-dark-300", {
                          [s.active]: index === path
                        })}
                      >
                        {title}
                      </div>
                    </a>
                  </Link>
                )
              })}
              <a className="px-2 h-16 flex items-center text-dark-300" href="https://onsports.vn/" target="__blank">
                Tin tức
              </a>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <Search />
          <Profile />
        </div>
      </div>
    </nav>
  )
}

const icLogo = (
  <svg width="205" height="26" viewBox="0 0 205 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2165_9513)">
      <path
        d="M89.4999 11.2573H80.2419C79.9071 11.2573 79.7033 11.4649 79.645 11.806L79.4121 13.304C79.4121 13.4672 79.4121 13.6452 79.5723 13.8083C79.7033 13.9121 79.8634 14.0456 80.0381 14.0456H87.2436H88.6702C89.1651 14.1049 89.6018 14.2088 90.0094 14.4461C90.4461 14.7279 90.7809 15.0245 91.0721 15.3656C91.4069 15.7661 91.6107 16.1517 91.7417 16.5967C91.8436 17.0713 91.9018 17.5756 91.7999 18.0947L91.1303 22.7073C90.9556 23.4489 90.6062 24.1312 90.024 24.6503C89.4563 25.1546 88.7867 25.3919 87.9278 25.3919H72.0319L72.192 24.5168C72.5996 22.5442 74.3319 21.0907 76.3552 21.0907H85.3804C85.6715 21.0907 85.919 20.883 86.0063 20.5419L86.3411 18.7769C86.3411 18.5396 86.2683 18.3616 86.1664 18.243C86.0645 18.0798 85.8753 18.0057 85.6715 18.0057H77.3305C76.8065 18.0057 76.3261 17.9019 75.8603 17.6646C75.4236 17.4569 75.0306 17.1603 74.6958 16.7747C74.4192 16.4335 74.1717 15.9589 74.0262 15.514C73.8515 15.0097 73.8515 14.4906 73.8951 13.9863L74.5648 9.69992C74.6958 8.91384 75.0306 8.23158 75.6565 7.69764C76.2533 7.25269 76.9229 6.95605 77.7236 6.95605H93.5613L93.4594 7.69764C93.1973 9.75925 91.5233 11.2573 89.4999 11.2573Z"
        fill="url(#paint0_linear_2165_9513)"
      />
      <path
        d="M117.245 21.7581L118.919 9.43295C119.021 8.69137 119.327 8.06843 119.851 7.63831C120.418 7.1637 121.044 6.95605 121.758 6.95605H134.859C135.383 6.95605 135.79 7.05988 136.198 7.22303C136.605 7.43067 136.998 7.69764 137.304 8.06843C137.566 8.3799 137.828 8.81002 137.93 9.22531C138.09 9.69992 138.134 10.1152 138.09 10.5898L136.373 22.915C136.271 23.6566 135.965 24.235 135.441 24.7096C134.917 25.1842 134.305 25.3919 133.578 25.3919H120.418C119.953 25.3919 119.487 25.2881 119.079 25.0804C118.672 24.8728 118.279 24.6058 117.973 24.2943C117.711 23.9235 117.449 23.5527 117.347 23.1375C117.201 22.6628 117.143 22.2327 117.245 21.7581ZM123.999 12.1472L122.704 21.1203H130.331C130.841 21.1203 131.263 20.7199 131.307 20.2008L132.544 11.2276H124.975C124.465 11.2276 124.043 11.628 123.999 12.1472Z"
        fill="url(#paint1_linear_2165_9513)"
      />
      <path
        d="M140.667 6.95605H158.499C158.965 6.95605 159.43 7.05988 159.838 7.26752C160.246 7.4455 160.595 7.74214 160.901 8.0536C161.163 8.45406 161.366 8.82485 161.527 9.2698C161.658 9.68509 161.701 10.1597 161.628 10.6343L160.537 17.7684C160.406 18.51 160.1 19.1032 159.532 19.563C158.994 20.0376 158.368 20.2156 157.669 20.2156H156.475L158.979 25.4809H153.52L151.017 20.2156H144.35L144.015 22.4997C143.738 24.2053 142.283 25.4809 140.579 25.4809H138.105L140.667 6.95605ZM145.034 15.9144H155.34L156.039 11.3017H145.732L145.034 15.9144Z"
        fill="url(#paint2_linear_2165_9513)"
      />
      <path
        d="M179.897 11.2571H175.894L174.293 22.4254C174.031 24.131 172.619 25.4065 170.901 25.4065H167.873L169.911 11.3164H163.579L164.22 6.9707H183.391C183.129 8.75051 182.27 11.2571 179.897 11.2571Z"
        fill="url(#paint3_linear_2165_9513)"
      />
      <path
        d="M200.175 11.2573H190.916C190.582 11.2573 190.378 11.4649 190.32 11.806L190.087 13.304C190.087 13.4672 190.087 13.6452 190.247 13.8083C190.378 13.9121 190.538 14.0456 190.713 14.0456H197.918H199.345C199.84 14.1049 200.276 14.2088 200.684 14.4461C201.121 14.7279 201.456 15.0245 201.747 15.3656C202.081 15.7661 202.285 16.1517 202.416 16.5967C202.518 17.0713 202.576 17.5756 202.475 18.0947L201.805 22.7073C201.616 23.4489 201.281 24.1312 200.699 24.6503C200.131 25.1546 199.461 25.3919 198.602 25.3919H182.707L182.867 24.5168C183.274 22.5442 185.006 21.0907 187.03 21.0907H196.055C196.332 21.0907 196.594 20.883 196.681 20.5419L197.016 18.7769C197.016 18.5396 196.943 18.3616 196.841 18.243C196.739 18.0798 196.55 18.0057 196.346 18.0057H188.005C187.481 18.0057 187.001 17.9019 186.535 17.6646C186.098 17.4569 185.705 17.1603 185.37 16.7747C185.094 16.4335 184.861 15.9589 184.701 15.514C184.526 15.0097 184.526 14.4906 184.57 13.9863L185.239 9.69992C185.37 8.91384 185.705 8.23158 186.331 7.69764C186.928 7.25269 187.598 6.95605 188.398 6.95605H204.207L204.105 7.69764C203.872 9.75925 202.183 11.2573 200.175 11.2573Z"
        fill="url(#paint4_linear_2165_9513)"
      />
      <path
        d="M95.6429 6.95605L95.0752 11.3907H110.636C110.636 11.3907 111.131 11.2869 110.942 12.4883C110.767 13.6897 110.374 15.9589 110.374 15.9589H98.889C98.889 15.9589 94.7258 15.5585 93.998 20.1711C93.2847 24.7838 93.241 25.3622 93.241 25.3622H96.3998C96.3998 25.3622 99.0491 25.0359 99.3839 22.5887L99.7042 20.1415H113.242C113.242 20.1415 115.076 19.9635 115.542 17.7684C116.008 15.5733 116.721 10.0114 116.721 10.0114C116.721 10.0114 116.896 6.95605 114.348 6.95605H95.6429Z"
        fill="url(#paint5_linear_2165_9513)"
      />
      <path
        d="M12.5969 25.4958H7.06532L0.849609 7.03027H6.07547L9.90388 19.6372H9.97666L13.7905 7.03027H18.7398L12.5969 25.4958Z"
        fill="url(#paint6_linear_2165_9513)"
      />
      <path
        d="M25.9163 4.16771H20.9379V0H25.9163V4.16771ZM20.9379 7.03023H25.9163V25.4957H20.9379V7.03023Z"
        fill="url(#paint7_linear_2165_9513)"
      />
      <path
        d="M29.8466 7.03046H34.5629V9.61118H34.6648C34.9851 9.09207 35.349 8.63229 35.7711 8.24666C36.1933 7.86104 36.6445 7.54957 37.1249 7.29743C37.6053 7.04529 38.1148 6.85248 38.6388 6.73383C39.1628 6.60034 39.6869 6.54102 40.2109 6.54102C41.5356 6.54102 42.6273 6.719 43.4862 7.08979C44.345 7.46058 45.0146 7.96486 45.5096 8.63229C46.0045 9.29972 46.3539 10.1006 46.5431 11.035C46.7323 11.9694 46.8342 13.0076 46.8342 14.1497V25.4959H41.8558V15.0693C41.8558 13.5564 41.6084 12.4292 41.128 11.6728C40.6476 10.9164 39.8179 10.5456 38.6679 10.5456C37.9983 10.5456 37.416 10.6494 36.9211 10.8422C36.4262 11.035 36.0332 11.3613 35.7129 11.7766C35.3927 12.2067 35.1743 12.7555 35.0142 13.4081C34.8686 14.0755 34.7958 14.8764 34.7958 15.8108V25.4959H29.832V7.03046H29.8466Z"
        fill="url(#paint8_linear_2165_9513)"
      />
      <path
        d="M50.3861 12.711C50.4589 11.5245 50.75 10.5307 51.274 9.74467C51.7981 8.94375 52.4531 8.32082 53.2392 7.84621C54.0252 7.37159 54.9278 7.04529 55.9031 6.83765C56.8929 6.64484 57.8973 6.54102 58.9017 6.54102C59.5131 6.54102 60.1245 6.57068 60.7504 6.61517C61.3764 6.6745 61.9878 6.76349 62.57 6.91181C63.1523 7.06013 63.7055 7.25294 64.2295 7.50508C64.7535 7.75722 65.2048 8.06868 65.5833 8.46914C65.9763 8.85476 66.282 9.32938 66.5003 9.87815C66.7333 10.4269 66.8497 11.0647 66.8497 11.7914V21.3876C66.8497 21.8029 66.8643 22.2181 66.8788 22.6334C66.9079 23.0487 66.937 23.4343 66.9953 23.7903C67.0535 24.1463 67.1117 24.4726 67.1991 24.7692C67.2718 25.0658 67.3737 25.3031 67.4902 25.4959H62.439C62.3517 25.1993 62.2643 24.9175 62.2061 24.6209C62.1479 24.3242 62.1042 24.0276 62.0751 23.7161C61.6821 24.1314 61.2454 24.4874 60.765 24.784C60.2846 25.0807 59.7897 25.3031 59.2657 25.4959C58.7416 25.6739 58.203 25.8074 57.6353 25.8816C57.0822 25.9706 56.529 26.0002 55.9758 26.0002C55.117 26.0002 54.3164 25.8964 53.5594 25.6739C52.8025 25.4515 52.1474 25.1103 51.5943 24.6505C51.0411 24.1908 50.6044 23.6123 50.2842 22.9152C49.9639 22.2181 49.8038 21.4024 49.8038 20.4532C49.8038 19.4001 49.9785 18.5399 50.3278 17.8724C50.6772 17.205 51.143 16.6562 51.7253 16.241C52.3076 15.8257 52.9626 15.5142 53.6904 15.3214C54.4328 15.1137 55.1752 14.9654 55.9613 14.8616C56.7328 14.743 57.4606 14.654 58.1739 14.5798C58.8872 14.5056 59.5131 14.387 60.0517 14.2535C60.6049 14.1052 61.0416 13.8975 61.3618 13.6306C61.6821 13.3636 61.8568 12.9632 61.8568 12.4292C61.8568 11.8953 61.7694 11.4651 61.5947 11.124C61.4201 10.7977 61.1871 10.5456 60.896 10.3676C60.6049 10.1896 60.2701 10.071 59.8625 10.0116C59.4695 9.95231 59.0619 9.92265 58.6252 9.92265C57.679 9.92265 56.9075 10.1451 56.3252 10.5752C55.7429 11.0054 55.4081 11.7173 55.3208 12.7258H50.3861V12.711ZM61.8859 16.4634C61.6821 16.6562 61.4201 16.8046 61.0998 16.9084C60.7796 17.0122 60.4448 17.116 60.0663 17.1754C59.6878 17.2495 59.3093 17.3088 58.9163 17.3533C58.5233 17.3978 58.1302 17.4572 57.7372 17.5313C57.3442 17.6055 56.9803 17.7093 56.6309 17.8428C56.2815 17.9614 55.9613 18.1246 55.6847 18.3174C55.4081 18.5102 55.1898 18.7772 55.0297 19.0886C54.8695 19.4001 54.7968 19.7857 54.7968 20.2604C54.7968 20.735 54.8841 21.1206 55.0442 21.4321C55.2043 21.7287 55.4372 21.966 55.7138 22.144C56.005 22.322 56.3252 22.4406 56.6891 22.5148C57.053 22.5889 57.4461 22.6186 57.8537 22.6186C58.5087 22.6186 59.0473 22.5444 59.4986 22.3813C59.9498 22.2181 60.3283 22.0253 60.6194 21.7584C60.9106 21.5062 61.1435 21.2244 61.3182 20.8981C61.4783 20.5867 61.6093 20.2752 61.6966 19.9637C61.784 19.6523 61.8276 19.3556 61.8568 19.059C61.8713 18.7772 61.8859 18.5399 61.8859 18.3471V16.4634Z"
        fill="url(#paint9_linear_2165_9513)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2165_9513"
        x1="3.37388"
        y1="-4.02656"
        x2="318.216"
        y2="73.1441"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2165_9513"
        x1="6.00973"
        y1="-14.7804"
        x2="320.852"
        y2="62.3903"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2165_9513"
        x1="7.21928"
        y1="-19.715"
        x2="322.061"
        y2="57.4556"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2165_9513"
        x1="8.82531"
        y1="-26.2673"
        x2="323.667"
        y2="50.9033"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_2165_9513"
        x1="9.87128"
        y1="-30.5343"
        x2="324.713"
        y2="46.6362"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_2165_9513"
        x1="4.61993"
        y1="-9.11018"
        x2="319.462"
        y2="68.0605"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_2165_9513"
        x1="-0.747479"
        y1="12.7879"
        x2="314.095"
        y2="89.9586"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_2165_9513"
        x1="0.681589"
        y1="6.95762"
        x2="315.524"
        y2="84.1283"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_2165_9513"
        x1="0.648415"
        y1="7.09308"
        x2="315.49"
        y2="84.2637"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_2165_9513"
        x1="1.89815"
        y1="1.99441"
        x2="316.74"
        y2="79.1651"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00DDFF" />
        <stop offset="1" stopColor="#1800A9" />
      </linearGradient>
      <clipPath id="clip0_2165_9513">
        <rect width="203.357" height="26" fill="white" transform="translate(0.849609)" />
      </clipPath>
    </defs>
  </svg>
)