# :pushpin: EuroVoyage Tours
>유럽 여행 예약할 수 있는 사이트  
>https://eurovoyage.netlify.app/  

</br>

## 1. 프로젝트 소개
  -코로나로 인해 좋아하던 여행을 한동안 못가게 되어 아쉬웠습니다. 그런 마음을 담아 좋아하는 유럽    여행을 테마로 이 프로젝트를 제작하게 되었습니다.
  
## 2. 제작 기간 & 참여 인원
- 2022년 6월 24일 ~ 6월 29일 수정: 2023년 1월 28일
- 개인 프로젝트

</br>

## 3. 사용 기술

  - React.js 
  - Tailwind CSS
  - Git

</br>

## 4. 개발 과정

Tailiwind CSS에서 global styling 기능을 사용함

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` css

//making a global style variable
:root {
  --primary-dark: #5651e5;
  --primary-light: #709dff;
}

.icon {
  color: var(--primary-dark);
}
  
@layer base {
  body {
    @apply font-[Stoke];
  }
  li {
    @apply p-4;
  }

  h1 {
    @apply text-3xl md:text-4xl font-bold;
  }

  h2 {
    @apply text-3xl font-bold;
  }
  h3 {
    @apply text-xl font-bold;
  }
  button {
    @apply p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md;
  }
  .icon {
    @apply text-2xl cursor-pointer;
  }
}
```

</div>
</details>


### 4.1. Navbar

- react-icons을 사용함.
<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
  </div>  

```
</div>
</details>


- md(768px and up) 기준으로 반응형 디자인 만듬
- State를 사용해 햄버거 메뉴 클릭시 모바일 메뉴 나오게 함
- State를 사용해 메뉴 클릭시 메인 로고 사라지게 함
<img src="https://user-images.githubusercontent.com/90593162/226845330-5df8ddf6-6d95-4763-a429-2f29592fd6da.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

.
.
.

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
        }
      >
        <ul>
          <h1>EUROPE</h1>
          <li className="border-b">Why us?</li>
          <li className="border-b">Book</li>
          <li className="border-b">Destination</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>

```
</div>
</details>

### 4.2. Hero

-Video를 배경화면으로 함
<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
    <video
        className="w-full h-full object-cover"
        src={london}
        autoPlay
        loop
        muted
      />
```
</div>
</details>

-React Form으로 input 창 생성

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90 mt-3">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Stoke] focus:outline-none pl-4 "
              type="text"
              placeholder="Search Destination"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>

```
</div>
</details>

### 4.3. Destinations

-md(768px and up) 기준으로 반응형 디자인 만듬

<img src="https://user-images.githubusercontent.com/90593162/227235181-faa1f222-599a-45a3-90c4-4da6ef8bf0b6.gif">


<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={europe5}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={europe1} alt="/" />
        <img className="w-full h-full object-cover" src={europe2} alt="/" />
        <img className="w-full h-full object-cover" src={europe3} alt="/" />
        <img className="w-full h-full object-cover" src={europe4} alt="/" />
      </div>

```
</div>
</details>

### 4.4. Search
- React from으로 select,input(date) 창 생성




### 4.3. Selects










  



## 6. 회고 / 느낀점
