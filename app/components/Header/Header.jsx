
import styles from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
    <header className={styles.header}>
    <div className={styles.headerpart1}>
      <div className={styles.logo}>
        <svg width="134" height="65" viewBox="0 0 134 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.8252 32.6276L49.6753 32.7869C48.3229 34.2298 46.9612 35.6728 45.6088 37.122L41.0895 32.8369C38.8314 30.7006 36.5733 28.5674 34.3183 26.4311C35.7425 24.9538 37.1667 23.4734 38.594 21.9961C38.9001 22.2897 39.3936 22.7644 40.0089 23.3485C40.4648 23.7826 40.8053 24.1043 40.9333 24.223C42.4169 25.6222 43.9004 27.0276 45.3808 28.4269C46.8644 29.8292 48.3417 31.2284 49.8252 32.6276Z" fill="#231F20" />
          <path d="M70.8853 10.4213L70.8603 10.4494L49.8252 32.6276L49.6784 32.7868L45.5932 37.0969L41.1551 32.8868L45.3808 28.4299L62.3088 10.5806L66.3003 6.36731L70.8353 10.4244L70.8853 10.4213Z" fill="#231F20" />
          <path d="M71.8722 32.2247L71.7222 32.384C70.3699 33.8269 69.0081 35.2699 67.6558 36.7191L60.4286 29.8667L64.6575 25.4098C65.5819 26.2843 66.5064 27.1526 67.4247 28.0271C68.9113 29.4263 70.3886 30.8255 71.8722 32.2247Z" fill="#5CD2DD" />
          <path d="M98.4389 4.20795L94.0016 0L63.1963 32.4841L67.6336 36.6921L98.4389 4.20795Z" fill="#5CD2DD" />
          <path d="M67.4278 28.0271C65.9973 29.5137 64.5637 31.0004 63.1333 32.4871L58.4828 28.0052L62.746 23.5858C64.3076 25.0631 65.8661 26.5435 67.4278 28.0271Z" fill="#5CD2DD" />
          <path d="M45.0007 6.46437L40.7242 10.9005L45.1603 15.1771L49.4369 10.7409L45.0007 6.46437Z" fill="#5CD2DD" />
          <path d="M12.5617 55.2118H14.1764V64.9657H13.3737C12.3462 64.9657 11.3468 64.7314 10.3723 64.2598C9.37598 63.782 8.53583 63.1136 7.85809 62.261V64.9688H7.05541C5.24081 64.9688 3.6417 64.3254 2.25498 63.0355C0.7527 61.6426 0 59.8904 0 57.776V55.2118H1.61472V57.776C1.61472 59.1971 2.09257 60.4339 3.04517 61.4864C3.92592 62.4515 4.99095 63.0418 6.24337 63.2542V55.2118H7.93304V57.776C7.93304 59.1971 8.4109 60.4339 9.36349 61.4864C10.2442 62.4515 11.3093 63.0418 12.5617 63.2542V55.2118Z" fill="#231F20" />
          <path d="M22.6311 64.9688C21.2506 64.9688 20.07 64.4784 19.0862 63.4946C18.1023 62.5108 17.612 61.3302 17.612 59.9497C17.612 58.5692 18.1023 57.3887 19.0862 56.4048C20.07 55.421 21.2506 54.9307 22.6311 54.9307C24.0115 54.9307 25.1921 55.421 26.1759 56.4048C27.1598 57.3887 27.6501 58.5692 27.6501 59.9497V60.7743H22.6311V59.1283H25.8948C25.7075 58.3912 25.3139 57.7853 24.7143 57.3075C24.1083 56.8296 23.415 56.5922 22.6342 56.5922C21.7097 56.5922 20.9195 56.9202 20.2605 57.5792C19.6015 58.2382 19.2736 59.0284 19.2736 59.9528C19.2736 60.8773 19.6015 61.6675 20.2605 62.3265C20.9195 62.9855 21.7097 63.3135 22.6342 63.3135V64.9688H22.6311Z" fill="#231F20" />
          <path d="M35.9204 52.4383C34.9585 52.4446 34.1745 52.7819 33.5686 53.4471C32.9627 54.1124 32.6566 54.9713 32.6566 56.0176V57.1388H34.3151V58.7754H32.6566V64.9688H31.0419V56.0176C31.0419 54.5153 31.501 53.2754 32.4193 52.2947C33.3375 51.3077 34.4994 50.808 35.9079 50.8018L35.9204 52.4383Z" fill="#57C8CE" />
          <path d="M37.1791 60.0591C37.1791 58.6755 37.6632 57.498 38.6315 56.5235C39.5997 55.5428 40.7615 55.0525 42.1201 55.0525V56.5579C41.1675 56.5579 40.3492 56.8983 39.6715 57.5792C39 58.2663 38.6627 59.094 38.6627 60.0622V64.9719H37.1791V60.0591Z" fill="#57C8CE" />
          <path d="M48.8819 64.9999C47.5296 64.9999 46.374 64.5096 45.412 63.5257C44.45 62.5513 43.9691 61.3676 43.9691 59.9809C43.9691 58.6004 44.45 57.4198 45.412 56.436C46.374 55.4521 47.5296 54.9618 48.8819 54.9618C50.2343 54.9618 51.3899 55.4521 52.3487 56.436C53.3107 57.4198 53.7917 58.6004 53.7917 59.9809V64.8156H52.1644V59.9809C52.1644 59.0564 51.8428 58.2662 51.1994 57.6072C50.556 56.9482 49.7845 56.6202 48.8788 56.6202C47.9668 56.6202 47.1922 56.9482 46.5489 57.6072C45.9055 58.2662 45.5838 59.0564 45.5838 59.9809C45.5838 60.9053 45.9055 61.6955 46.5489 62.3545C47.1922 63.0135 47.9699 63.3415 48.8788 63.3415V64.9999H48.8819Z" fill="#57C8CE" />
          <path d="M70.6916 55.0931C72.0502 55.0931 73.2089 55.5834 74.1709 56.561C75.1328 57.5417 75.6138 58.7223 75.6138 60.1059V64.9532H73.9772V60.1059C73.9772 59.1783 73.6587 58.3881 73.0246 57.7322C72.3813 57.0857 71.6036 56.7609 70.6947 56.7609C69.7921 56.7609 69.0175 57.0857 68.3741 57.7322C67.7307 58.3881 67.409 59.1783 67.409 60.1059V64.9532H65.7818V60.1059C65.7818 59.1783 65.4601 58.3881 64.8168 57.7322C64.1734 57.0857 63.3988 56.7609 62.4962 56.7609C61.5936 56.7609 60.819 57.0857 60.1756 57.7322C59.5322 58.3881 59.2105 59.1783 59.2105 60.1059V64.9657H57.5833V55.2243H59.2105V56.383C60.1506 55.521 61.2438 55.09 62.4962 55.09C63.3332 55.09 64.1234 55.2961 64.8605 55.7084C65.5694 56.105 66.1473 56.6516 66.5939 57.3418C67.0405 56.6485 67.6245 56.105 68.3398 55.7084C69.0675 55.2992 69.8514 55.0931 70.6916 55.0931Z" fill="#57C8CE" />
          <path d="M83.8592 64.9688C82.4787 64.9688 81.2981 64.4784 80.3143 63.4946C79.3305 62.5108 78.8401 61.3302 78.8401 59.9497C78.8401 58.5692 79.3305 57.3887 80.3143 56.4048C81.2981 55.421 82.4787 54.9307 83.8592 54.9307C85.2397 54.9307 86.4203 55.421 87.4041 56.4048C88.3879 57.3887 88.8783 58.5692 88.8783 59.9497V60.7743H83.8592V59.1283H87.123C86.9356 58.3912 86.5421 57.7853 85.9424 57.3075C85.3365 56.8296 84.6431 56.5922 83.8623 56.5922C82.9379 56.5922 82.1477 56.9202 81.4887 57.5792C80.8297 58.2382 80.5017 59.0284 80.5017 59.9528C80.5017 60.8773 80.8297 61.6675 81.4887 62.3265C82.1477 62.9855 82.9379 63.3135 83.8623 63.3135V64.9688H83.8592Z" fill="#57C8CE" />
          <path d="M93.8317 59.753C93.8317 60.8024 94.1378 61.6582 94.7531 62.3203C95.3683 62.9855 96.1617 63.3197 97.1361 63.3291L97.1267 64.9657C95.6963 64.9594 94.5188 64.4628 93.5943 63.4821C92.6636 62.4983 92.1951 61.2553 92.1951 59.753V50.8018H93.8317V55.0931H97.1361V56.7297H93.8317V59.753Z" fill="#231F20" />
          <path d="M104.582 64.9688C103.201 64.9688 102.021 64.4784 101.037 63.4946C100.053 62.5108 99.5628 61.3302 99.5628 59.9497C99.5628 58.5692 100.053 57.3887 101.037 56.4048C102.021 55.421 103.201 54.9307 104.582 54.9307C105.962 54.9307 107.143 55.421 108.127 56.4048C109.111 57.3887 109.601 58.5692 109.601 59.9497V60.7743H104.582V59.1283H107.846C107.658 58.3912 107.265 57.7853 106.665 57.3075C106.059 56.8296 105.366 56.5922 104.585 56.5922C103.661 56.5922 102.87 56.9202 102.211 57.5792C101.552 58.2382 101.224 59.0284 101.224 59.9528C101.224 60.8773 101.552 61.6675 102.211 62.3265C102.87 62.9855 103.661 63.3135 104.585 63.3135V64.9688H104.582Z" fill="#231F20" />
          <path d="M113.936 63.4947C112.952 62.5202 112.462 61.3365 112.462 59.9498C112.462 58.5693 112.952 57.3887 113.936 56.4049C114.91 55.4305 116.094 54.9432 117.481 54.9432C118.499 54.9432 119.433 55.2274 120.276 55.799L119.355 57.1639C118.793 56.7797 118.165 56.5892 117.481 56.5892C116.556 56.5892 115.766 56.9171 115.107 57.5761C114.448 58.2351 114.12 59.0253 114.12 59.9498C114.12 60.8743 114.448 61.6645 115.107 62.3235C115.766 62.9825 116.556 63.3104 117.481 63.3104C118.196 63.3104 118.846 63.1012 119.433 62.6826L120.398 64.0381C119.524 64.6597 118.552 64.9689 117.481 64.9689C116.094 64.9689 114.914 64.4754 113.936 63.4947Z" fill="#231F20" />
          <path d="M128.081 55.1055C129.44 55.1055 130.602 55.5927 131.57 56.5672C132.532 57.5479 133.013 58.7285 133.013 60.1027V64.9562H131.376V60.1027C131.376 59.1813 131.055 58.3943 130.411 57.7415C129.768 57.0888 128.99 56.7639 128.081 56.7639C127.172 56.7639 126.392 57.0888 125.739 57.7415C125.095 58.3943 124.774 59.1813 124.774 60.1027V64.9687H123.137V50.811H124.774V56.3892C125.714 55.5334 126.816 55.1055 128.081 55.1055Z" fill="#231F20" />
          <path d="M53.7948 64.6564H52.1676V64.9999H53.7948V64.6564Z" fill="#5CD2DD" />
        </svg>
      </div>
      <div className={styles.search}>
        <div className={styles.search2}>
          <input type="text" placeholder="Rechercher un produit" />
        </div>
        <div className={styles.searchicon}>
          <div className={styles.searchicon2}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L15.5001 15.5M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" stroke="#003349" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.headerRightBlock}><div className={styles.headerRightBlock2}>
      <div className={styles.bulb}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 12.375V14.25C11.25 14.9489 11.25 15.2984 11.1358 15.574C10.9836 15.9416 10.6916 16.2336 10.324 16.3858C10.0484 16.5 9.69891 16.5 9 16.5C8.30109 16.5 7.95163 16.5 7.67597 16.3858C7.30843 16.2336 7.01642 15.9416 6.86418 15.574C6.75 15.2984 6.75 14.9489 6.75 14.25V12.375M11.25 12.375C13.2366 11.507 14.625 9.43161 14.625 7.125C14.625 4.0184 12.1066 1.5 9 1.5C5.8934 1.5 3.375 4.0184 3.375 7.125C3.375 9.43161 4.76336 11.507 6.75 12.375M11.25 12.375H6.75" stroke="#282F35" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Inspirations</span>
      </div>
      <div className={styles.heart}>
        <div className={styles.heartcover}>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99428 2.27985C7.32816 0.332 4.54978 -0.191965 2.46224 1.59168C0.374693 3.37532 0.0807963 6.35748 1.72015 8.467C3.08317 10.2209 7.20813 13.9201 8.56007 15.1174C8.71133 15.2513 8.78695 15.3183 8.87517 15.3446C8.95216 15.3676 9.03641 15.3676 9.1134 15.3446C9.20161 15.3183 9.27724 15.2513 9.42849 15.1174C10.7804 13.9201 14.9054 10.2209 16.2684 8.467C17.9078 6.35748 17.6498 3.35656 15.5263 1.59168C13.4029 -0.173202 10.6604 0.332 8.99428 2.27985Z" stroke="#8F9BA0" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className={styles.hearthead}>Mes favoris</span>
        </div>      
        <div className={styles.num}><span >24</span></div>          
      </div>      
      <div className={styles.cart}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.66666 1.66663H2.75513C2.96014 1.66663 3.06265 1.66663 3.14514 1.70433C3.21784 1.73755 3.27944 1.79098 3.32261 1.85825C3.3716 1.93458 3.3861 2.03606 3.41509 2.23901L3.80951 4.99996M3.80951 4.99996L4.68609 11.4428C4.79733 12.2604 4.85295 12.6692 5.04841 12.9769C5.22064 13.2481 5.46756 13.4637 5.75945 13.5978C6.09071 13.75 6.50328 13.75 7.32841 13.75H14.46C15.2454 13.75 15.6382 13.75 15.9591 13.6086C16.2421 13.484 16.4849 13.2832 16.6602 13.0285C16.8591 12.7396 16.9326 12.3538 17.0796 11.5823L18.1826 5.79137C18.2343 5.5198 18.2602 5.38401 18.2227 5.27788C18.1898 5.18477 18.1249 5.10636 18.0396 5.05664C17.9424 4.99996 17.8041 4.99996 17.5277 4.99996H3.80951ZM8.33332 17.5C8.33332 17.9602 7.96023 18.3333 7.49999 18.3333C7.03975 18.3333 6.66666 17.9602 6.66666 17.5C6.66666 17.0397 7.03975 16.6666 7.49999 16.6666C7.96023 16.6666 8.33332 17.0397 8.33332 17.5ZM15 17.5C15 17.9602 14.6269 18.3333 14.1667 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 17.0397 13.7064 16.6666 14.1667 16.6666C14.6269 16.6666 15 17.0397 15 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <button>Panier</button>
      </div>

      <div className={styles.avatar}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="22" fill="#EAEDEE" />
        </svg>
        <div className={styles.dropdown}>
          <button>FR</button>
          <div className={styles.droparrow}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.01229 5.91671C4.74709 5.91665 4.49278 5.8144 4.30529 5.63243L0.305288 1.75149C0.209778 1.66199 0.133596 1.55493 0.0811869 1.43655C0.0287779 1.31818 0.00119157 1.19087 3.7757e-05 1.06204C-0.00111606 0.933213 0.0241854 0.805453 0.0744663 0.686215C0.124747 0.566976 0.199 0.458648 0.292893 0.36755C0.386786 0.276452 0.498438 0.204409 0.621334 0.155625C0.74423 0.106841 0.87591 0.0822912 1.00869 0.0834107C1.14147 0.0845301 1.27269 0.111295 1.39469 0.162144C1.5167 0.212993 1.62704 0.286909 1.71929 0.379576L5.01229 3.57456L8.30529 0.379576C8.49389 0.20284 8.74649 0.105046 9.00869 0.107256C9.27088 0.109467 9.5217 0.211505 9.70711 0.391395C9.89251 0.571284 9.99768 0.814632 9.99996 1.06902C10.0022 1.32342 9.90145 1.5685 9.71929 1.75149L5.71929 5.63243C5.53179 5.8144 5.27748 5.91665 5.01229 5.91671Z" fill="#1F2A37" />
            </svg>
          </div>
        </div>
      </div>
      </div> </div>
    </div>
      <div>
        <Navbar/>
      </div>
    </header>
        <hr></hr>
        </>
  );
};

export default Header;