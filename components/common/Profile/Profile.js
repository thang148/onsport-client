/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import useStore from "components/ui/Context"
import Image from "next/image"
import { memo } from "react"

// eslint-disable-next-line react/display-name
const Profile = memo(() => {
  const { userInfo, togleModalLogin } = useStore()
  const { avatar, fullname } = userInfo
  function onChangeModal() {
    togleModalLogin()
  }

  return (
    <div className="relative flex items-center text-dark-300">
      {fullname ? (
        <Link href="/profile" key={1}>
          <a>
            {avatar ? (
              <Image className="rounded-full cursor-pointer" src={userInfo?.avatar} width={32} height={32} />
            ) : (
              <div>
                {fullname ? (
                  <div className="rounded-full w-9 h-9 flex items-center justify-center bg-gray-700">{fullname[0]}</div>
                ) : (
                  DfAvatar
                )}
              </div>
            )}
          </a>
        </Link>
      ) : (
        <div className="flex items-center" onClick={onChangeModal} role="button" tabIndex="0" onKeyDown={onChangeModal}>
          {login}
        </div>
      )}
    </div>
  )
})
export default Profile

const login = (
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.8496 2.66669C13.3273 2.71161 9.96196 4.13079 7.47115 6.6216C4.98033 9.11241 3.56115 12.4778 3.51624 16C3.5327 18.0519 4.02253 20.0723 4.94758 21.9039C5.87264 23.7355 7.20796 25.3289 8.84957 26.56V26.6667H8.9829C11.2405 28.3967 14.0054 29.3342 16.8496 29.3342C19.6938 29.3342 22.4587 28.3967 24.7162 26.6667H24.8496V26.56C26.4912 25.3289 27.8265 23.7355 28.7516 21.9039C29.6766 20.0723 30.1664 18.0519 30.1829 16C30.138 12.4778 28.7188 9.11241 26.228 6.6216C23.7372 4.13079 20.3718 2.71161 16.8496 2.66669ZM11.6096 25.24C11.8042 24.3486 12.2978 23.5505 13.0083 22.9782C13.7189 22.4058 14.6038 22.0936 15.5162 22.0934H18.1829C19.0953 22.0936 19.9802 22.4058 20.6908 22.9782C21.4014 23.5505 21.8949 24.3486 22.0896 25.24C20.5014 26.1744 18.6922 26.6672 16.8496 26.6672C15.0069 26.6672 13.1977 26.1744 11.6096 25.24ZM24.3296 23.52C23.8224 22.308 22.9684 21.2728 21.8748 20.5445C20.7812 19.8162 19.4968 19.4273 18.1829 19.4267H15.5162C14.2023 19.4273 12.9179 19.8162 11.8243 20.5445C10.7307 21.2728 9.87673 22.308 9.36957 23.52C8.37045 22.5373 7.57477 21.3674 7.02799 20.0771C6.4812 18.7868 6.19404 17.4014 6.1829 16C6.21749 13.1818 7.3524 10.4887 9.34534 8.49579C11.3383 6.50285 14.0313 5.36794 16.8496 5.33335C19.6678 5.36794 22.3609 6.50285 24.3538 8.49579C26.3467 10.4887 27.4817 13.1818 27.5162 16C27.5051 17.4014 27.2179 18.7868 26.6712 20.0771C26.1244 21.3674 25.3287 22.5373 24.3296 23.52Z"
      fill="#B3B3B3"
    />
    <path
      d="M16.8496 8.00001C16.1448 7.98359 15.4439 8.11032 14.7894 8.37253C14.1349 8.63474 13.5404 9.02699 13.0418 9.52555C12.5433 10.0241 12.151 10.6186 11.8888 11.2731C11.6266 11.9276 11.4999 12.6285 11.5163 13.3333C11.4999 14.0382 11.6266 14.7391 11.8888 15.3936C12.151 16.0481 12.5433 16.6426 13.0418 17.1411C13.5404 17.6397 14.1349 18.0319 14.7894 18.2942C15.4439 18.5564 16.1448 18.6831 16.8496 18.6667C17.5545 18.6831 18.2554 18.5564 18.9099 18.2942C19.5644 18.0319 20.1589 17.6397 20.6574 17.1411C21.156 16.6426 21.5482 16.0481 21.8105 15.3936C22.0727 14.7391 22.1994 14.0382 22.183 13.3333C22.1994 12.6285 22.0727 11.9276 21.8105 11.2731C21.5482 10.6186 21.156 10.0241 20.6574 9.52555C20.1589 9.02699 19.5644 8.63474 18.9099 8.37253C18.2554 8.11032 17.5545 7.98359 16.8496 8.00001ZM16.8496 16C16.4949 16.0172 16.1405 15.9599 15.8092 15.832C15.4779 15.704 15.177 15.5082 14.9259 15.2571C14.6748 15.006 14.479 14.7051 14.351 14.3738C14.2231 14.0425 14.1658 13.6881 14.183 13.3333C14.1658 12.9786 14.2231 12.6242 14.351 12.2929C14.479 11.9616 14.6748 11.6607 14.9259 11.4096C15.177 11.1585 15.4779 10.9627 15.8092 10.8347C16.1405 10.7068 16.4949 10.6495 16.8496 10.6667C17.2044 10.6495 17.5588 10.7068 17.8901 10.8347C18.2214 10.9627 18.5223 11.1585 18.7734 11.4096C19.0245 11.6607 19.2203 11.9616 19.3483 12.2929C19.4762 12.6242 19.5335 12.9786 19.5163 13.3333C19.5335 13.6881 19.4762 14.0425 19.3483 14.3738C19.2203 14.7051 19.0245 15.006 18.7734 15.2571C18.5223 15.5082 18.2214 15.704 17.8901 15.832C17.5588 15.9599 17.2044 16.0172 16.8496 16Z"
      fill="#B3B3B3"
    />
  </svg>
)
const DfAvatar = (
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.8496 2.66666C13.3274 2.71158 9.96201 4.13075 7.47119 6.62157C4.98038 9.11238 3.5612 12.4777 3.51628 16C3.53275 18.0519 4.02258 20.0723 4.94763 21.9039C5.87268 23.7355 7.208 25.3289 8.84961 26.56V26.6667H8.98295C11.2405 28.3966 14.0054 29.3342 16.8496 29.3342C19.6938 29.3342 22.4587 28.3966 24.7163 26.6667H24.8496V26.56C26.4912 25.3289 27.8265 23.7355 28.7516 21.9039C29.6767 20.0723 30.1665 18.0519 30.1829 16C30.138 12.4777 28.7189 9.11238 26.228 6.62157C23.7372 4.13075 20.3719 2.71158 16.8496 2.66666V2.66666ZM11.6096 25.24C11.8043 24.3486 12.2978 23.5505 13.0084 22.9782C13.719 22.4058 14.6039 22.0936 15.5163 22.0933H18.1829C19.0954 22.0936 19.9803 22.4058 20.6908 22.9782C21.4014 23.5505 21.895 24.3486 22.0896 25.24C20.5014 26.1744 18.6923 26.6671 16.8496 26.6671C15.0069 26.6671 13.1978 26.1744 11.6096 25.24V25.24ZM24.3296 23.52C23.8225 22.3079 22.9684 21.2727 21.8748 20.5445C20.7813 19.8162 19.4968 19.4273 18.1829 19.4267H15.5163C14.2024 19.4273 12.918 19.8162 11.8244 20.5445C10.7308 21.2727 9.87678 22.3079 9.36961 23.52C8.3705 22.5373 7.57482 21.3674 7.02803 20.0771C6.48125 18.7868 6.19408 17.4013 6.18295 16C6.21753 13.1818 7.35244 10.4887 9.34538 8.49576C11.3383 6.50282 14.0314 5.36791 16.8496 5.33332C19.6678 5.36791 22.3609 6.50282 24.3538 8.49576C26.3468 10.4887 27.4817 13.1818 27.5163 16C27.5051 17.4013 27.218 18.7868 26.6712 20.0771C26.1244 21.3674 25.3287 22.5373 24.3296 23.52V23.52Z"
      fill="white"
      fillOpacity="0.38"
    />
    <path
      d="M16.8496 8.00001C16.1447 7.98359 15.4439 8.11032 14.7894 8.37253C14.1349 8.63474 13.5404 9.02699 13.0418 9.52555C12.5433 10.0241 12.151 10.6186 11.8888 11.2731C11.6266 11.9276 11.4999 12.6285 11.5163 13.3333C11.4999 14.0382 11.6266 14.7391 11.8888 15.3936C12.151 16.0481 12.5433 16.6426 13.0418 17.1411C13.5404 17.6397 14.1349 18.0319 14.7894 18.2942C15.4439 18.5564 16.1447 18.6831 16.8496 18.6667C17.5545 18.6831 18.2554 18.5564 18.9099 18.2942C19.5643 18.0319 20.1589 17.6397 20.6574 17.1411C21.156 16.6426 21.5482 16.0481 21.8104 15.3936C22.0726 14.7391 22.1994 14.0382 22.1829 13.3333C22.1994 12.6285 22.0726 11.9276 21.8104 11.2731C21.5482 10.6186 21.156 10.0241 20.6574 9.52555C20.1589 9.02699 19.5643 8.63474 18.9099 8.37253C18.2554 8.11032 17.5545 7.98359 16.8496 8.00001V8.00001ZM16.8496 16C16.4949 16.0172 16.1405 15.9599 15.8092 15.832C15.4779 15.704 15.177 15.5082 14.9259 15.2571C14.6747 15.006 14.4789 14.7051 14.351 14.3738C14.223 14.0425 14.1658 13.6881 14.1829 13.3333C14.1658 12.9786 14.223 12.6242 14.351 12.2929C14.4789 11.9616 14.6747 11.6607 14.9259 11.4096C15.177 11.1585 15.4779 10.9627 15.8092 10.8347C16.1405 10.7068 16.4949 10.6495 16.8496 10.6667C17.2043 10.6495 17.5587 10.7068 17.89 10.8347C18.2213 10.9627 18.5222 11.1585 18.7733 11.4096C19.0245 11.6607 19.2203 11.9616 19.3482 12.2929C19.4762 12.6242 19.5334 12.9786 19.5163 13.3333C19.5334 13.6881 19.4762 14.0425 19.3482 14.3738C19.2203 14.7051 19.0245 15.006 18.7733 15.2571C18.5222 15.5082 18.2213 15.704 17.89 15.832C17.5587 15.9599 17.2043 16.0172 16.8496 16Z"
      fill="white"
      fillOpacity="0.38"
    />
  </svg>
)